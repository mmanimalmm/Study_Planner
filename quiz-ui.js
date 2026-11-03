/* Study Planner quiz UI: multiple-choice auto grading, coding exercises self-reviewed */
const STUDY_QUIZ_KEY = 'study-planner-assessment-v1';
let studyQuizProgress = {};
try { studyQuizProgress = JSON.parse(localStorage.getItem(STUDY_QUIZ_KEY) || '{}') || {}; } catch (err) {}
function saveQuizProgress() { try { localStorage.setItem(STUDY_QUIZ_KEY, JSON.stringify(studyQuizProgress)); window.studyCloud?.scheduleSave(); } catch (err) {} }
function renderAssessment(containerId, itemKey, quiz) {
  const root = document.getElementById(containerId);
  if (!root) return;
  root.replaceChildren();
  const prev = studyQuizProgress[itemKey];
  const intro = document.createElement('p');
  intro.className = 'sub';
  intro.textContent = '학습이 끝난 뒤 풀어보세요. 객관식은 자동 채점되고, 오답 해설이 제공돼요. 실습 과제의 코드는 직접 실행하여 확인합니다.';
  root.append(intro);
  const score = document.createElement('div');
  score.className = 'quizHistory';
  score.textContent = prev ? '이전 결과: 최근 ' + prev.last + '/' + quiz.length + ' · 최고 ' + prev.best + '/' + quiz.length + ' · 응시 ' + prev.attempts + '회' : '아직 응시하지 않았어요.';
  root.append(score);
  const form = document.createElement('form');
  form.className = 'quizForm';
  quiz.forEach((q, i) => {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'quizQuestion';
    const legend = document.createElement('legend');
    legend.textContent = '문제 ' + (i + 1) + '. ' + q.question;
    fieldset.append(legend);
    q.options.forEach((option, j) => {
      const label = document.createElement('label');
      label.className = 'quizOption';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'question-' + i;
      input.value = String(j);
      input.required = true;
      const span = document.createElement('span');
      span.textContent = option;
      label.append(input, span);
      fieldset.append(label);
    });
    form.append(fieldset);
  });
  const controls = document.createElement('div');
  controls.className = 'toolbar';
  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.className = 'btn';
  submit.textContent = '퀴즈 채점하기';
  const reset = document.createElement('button');
  reset.type = 'button';
  reset.className = 'btn secondary';
  reset.textContent = '다시 풀기';
  reset.onclick = () => renderAssessment(containerId, itemKey, quiz);
  controls.append(submit, reset);
  form.append(controls);
  const result = document.createElement('div');
  result.className = 'quizResult';
  result.setAttribute('aria-live', 'polite');
  form.append(result);
  form.onsubmit = e => {
    e.preventDefault();
    const answers = quiz.map((q,i) => form.querySelector('input[name="question-' + i + '"]:checked'));
    if (answers.some(v => !v)) {
      result.replaceChildren();
      const p = document.createElement('p');
      p.className = 'quizWarning';
      p.textContent = '모든 문제에 답한 다음 채점해 주세요.';
      result.append(p);
      return;
    }
    const chosen = answers.map(input => Number(input.value));
    const correct = quiz.reduce((sum, q, i) => sum + Number(chosen[i] === q.answer), 0);
    const former = studyQuizProgress[itemKey] || {best:0,attempts:0};
    studyQuizProgress[itemKey] = {best:Math.max(former.best || 0,correct),last:correct,attempts:(former.attempts || 0)+1};
    saveQuizProgress();
    score.textContent = '최근 ' + correct + '/' + quiz.length + ' · 최고 ' + studyQuizProgress[itemKey].best + '/' + quiz.length + ' · 응시 ' + studyQuizProgress[itemKey].attempts + '회';
    result.replaceChildren();
    const headline = document.createElement('h3');
    headline.textContent = correct + ' / ' + quiz.length + '점 · ' + (correct===quiz.length?'모든 문제를 맞혔어요!':'틀린 개념을 확인하고 다시 풀어보세요.');
    result.append(headline);
    quiz.forEach((q,i) => {
      const p = document.createElement('div');
      p.className = 'quizExplanation ' + (chosen[i]===q.answer?'correct':'incorrect');
      const title = document.createElement('strong');
      title.textContent = '문제 ' + (i+1) + ' · ' + (chosen[i]===q.answer?'정답':'오답') + ' · 정답: ' + q.options[q.answer];
      const explanation = document.createElement('p');
      explanation.textContent = q.explanation;
      p.append(title,explanation);
      result.append(p);
    });
    submit.disabled = true;
    for (const input of form.querySelectorAll('input[type="radio"]')) input.disabled = true;
    result.scrollIntoView({behavior:'smooth',block:'nearest'});
  };
  root.append(form);
}
window.renderAssessment=renderAssessment;
window.studyQuizProgress=studyQuizProgress;
