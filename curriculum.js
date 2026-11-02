window.STUDY_CURRICULUM=[
  {
    "title": "Python 입문",
    "track": "공통기초",
    "focus": "변수·조건문·반복문·함수",
    "weeks": [
      "1주: 개발환경·변수·입출력",
      "2주: 조건문·반복문",
      "3주: 리스트·딕셔너리·함수",
      "4주: 예외처리·파일·미니 프로젝트"
    ],
    "project": "콘솔 버그 관리 프로그램",
    "check": "AI 없이 입력·조회·저장 기능을 직접 구현하고 코드 흐름을 설명한다.",
    "resources": [
      {
        "title": "하버드 CS50P",
        "type": "영상 강의",
        "cost": "무료",
        "url": "https://cs50.harvard.edu/python/",
        "why": "영어 강의·과제 포함. 주교재로 추천",
        "target": "변수·입력·조건문·반복문을 스스로 구현하고 간단한 과제를 풀 수 있다."
      },
      {
        "title": "혼자 공부하는 파이썬 저자 직강",
        "type": "한국어 영상",
        "cost": "현재 무료 표시",
        "url": "https://www.hanbit.co.kr/product/C5104434431",
        "why": "한국어 설명이 필요한 날 보충",
        "target": "강의 예시 없이 변수·조건문·반복문을 직접 따라 만들 수 있다."
      },
      {
        "title": "Python 공식 한국어 튜토리얼",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://docs.python.org/ko/3/tutorial/",
        "why": "문법 확인·복습",
        "target": "문자열·자료형·함수 문법을 찾아보고 코드에 적용할 수 있다."
      },
      {
        "title": "혼자 공부하는 파이썬(개정판)",
        "type": "선택 도서",
        "cost": "구매 선택",
        "url": "https://www.hanbit.co.kr/books/B1681646737?code=B1681646737",
        "why": "종이책이 편한 경우에만 구매",
        "target": "예제 설명을 읽고 다른 입력값으로 코드를 바꿀 수 있다."
      }
    ]
  },
  {
    "title": "Python 응용·Git",
    "track": "공통기초",
    "focus": "함수·클래스·JSON·pytest·버전 관리",
    "weeks": [
      "1주: 함수·클래스 기초",
      "2주: 파일·JSON·패키지",
      "3주: Git commit·branch·README",
      "4주: pytest와 코드 리팩터링"
    ],
    "project": "JSON 저장형 CLI 작업 관리기 + 테스트",
    "check": "GitHub에 코드를 공개하고 기능 5개를 테스트로 검증한다.",
    "resources": [
      {
        "title": "CS50P 다음 주차",
        "type": "영상 강의",
        "cost": "무료",
        "url": "https://cs50.harvard.edu/python/",
        "why": "예외처리·파일·정규식·객체",
        "target": "예외처리·파일·객체 기본을 설명하고 직접 코딩할 수 있다."
      },
      {
        "title": "GitHub Skills: Introduction to GitHub",
        "type": "실습 강의",
        "cost": "무료",
        "url": "https://github.com/skills/introduction-to-github",
        "why": "branch, commit, PR 직접 실습",
        "target": "branch·commit·pull request를 만들어 변경 이력을 설명할 수 있다."
      },
      {
        "title": "pytest 시작하기",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://docs.pytest.org/en/stable/getting-started.html",
        "why": "단위 테스트 구현",
        "target": "assert로 예상 결과를 검증하고 실패 메시지를 해석할 수 있다."
      }
    ]
  },
  {
    "title": "HTTP·API·SQL",
    "track": "공통기초",
    "focus": "요청·응답·REST·SQL 쿼리",
    "weeks": [
      "1주: HTTP 메서드·상태 코드·JSON",
      "2주: Python requests로 공개 API 호출",
      "3주: SQL SELECT·WHERE·JOIN",
      "4주: SQLite 데이터 저장 미니 서비스"
    ],
    "project": "공개 API 수집 + SQLite 저장 프로그램",
    "check": "HTTP 요청과 DB 조회를 혼자 구현하고 오류 상황을 처리한다.",
    "resources": [
      {
        "title": "MDN HTTP 개요",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview",
        "why": "요청/응답, 헤더 이해",
        "target": "HTTP 요청·응답·헤더·상태 코드의 역할을 설명할 수 있다."
      },
      {
        "title": "SQLBolt",
        "type": "브라우저 실습",
        "cost": "무료",
        "url": "https://sqlbolt.com/",
        "why": "SELECT부터 JOIN까지 직접 연습",
        "target": "WHERE·JOIN 쿼리를 실제 데이터로 작성할 수 있다."
      },
      {
        "title": "Python sqlite3",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://docs.python.org/3/library/sqlite3.html",
        "why": "Python과 DB 연결",
        "target": "SQLite 연결과 조회 결과를 Python으로 출력할 수 있다."
      }
    ]
  },
  {
    "title": "Python 백엔드",
    "track": "개발기반",
    "focus": "FastAPI·CRUD·DB·인증 개념",
    "weeks": [
      "1주: FastAPI 라우팅·요청·응답",
      "2주: CRUD와 데이터 검증",
      "3주: DB 연결·오류 처리",
      "4주: 인증 기초·API 자동 테스트"
    ],
    "project": "회원·게시글 REST API (로컬)",
    "check": "README만 보고 타인이 서버를 실행하고 API를 호출할 수 있다.",
    "resources": [
      {
        "title": "FastAPI 공식 한국어 자습서",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://fastapi.tiangolo.com/ko/tutorial/",
        "why": "단계별 API 서버 구현",
        "target": "경로·요청 본문·응답 모델을 갖춘 API를 직접 구현할 수 있다."
      },
      {
        "title": "FastAPI 인증·보안 가이드",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://fastapi.tiangolo.com/tutorial/security/",
        "why": "인증·권한 구조 입문",
        "target": "인증과 인가를 구분하고 인증 흐름을 그림으로 설명할 수 있다."
      },
      {
        "title": "PostgreSQL 튜토리얼",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://www.postgresql.org/docs/current/tutorial.html",
        "why": "실무형 관계형 DB 익히기",
        "target": "테이블·키·SQL 조회의 기본 구조를 구현할 수 있다."
      }
    ]
  },
  {
    "title": "Linux·네트워크",
    "track": "개발기반",
    "focus": "셸·파일 권한·TCP/IP·DNS·로그",
    "weeks": [
      "1주: Ubuntu·터미널·파일 시스템",
      "2주: 프로세스·사용자·권한",
      "3주: TCP/IP·DNS·포트·HTTPS",
      "4주: 로그 분석·기본 서버 점검"
    ],
    "project": "개인 PC Linux 실습 환경 + 서버 점검 노트",
    "check": "서버 로그·열린 포트·파일 권한을 보고 동작을 설명한다.",
    "resources": [
      {
        "title": "Ubuntu 터미널 입문",
        "type": "공식 실습",
        "cost": "무료",
        "url": "https://ubuntu.com/tutorials/command-line-for-beginners",
        "why": "리눅스 명령어 기본",
        "target": "파일 이동·검색·읽기·권한 확인 명령을 실행할 수 있다."
      },
      {
        "title": "혼자 공부하는 네트워크",
        "type": "선택 도서",
        "cost": "구매 선택",
        "url": "https://www.hanbit.co.kr/books/B3633191758?code=B3633191758",
        "why": "그림과 예제로 네트워크 기초",
        "target": "DNS·IP·TCP·HTTP 통신 과정의 관계를 설명할 수 있다."
      },
      {
        "title": "이것이 우분투 리눅스다(3판)",
        "type": "선택 도서",
        "cost": "구매 선택",
        "url": "https://lms.hanbit.co.kr/books/B1198272272?code=B1198272272",
        "why": "리눅스 심화 실습이 필요할 때",
        "target": "계정·프로세스·권한 등 리눅스 관리 개념을 설명할 수 있다."
      },
      {
        "title": "우분투 리눅스 저자 직강",
        "type": "한국어 영상",
        "cost": "현재 무료 표시",
        "url": "https://lms.hanbit.co.kr/product/C2033019625",
        "why": "명령어·서버 환경 시연",
        "target": "우분투 명령어를 실행하고 오류 메시지의 의미를 말할 수 있다."
      }
    ]
  },
  {
    "title": "Docker·테스트·CI/CD",
    "track": "개발기반",
    "focus": "컨테이너·pytest·GitHub Actions",
    "weeks": [
      "1주: Docker 이미지·컨테이너",
      "2주: Dockerfile·환경 변수",
      "3주: API 테스트 자동화",
      "4주: GitHub Actions 실행"
    ],
    "project": "FastAPI + DB + pytest + Docker + CI",
    "check": "새 커밋을 올리면 자동 테스트가 실행되고 실패 원인을 확인한다.",
    "resources": [
      {
        "title": "Docker 공식 시작 가이드",
        "type": "공식 실습",
        "cost": "무료",
        "url": "https://docs.docker.com/get-started/",
        "why": "컨테이너·빌드·실행",
        "target": "Docker 이미지·컨테이너·Dockerfile 차이를 설명하고 실행할 수 있다."
      },
      {
        "title": "GitHub Actions 공식 문서",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://docs.github.com/en/actions",
        "why": "CI/CD 자동화",
        "target": "push 때 자동 테스트가 실행되는 워크플로를 작성할 수 있다."
      },
      {
        "title": "pytest 공식 문서",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://docs.pytest.org/en/stable/",
        "why": "테스트 구조 심화",
        "target": "정상·오류 입력을 포함한 자동 테스트를 스스로 설계할 수 있다."
      }
    ]
  },
  {
    "title": "클라우드·AWS",
    "track": "보안진입",
    "focus": "IAM·네트워크·클라우드 구조·비용",
    "weeks": [
      "1주: 클라우드·리전·서비스 구조",
      "2주: IAM 사용자·역할·정책",
      "3주: VPC·네트워크·컴퓨팅 개념",
      "4주: 아키텍처 설계·비용 점검"
    ],
    "project": "최소 권한 기반 클라우드 아키텍처 설계 문서",
    "check": "IAM 정책의 허용·거부 범위를 설명하고 예상 비용을 점검한다.",
    "resources": [
      {
        "title": "AWS 무료 디지털 교육",
        "type": "공식 강의",
        "cost": "일부 무료",
        "url": "https://aws.amazon.com/training/",
        "why": "클라우드 핵심 개념·Skill Builder",
        "target": "클라우드 컴퓨팅·스토리지·네트워크의 역할과 비용 위험을 설명할 수 있다."
      },
      {
        "title": "AWS IAM 사용자 안내서",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html",
        "why": "최소 권한·접근제어 이해",
        "target": "IAM 역할·정책·최소 권한 원칙으로 접근 범위를 설명할 수 있다."
      },
      {
        "title": "AWS Well-Architected Framework",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
        "why": "클라우드 설계 원칙",
        "target": "신뢰성·보안·비용 관점에서 설계 선택의 이유를 말할 수 있다."
      }
    ]
  },
  {
    "title": "웹 애플리케이션 보안",
    "track": "보안진입",
    "focus": "인증·접근제어·OWASP Top 10",
    "weeks": [
      "1주: 웹 취약점·위협 모델 개요",
      "2주: 인증·인가·세션",
      "3주: SQL 인젝션·입력 검증",
      "4주: 허가된 교육용 실습·재현 보고서"
    ],
    "project": "교육용 취약점 3개 분석 + 방어 코드",
    "check": "발견 → 원인 → 개선 → 재검증을 문서로 설명한다.",
    "resources": [
      {
        "title": "OWASP Top 10 2025 한국어",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://top10.owasp.org/2025/ko/",
        "why": "현행 웹 보안 위험 지도",
        "target": "접근제어·인증·입력 검증 등 웹 취약점의 원인을 설명할 수 있다."
      },
      {
        "title": "PortSwigger Web Security Academy",
        "type": "무료 실습",
        "cost": "무료",
        "url": "https://portswigger.net/web-security",
        "why": "교육용 취약점 랩",
        "target": "허가된 실습 환경에서 취약점을 재현하고 개선안을 제안할 수 있다."
      },
      {
        "title": "PortSwigger 처음 시작하기",
        "type": "무료 가이드",
        "cost": "무료",
        "url": "https://portswigger.net/web-security/getting-started",
        "why": "실습 진행 순서",
        "target": "랩의 목표를 이해하고 재현 절차·기대 결과를 기록할 수 있다."
      }
    ]
  },
  {
    "title": "보안 자동화·로그 분석",
    "track": "보안진입",
    "focus": "Python 스크립트·감사 로그·기본 탐지",
    "weeks": [
      "1주: 로그 구조와 Python 파싱",
      "2주: 이상 이벤트 규칙 만들기",
      "3주: 입력/예외/비밀정보 처리",
      "4주: 테스트·탐지 정확도 검증"
    ],
    "project": "Python 보안 로그 이상 패턴 탐지 도구",
    "check": "정상·이상 테스트 데이터를 만들고 탐지 결과와 한계를 설명한다.",
    "resources": [
      {
        "title": "Python logging",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://docs.python.org/3/library/logging.html",
        "why": "로깅·핸들러 이해",
        "target": "로그 수준·형식·핸들러를 이용해 분석 가능한 기록을 남길 수 있다."
      },
      {
        "title": "GitHub Code Scanning 소개",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning",
        "why": "자동 검사 사례",
        "target": "자동 보안 검사가 어떤 문제를 잡고 무엇을 놓치는지 설명할 수 있다."
      },
      {
        "title": "OWASP Top 10: 2025",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://top10.owasp.org/2025/ko/",
        "why": "보안 체크리스트의 근거",
        "target": "보안 위험 범주를 점검 항목으로 변환할 수 있다."
      }
    ]
  },
  {
    "title": "클라우드 보안·모니터링",
    "track": "보안진입",
    "focus": "권한·비밀관리·모니터링·위협 모델",
    "weeks": [
      "1주: IAM 최소 권한 재정리",
      "2주: 시크릿·환경변수·로그 보안",
      "3주: 관측·경보·사고 대응 절차",
      "4주: 클라우드 보안 설계 리뷰"
    ],
    "project": "보안 강화 API 설계 + 위험·개선 리포트",
    "check": "실제 위협 시나리오와 대응 설계를 함께 설명한다.",
    "resources": [
      {
        "title": "AWS Security Pillar",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html",
        "why": "보안 설계 원칙",
        "target": "보호할 자산·위협·접근 권한을 기준으로 보안 설계를 리뷰할 수 있다."
      },
      {
        "title": "AWS IAM 공식 가이드",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html",
        "why": "권한 정책 검토",
        "target": "IAM 정책의 과도한 권한과 최소 권한 사례를 설명할 수 있다."
      },
      {
        "title": "Google SRE 공개 도서",
        "type": "무료 온라인 도서",
        "cost": "무료",
        "url": "https://sre.google/books/",
        "why": "장애·신뢰성 운영 기초",
        "target": "SLI·SLO와 장애 대응의 기본 원리를 설명할 수 있다."
      }
    ]
  },
  {
    "title": "AI 서비스·신뢰성·보안",
    "track": "AI확장",
    "focus": "LLM API·평가·위험·관측",
    "weeks": [
      "1주: 간단한 LLM API 애플리케이션",
      "2주: 응답 평가 지표·재현 데이터",
      "3주: AI 에이전트 권한·정보 보호 개념",
      "4주: 실패 분석·평가 자동화"
    ],
    "project": "AI 응답 평가 + 권한 검증 미니 랩",
    "check": "테스트 데이터 기반으로 실패 유형을 수치·사례로 정리한다.",
    "resources": [
      {
        "title": "OWASP GenAI Security Project",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://genai.owasp.org/",
        "why": "LLM·에이전트 보안 위험",
        "target": "LLM 프롬프트 인젝션·데이터 유출·도구 권한 위험을 구분할 수 있다."
      },
      {
        "title": "Google SRE 공개 도서",
        "type": "무료 온라인 도서",
        "cost": "무료",
        "url": "https://sre.google/books/",
        "why": "서비스 신뢰성 평가 관점",
        "target": "AI 응답 오류율·응답시간·실패 대응을 측정할 수 있다."
      },
      {
        "title": "FastAPI 공식 자습서",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://fastapi.tiangolo.com/ko/tutorial/",
        "why": "AI 기능을 API로 서비스화",
        "target": "AI 서비스를 API로 구성하고 입력 검증과 오류 처리를 구현할 수 있다."
      }
    ]
  },
  {
    "title": "통합 포트폴리오·이직",
    "track": "취업준비",
    "focus": "설계·코드·테스트·보고서·기술면접",
    "weeks": [
      "1주: 클라우드/보안 직무 공고 10개 분석",
      "2주: 통합 프로젝트 리팩터링",
      "3주: 테스트·README·설계 그림·시연",
      "4주: 모의면접·이력서·지원"
    ],
    "project": "AI 서비스 보안·신뢰성 랩 (통합 포트폴리오)",
    "check": "초기설정 → 실행 → 테스트 → 위험 개선을 재현 가능한 문서로 정리하고 지원 직무에 맞춰 설명한다.",
    "resources": [
      {
        "title": "GitHub README 작성 가이드",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes",
        "why": "프로젝트 이해도 높이기",
        "target": "README에 설치·실행·재현 방법과 아키텍처를 쓸 수 있다."
      },
      {
        "title": "GitHub Actions",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://docs.github.com/en/actions",
        "why": "실행 가능한 프로젝트 증거",
        "target": "테스트가 자동 실행되는 결과를 공개하고 설명할 수 있다."
      },
      {
        "title": "OWASP GenAI Security",
        "type": "공식 문서",
        "cost": "무료",
        "url": "https://genai.owasp.org/",
        "why": "AI 보안 위험 근거",
        "target": "AI 보안 위협과 개선 사례를 문서로 제시할 수 있다."
      }
    ]
  }
];
