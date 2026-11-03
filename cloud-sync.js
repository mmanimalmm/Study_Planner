/* Study Planner cloud sync — public browser key, user-scoped RLS, explicit first import */
(() => {
  "use strict";
  const PROJECT_URL = 'https://rrjrtcpfluzahtaelwna.supabase.co';
  const PUBLISHABLE_KEY = 'sb_publishable_mKRYWFWh5Eb1R9FvW1ADVw_FIA8cYeW';
  const KEYS = ['study-planner-v1','study-planner-cert-v1','study-planner-monthly-v1','study-planner-assessment-v1'];
  const $ = id => document.getElementById(id);
  const cloud = {
    client:null,user:null,remote:null,remoteUpdatedAt:null,ready:false,
    saving:false,dirty:false,timer:null,loading:false,
    scheduleSave,downloadBackup,manualSync
  };
  window.studyCloud = cloud;
  const buttons=['cloudLogin','cloudSignup','cloudLogout','cloudDownload','cloudImport','cloudUpload','cloudStart','cloudSyncNow'];
  function status(message, danger=false) {
    const target=$('cloudStatus');
    target.textContent=message;
    target.classList.toggle('cloudError',danger);
    const tiny=$('cloudQuickStatus');
    if(tiny) tiny.textContent=message.length>54?message.slice(0,54)+'…':message;
  }
  function hide(id,hidden){$(id).classList.toggle('hidden',hidden)}
  function localData() {
    const records={};
    for (const key of KEYS) {
      const raw=localStorage.getItem(key);
      if(raw!==null) {
        try {records[key]=JSON.parse(raw)} catch (_) {records[key]=null}
      }
    }
    return {version:1,records};
  }
  function meaningful(snapshot) {
    const records=(snapshot && snapshot.records)||{};
    const day=records[KEYS[0]]||{};
    if(Object.values(day.checks||{}).some(Boolean) || Object.values(day.notes||{}).some(v=>String(v||'').trim()))return true;
    const cert=records[KEYS[1]]||{};
    if(Object.values(cert).some(x=>Object.values(x.dates||{}).some(Boolean)||Object.values(x.checks||{}).some(Boolean)))return true;
    const monthly=records[KEYS[2]]||{};
    if(Object.values(monthly.checks||{}).some(Boolean))return true;
    const quizzes=records[KEYS[3]]||{};
    return Object.keys(quizzes).length>0;
  }
  function normalizedRecords(snapshot) {
    const r=(snapshot&&snapshot.records)||{};
    const filtered={};
    for(const k of KEYS) {
      if(r[k]!==undefined && r[k]!==null) filtered[k]=r[k];
    }
    return filtered;
  }
  function equals(a,b){return JSON.stringify(normalizedRecords(a))===JSON.stringify(normalizedRecords(b))}
  function fileDownload(contents,name) {
    const blob=new Blob([contents],{type:'application/json;charset=utf-8'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;a.download=name;document.body.append(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1200);
  }
  function downloadBackup() {
    try {
      const data=localData();
      fileDownload(JSON.stringify({exportedAt:new Date().toISOString(),source:'Study Planner local browser',...data},null,2),'study-planner-backup-'+new Date().toISOString().slice(0,10)+'.json');
      status('이 브라우저의 백업 JSON을 다운로드했어요.');
    } catch (e) {status('백업 실패: '+e.message,true)}
  }
  function updatePanels() {
    const signed=!!cloud.user;
    hide('cloudAuthForm',signed);
    hide('cloudSignedPanel',!signed);
    $('cloudUserEmail').textContent=signed?cloud.user.email||'로그인됨':'';
    hide('cloudChoices',!(signed&&!cloud.ready));
    hide('cloudReady',!(signed&&cloud.ready));
    if(!signed) {$('cloudChoices').classList.add('hidden');return}
    hide('cloudStart',!!cloud.remote);
    hide('cloudImport',!cloud.remote);
    hide('cloudUpload',!cloud.remote);
    $('cloudChoiceHint').textContent=cloud.remote
      ? '클라우드에도 기록이 있어요. 기기 기록과 차이가 있으면 덮어쓰지 않고 직접 선택해야 해요.'
      : (meaningful(localData())?'이 기기의 기존 학습 기록을 클라우드에 처음 저장할 수 있어요.':'이 기기에 학습 기록이 없어요. 집 노트북 등에 Day 기록이 있다면 그 기기에서 먼저 업로드하세요. 첫 사용자라면 여기서 시작해도 돼요.');
  }
  function clearDecision() {
    cloud.ready=false;cloud.dirty=false;clearTimeout(cloud.timer);
  }
  async function loadRemote() {
    const {data,error}=await cloud.client.from('study_progress').select('data,updated_at').eq('user_id',cloud.user.id).maybeSingle();
    if(error) throw error;
    cloud.remote=data?data.data:null;
    cloud.remoteUpdatedAt=data?data.updated_at:null;
    return data;
  }
  async function onSession(session) {
    if (!session||!session.user) {
      cloud.user=null;cloud.remote=null;cloud.remoteUpdatedAt=null;clearDecision();
      updatePanels();
      status('로그인하면 여러 기기에서 학습 기록을 공유할 수 있어요.');
      return;
    }
    if (cloud.user && cloud.user.id===session.user.id && (cloud.ready||cloud.loading)) return;
    cloud.loading=true;clearDecision();cloud.user=session.user;updatePanels();
    status('계정을 확인하고 클라우드 기록을 조회하는 중…');
    try {
      const {data:{user},error}=await cloud.client.auth.getUser();
      if(error||!user) throw error||new Error('계정을 확인할 수 없습니다.');
      if(cloud.user?.id!==user.id)return;
      cloud.user=user;
      const row=await loadRemote();
      if(!row){status('클라우드에 아직 학습 기록이 없습니다. 아래에서 동기화를 시작해 주세요.')}
      else if(equals(localData(),cloud.remote)){cloud.ready=true;status('클라우드 동기화가 연결됐어요. 변경 사항은 자동 저장됩니다.')}
      else {status('클라우드와 현재 기기에 다른 기록이 있어요. 어느 기록을 사용할지 선택해 주세요.')}
      updatePanels();
    } catch (e) {
      status('클라우드 조회 실패: '+(e.message||e)+'. 이 기기의 기록은 계속 저장됩니다.',true);
      updatePanels();
    } finally {cloud.loading=false}
  }
  async function authAction(kind) {
    const email=$('cloudEmail').value.trim();
    const password=$('cloudPassword').value;
    if(!email||!password) {status('이메일과 비밀번호를 입력해 주세요.',true);return}
    if(kind==='signup'&&password.length<6){status('비밀번호는 최소 6자 이상 사용해 주세요.',true);return}
    for(const id of ['cloudLogin','cloudSignup']) $(id).disabled=true;
    try{
      const params={email,password};
      const res=kind==='signup'
        ? await cloud.client.auth.signUp({...params,options:{emailRedirectTo:window.location.origin+window.location.pathname}})
        : await cloud.client.auth.signInWithPassword(params);
      if(res.error) throw res.error;
      $('cloudPassword').value='';
      if(kind==='signup'&&!res.data.session)status('가입 요청 완료! 이메일 인증 링크를 확인하고 로그인해 주세요.');
      else status('로그인 성공! 학습 기록을 확인하고 있어요.');
    }catch(e){status('인증 실패: '+(e.message||e),true)}
    finally{for(const id of ['cloudLogin','cloudSignup']) $(id).disabled=false}
  }
  function applySnapshot(remote) {
    const records=normalizedRecords(remote);
    // The user explicitly chose cloud data: back up before replacing any browser record.
    for (const key of KEYS) {
      if(Object.prototype.hasOwnProperty.call(records,key))localStorage.setItem(key,JSON.stringify(records[key]));
      else localStorage.removeItem(key);
    }
  }
  async function importCloud() {
    if(!cloud.user||!cloud.remote)return;
    if(meaningful(localData())&&!window.confirm('이 브라우저에 기존 학습 기록이 있어요. 클라우드 기록을 불러오면 현재 기록을 대신합니다. 먼저 JSON 백업을 다운로드할까요?'))return;
    try {
      if(meaningful(localData()))downloadBackup();
      applySnapshot(cloud.remote);
      window.location.reload();
    }catch(e){status('클라우드 불러오기 실패: '+(e.message||e),true)}
  }
  async function sendSnapshot(snapshot,initial=false) {
    const stamp=new Date().toISOString();
    let res;
    if(initial) {
      res=await cloud.client.from('study_progress').insert({user_id:cloud.user.id,data:snapshot,updated_at:stamp}).select('updated_at').single();
    } else {
      res=await cloud.client.from('study_progress').update({data:snapshot,updated_at:stamp})
        .eq('user_id',cloud.user.id).eq('updated_at',cloud.remoteUpdatedAt)
        .select('updated_at').maybeSingle();
    }
    if(res.error)throw res.error;
    if(!res.data)throw new Error('다른 기기에서 기록이 변경되었습니다. 기록을 다시 비교해 주세요.');
    cloud.remote=snapshot;
    cloud.remoteUpdatedAt=res.data.updated_at;
    return res.data;
  }
  async function uploadCurrent() {
    if(!cloud.user||cloud.saving)return;
    if(cloud.remote && !window.confirm('클라우드의 기존 기록을 이 기기 기록으로 교체합니다. 다른 기기의 변경사항이 사라질 수 있어요. 계속할까요?'))return;
    cloud.saving=true;status('학습 기록을 클라우드에 업로드하는 중…');
    try {
      await sendSnapshot(localData(),!cloud.remote);
      cloud.ready=true;
      status('클라우드 동기화가 시작됐어요. 이후 변경사항은 자동 저장됩니다.');
      updatePanels();
    }catch(e){
      status('업로드 실패: '+(e.message||e)+'. 기존 기기 기록은 보존됐어요.',true);
      try {await loadRemote()} catch(_){}
      cloud.ready=false;updatePanels();
    }finally{cloud.saving=false}
  }
  function scheduleSave() {
    if(!cloud.ready||!cloud.user)return;
    cloud.dirty=true;
    clearTimeout(cloud.timer);
    cloud.timer=setTimeout(pushChanges,1000);
    status('변경사항 저장 준비 중…');
  }
  async function pushChanges() {
    if(!cloud.ready||!cloud.user||!cloud.dirty||cloud.saving)return;
    cloud.saving=true;
    cloud.dirty=false;
    const snapshot=localData();
    status('클라우드에 학습 기록 저장 중…');
    try {
      await sendSnapshot(snapshot);
      status('클라우드 동기화 완료 · '+new Date().toLocaleTimeString('ko-KR'));
    }catch(e) {
      clearDecision();
      status('동기화 중단: '+(e.message||e)+' 기기 기록을 보존했어요. 아래에서 다시 선택해 주세요.',true);
      try {await loadRemote()}catch(_){}
      updatePanels();
    }finally {
      cloud.saving=false;
      if(cloud.dirty&&cloud.ready) {
        clearTimeout(cloud.timer);
        cloud.timer=setTimeout(pushChanges,350);
      }
    }
  }
  async function manualSync() {
    if(!cloud.ready||!cloud.user||cloud.saving)return;
    status('클라우드의 최신 변경사항 확인 중…');
    try{
      const old=cloud.remoteUpdatedAt;
      const latest=await loadRemote();
      if(latest&&latest.updated_at!==old){
        clearDecision();
        status('다른 기기에서 기록이 변경됐어요. 클라우드 기록을 가져올지 선택해 주세요.',true);
        updatePanels();
        return;
      }
      cloud.dirty=true;await pushChanges();
    }catch(e){status('동기화 확인 실패: '+(e.message||e),true)}
  }
  async function logout() {
    if(cloud.saving){status('클라우드 저장이 진행 중이에요. 저장 완료 후 로그아웃해 주세요.',true);return}
    if(cloud.dirty&&cloud.ready) {
      await pushChanges();
      if(!cloud.ready){status('미저장 기록이 있어요. 문제 해결 후 로그아웃하거나 백업해 주세요.',true);return}
    }
    const {error}=await cloud.client.auth.signOut();
    if(error)status('로그아웃 오류: '+error.message,true);
    else status('로그아웃했습니다. 이 브라우저에 기존 기록은 남아 있어요. 공용 PC라면 사용 후 브라우저 데이터를 정리해 주세요.');
  }
  $('cloudLogin').onclick=()=>authAction('login');
  $('cloudSignup').onclick=()=>authAction('signup');
  $('cloudLogout').onclick=logout;
  $('cloudDownload').onclick=downloadBackup;
  $('cloudImport').onclick=importCloud;
  $('cloudUpload').onclick=uploadCurrent;
  $('cloudStart').onclick=uploadCurrent;
  $('cloudSyncNow').onclick=manualSync;
  updatePanels();
  if(!window.supabase||!window.supabase.createClient) {
    status('Supabase 라이브러리를 불러오지 못했어요. 인터넷 연결 또는 브라우저 차단 설정을 확인해 주세요.',true);
    for(const id of ['cloudLogin','cloudSignup'])$(id).disabled=true;
    return;
  }
  try{
    cloud.client=window.supabase.createClient(PROJECT_URL,PUBLISHABLE_KEY,{
      auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,flowType:'pkce'}
    });
    cloud.client.auth.onAuthStateChange((event,session)=>{
      if(['INITIAL_SESSION','SIGNED_IN','SIGNED_OUT','USER_UPDATED'].includes(event))setTimeout(()=>onSession(session),0);
    });
    status('준비 완료 · 로그인하면 기존 기록을 안전하게 연결할 수 있어요.');
  }catch(e){status('Supabase 초기화 실패: '+(e.message||e),true)}
})();
