window.STUDY_DAY_ASSESSMENTS=[
  {
    "goals": [
      "Python 파일을 실행하고 출력 결과를 확인한다",
      "터미널과 코드 편집기의 역할을 구분한다"
    ],
    "exercise": "hello.py에 본인만의 문장 두 줄을 작성하고 터미널에서 실행하기",
    "quiz": [
      {
        "question": "Python에서 문장을 화면에 출력하는 함수는?",
        "options": [
          "print()",
          "input()",
          "len()",
          "type()"
        ],
        "answer": 0,
        "explanation": "print()는 전달한 값을 표준 출력으로 표시한다."
      },
      {
        "question": "터미널에서 Python 파일을 실행하는 예시로 알맞은 것은?",
        "options": [
          "python hello.py",
          "git add hello.py",
          "pip install hello.py",
          "mkdir hello.py"
        ],
        "answer": 0,
        "explanation": "python 파일명.py 형식으로 인터프리터가 스크립트를 실행한다."
      }
    ]
  },
  {
    "goals": [
      "변수에 값을 저장하고 다시 사용할 수 있다",
      "문자열과 f-string으로 문장을 만든다"
    ],
    "exercise": "이름과 오늘의 목표를 변수에 저장해 f-string으로 출력하기",
    "quiz": [
      {
        "question": "name = 'Kim'일 때 f'Hi {name}'의 결과는?",
        "options": [
          "Hi {name}",
          "Hi Kim",
          "name Kim",
          "오류"
        ],
        "answer": 1,
        "explanation": "f-string은 중괄호 안의 표현식을 평가해 문자열로 넣는다."
      },
      {
        "question": "문자열 자료형의 예시는?",
        "options": [
          "23",
          "3.14",
          "'23'",
          "True"
        ],
        "answer": 2,
        "explanation": "따옴표로 둘러싸인 '23'은 문자열(str)이다."
      }
    ]
  },
  {
    "goals": [
      "int와 float의 차이를 설명한다",
      "사칙연산과 계산 순서를 확인한다"
    ],
    "exercise": "물건 가격과 수량을 변수로 받아 총액 계산하기",
    "quiz": [
      {
        "question": "Python에서 7 // 2의 결과는?",
        "options": [
          "3",
          "3.5",
          "4",
          "1"
        ],
        "answer": 0,
        "explanation": "//는 몫을 내림한 정수 나눗셈이다."
      },
      {
        "question": "3.5의 자료형은?",
        "options": [
          "str",
          "int",
          "bool",
          "float"
        ],
        "answer": 3,
        "explanation": "소수점을 포함한 3.5는 부동소수점 자료형인 float이다."
      }
    ]
  },
  {
    "goals": [
      "input()으로 값을 받고 자료형을 확인한다",
      "입력값을 int()로 변환할 때 주의한다"
    ],
    "exercise": "사용자 나이를 입력받아 1년 후 나이를 출력하기",
    "quiz": [
      {
        "question": "input()이 기본적으로 반환하는 값의 자료형은?",
        "options": [
          "int",
          "str",
          "float",
          "bool"
        ],
        "answer": 1,
        "explanation": "input()은 입력 내용을 문자열로 반환한다."
      },
      {
        "question": "int('12')의 결과는?",
        "options": [
          "문자열 '12'",
          "정수 12",
          "실수 12.0",
          "ValueError"
        ],
        "answer": 1,
        "explanation": "숫자로 해석 가능한 문자열 '12'는 정수 12로 변환된다."
      }
    ]
  },
  {
    "goals": [
      "사용자 입력을 수로 변환해 계산한다",
      "잘못된 입력에 대비할 필요성을 설명한다"
    ],
    "exercise": "두 수와 연산자를 입력받아 사칙연산 결과 출력(0 나누기 별도 처리)",
    "quiz": [
      {
        "question": "x='5', y='2'일 때 x+y 결과는?",
        "options": [
          "7",
          "52",
          "10",
          "TypeError"
        ],
        "answer": 1,
        "explanation": "둘 다 문자열이므로 +는 문자열을 이어붙인다."
      },
      {
        "question": "정수 a를 b로 나눌 때 미리 확인하면 좋은 조건은?",
        "options": [
          "b가 0인지",
          "a가 짝수인지",
          "a가 문자열인지",
          "b가 10보다 큰지"
        ],
        "answer": 0,
        "explanation": "0으로 나누면 ZeroDivisionError가 발생한다."
      }
    ]
  },
  {
    "goals": [
      "if·elif·else 분기 흐름을 이해한다",
      "조건의 참·거짓에 따라 경로를 선택한다"
    ],
    "exercise": "온도에 따라 덥다/적당하다/춥다 출력하기",
    "quiz": [
      {
        "question": "x=8일 때 if x>10: ... elif x>5: ... else: ... 중 실행되는 분기는?",
        "options": [
          "if",
          "elif",
          "else",
          "전부 실행"
        ],
        "answer": 1,
        "explanation": "첫 조건은 거짓이고 두 번째 조건이 참이므로 elif 분기를 실행한다."
      },
      {
        "question": "조건문에서 여러 후보 중 나머지 경우를 처리하는 키워드는?",
        "options": [
          "for",
          "return",
          "else",
          "import"
        ],
        "answer": 2,
        "explanation": "else는 앞선 조건이 모두 거짓인 경우 실행할 분기다."
      }
    ]
  },
  {
    "goals": [
      "and·or·not을 활용할 수 있다",
      "범위 조건을 올바르게 표현한다"
    ],
    "exercise": "사용자 점수가 0~100 범위인지 검증하기",
    "quiz": [
      {
        "question": "x=4일 때 x>0 and x<5의 결과는?",
        "options": [
          "True",
          "False",
          "None",
          "오류"
        ],
        "answer": 0,
        "explanation": "두 조건이 모두 참이어서 and 결과가 True다."
      },
      {
        "question": "둘 중 하나만 참이어도 참이 되는 논리 연산자는?",
        "options": [
          "and",
          "or",
          "not",
          "is"
        ],
        "answer": 1,
        "explanation": "or는 피연산자 중 하나라도 참이면 참으로 평가한다."
      }
    ]
  },
  {
    "goals": [
      "점수 구간의 경계값을 분기한다",
      "입력 범위 검증과 등급 판정을 분리한다"
    ],
    "exercise": "0~100 점수로 A/B/C/F 판정하고 -1과 101 입력도 처리하기",
    "quiz": [
      {
        "question": "점수 90점 이상을 뜻하는 비교식은?",
        "options": [
          "score > 90",
          "score >= 90",
          "score == 90",
          "score < 90"
        ],
        "answer": 1,
        "explanation": ">=는 경계값 90을 포함한다."
      },
      {
        "question": "점수 -5가 들어왔을 때 가장 먼저 할 일은?",
        "options": [
          "F로 처리",
          "범위 오류 안내",
          "A로 처리",
          "그대로 출력"
        ],
        "answer": 1,
        "explanation": "유효한 입력인지 먼저 검증해야 잘못된 점수가 정상 등급으로 분류되지 않는다."
      }
    ]
  },
  {
    "goals": [
      "for와 range()의 반복 범위를 이해한다",
      "정해진 횟수만큼 반복 실행한다"
    ],
    "exercise": "1부터 10까지의 합을 for로 계산하기",
    "quiz": [
      {
        "question": "list(range(3))의 결과는?",
        "options": [
          "[1,2,3]",
          "[0,1,2]",
          "[0,1,2,3]",
          "[3]"
        ],
        "answer": 1,
        "explanation": "range(3)은 0부터 시작해 3 미만의 정수를 생성한다."
      },
      {
        "question": "for 반복이 특히 적합한 경우는?",
        "options": [
          "언제 끝날지 모르는 사용자 입력",
          "목록의 모든 요소 순회",
          "프로그램 강제 종료",
          "예외 처리"
        ],
        "answer": 1,
        "explanation": "목록이나 정해진 범위를 순회할 때 for가 적합하다."
      }
    ]
  },
  {
    "goals": [
      "while 반복 조건을 설계한다",
      "무한 반복을 피하고 종료 조건을 구현한다"
    ],
    "exercise": "사용자가 q를 입력할 때까지 반복 안내문 출력하기",
    "quiz": [
      {
        "question": "while 조건이 계속 참이면 어떤 일이 발생할 수 있나?",
        "options": [
          "반복문이 즉시 종료",
          "무한 반복",
          "자동으로 1회만 실행",
          "SyntaxError"
        ],
        "answer": 1,
        "explanation": "조건을 바꾸지 않으면 while이 계속 반복될 수 있다."
      },
      {
        "question": "현재 반복문을 즉시 빠져나가는 문장은?",
        "options": [
          "continue",
          "pass",
          "break",
          "return None"
        ],
        "answer": 2,
        "explanation": "break는 가장 안쪽 반복문을 즉시 종료한다."
      }
    ]
  },
  {
    "goals": [
      "중첩 반복으로 표를 출력한다",
      "반복 변수의 역할을 구분한다"
    ],
    "exercise": "2단부터 9단까지 구구단 표시하기",
    "quiz": [
      {
        "question": "for a in range(2,4): for b in range(1,3): ... 에서 안쪽 본문 총 실행 횟수는?",
        "options": [
          "2",
          "3",
          "4",
          "6"
        ],
        "answer": 2,
        "explanation": "바깥쪽 2회 × 안쪽 2회 = 4회 실행된다."
      },
      {
        "question": "구구단에서 곱셈식의 두 수를 각각 바꾸려면?",
        "options": [
          "서로 다른 반복 변수 사용",
          "매번 input() 호출",
          "항상 break 사용",
          "변수 하나만 고정"
        ],
        "answer": 0,
        "explanation": "단과 곱하는 수에 각각 반복 변수를 쓰면 전체 구구단을 출력할 수 있다."
      }
    ]
  },
  {
    "goals": [
      "random과 비교 조건을 활용한다",
      "게임의 성공·실패·재시도 흐름을 구현한다"
    ],
    "exercise": "1~10 난수 맞히기 게임과 시도 횟수 표시하기",
    "quiz": [
      {
        "question": "1~10 정수 중 임의의 하나를 생성하는 표현식은?",
        "options": [
          "random.randint(1,10)",
          "random.range(1,10)",
          "random.pick(10)",
          "random.randint(0,9)"
        ],
        "answer": 0,
        "explanation": "random.randint(a,b)는 a와 b를 모두 포함한 정수를 뽑는다."
      },
      {
        "question": "정답을 맞혔을 때 반복을 끝내려면?",
        "options": [
          "continue",
          "break",
          "import",
          "except"
        ],
        "answer": 1,
        "explanation": "정답 조건에서 break를 실행하면 반복문을 종료한다."
      }
    ]
  },
  {
    "goals": [
      "리스트의 순서와 인덱스를 이해한다",
      "append·수정·순회를 수행한다"
    ],
    "exercise": "할 일 3개를 추가하고 완료된 항목을 수정해 출력하기",
    "quiz": [
      {
        "question": "a=['A','B','C']에서 a[1]은?",
        "options": [
          "A",
          "B",
          "C",
          "IndexError"
        ],
        "answer": 1,
        "explanation": "리스트 인덱스는 0부터 시작하므로 1은 두 번째 요소다."
      },
      {
        "question": "리스트 맨 뒤에 요소를 하나 추가하는 메서드는?",
        "options": [
          "append()",
          "get()",
          "keys()",
          "split()"
        ],
        "answer": 0,
        "explanation": "append()는 리스트 끝에 요소 하나를 추가한다."
      }
    ]
  },
  {
    "goals": [
      "딕셔너리 key/value 구조를 이해한다",
      "key로 값을 조회하고 변경한다"
    ],
    "exercise": "버그 한 건을 id·title·status 딕셔너리로 만들기",
    "quiz": [
      {
        "question": "d={'status':'open'}일 때 d['status']의 결과는?",
        "options": [
          "status",
          "open",
          "0",
          "None"
        ],
        "answer": 1,
        "explanation": "문자열 key 'status'에 대응하는 값이 'open'이다."
      },
      {
        "question": "딕셔너리에서 없는 키를 안전하게 조회할 때 자주 쓰는 메서드는?",
        "options": [
          "append()",
          "popitem()",
          "get()",
          "sort()"
        ],
        "answer": 2,
        "explanation": "get()은 해당 키가 없을 때 기본값(None 또는 지정값)을 반환할 수 있다."
      }
    ]
  },
  {
    "goals": [
      "리스트 안에 딕셔너리를 저장한다",
      "여러 버그를 조건에 따라 검색한다"
    ],
    "exercise": "버그 3개를 등록하고 상태가 open인 항목만 출력하기",
    "quiz": [
      {
        "question": "버그 여러 건을 리스트로 저장했다면 각 버그를 순회하는 가장 적합한 구문은?",
        "options": [
          "for bug in bugs:",
          "if bug in bugs:",
          "import bugs",
          "return bugs"
        ],
        "answer": 0,
        "explanation": "for는 리스트의 각 요소를 순서대로 반복한다."
      },
      {
        "question": "버그마다 제목·상태·심각도를 이름으로 관리하기 좋은 자료구조는?",
        "options": [
          "set 하나",
          "dictionary",
          "정수 하나",
          "bool 하나"
        ],
        "answer": 1,
        "explanation": "각 속성을 key로 지정하는 딕셔너리가 적합하다."
      }
    ]
  },
  {
    "goals": [
      "def로 함수를 정의한다",
      "매개변수와 반환값의 차이를 이해한다"
    ],
    "exercise": "가격과 수량을 받아 금액을 반환하는 함수 작성하기",
    "quiz": [
      {
        "question": "def add(a,b): return a+b 에서 add(2,3)은?",
        "options": [
          "None",
          "23",
          "5",
          "오류"
        ],
        "answer": 2,
        "explanation": "return이 a+b의 계산 결과 5를 돌려준다."
      },
      {
        "question": "함수 계산 결과를 호출한 곳에 돌려주는 키워드는?",
        "options": [
          "print",
          "return",
          "break",
          "global"
        ],
        "answer": 1,
        "explanation": "return은 호출자에게 결과값을 반환한다."
      }
    ]
  },
  {
    "goals": [
      "중복 코드를 함수로 나눈다",
      "기능별 함수 책임을 설명한다"
    ],
    "exercise": "버그 등록·목록조회·상태변경을 함수 세 개로 분리하기",
    "quiz": [
      {
        "question": "같은 검증 코드가 5곳에 반복될 때 개선 방법으로 가장 적절한 것은?",
        "options": [
          "함수로 분리",
          "주석만 추가",
          "동일 코드를 더 복사",
          "예외를 무시"
        ],
        "answer": 0,
        "explanation": "공통 로직을 함수로 추출하면 중복 수정과 오류를 줄일 수 있다."
      },
      {
        "question": "단일 책임에 가까운 함수는?",
        "options": [
          "입력과 파일저장과 출력과 네트워크를 모두 처리",
          "한 가지 명확한 역할을 수행",
          "모든 전역변수를 수정",
          "길이가 100줄 이상"
        ],
        "answer": 1,
        "explanation": "함수의 역할을 좁히면 테스트·변경·재사용이 쉬워진다."
      }
    ]
  },
  {
    "goals": [
      "예외와 일반 흐름을 구분한다",
      "예상 가능한 입력 오류를 처리한다"
    ],
    "exercise": "숫자 입력 때 문자가 들어오면 재입력 안내하기",
    "quiz": [
      {
        "question": "int('abc') 실행 시 대표적인 예외는?",
        "options": [
          "KeyError",
          "ValueError",
          "IndexError",
          "ZeroDivisionError"
        ],
        "answer": 1,
        "explanation": "정수로 변환할 수 없는 문자열은 ValueError를 발생시킨다."
      },
      {
        "question": "except ValueError의 주된 역할은?",
        "options": [
          "모든 오류 은폐",
          "특정 변환 오류 처리",
          "함수 정의",
          "반복 횟수 지정"
        ],
        "answer": 1,
        "explanation": "ValueError를 구체적으로 잡으면 예상한 입력 문제에 대응할 수 있다."
      }
    ]
  },
  {
    "goals": [
      "오류 메시지와 발생 위치를 읽는다",
      "재현→가설→수정→재검증을 수행한다"
    ],
    "exercise": "의도적으로 인덱스 오류를 만들고 원인과 수정 전후 기록하기",
    "quiz": [
      {
        "question": "리스트 길이가 3일 때 a[3] 조회 시 발생할 예외는?",
        "options": [
          "IndexError",
          "KeyError",
          "TypeError",
          "NameError"
        ],
        "answer": 0,
        "explanation": "유효한 인덱스는 0,1,2이므로 a[3]은 범위를 벗어난다."
      },
      {
        "question": "버그를 수정한 다음 가장 적절한 행동은?",
        "options": [
          "코드를 바로 삭제",
          "동일한 조건에서 재시험",
          "문서만 덮어쓰기",
          "오류 메시지 숨기기"
        ],
        "answer": 1,
        "explanation": "원래 문제가 발생한 조건에서 재검증해야 수정 여부를 확인할 수 있다."
      }
    ]
  },
  {
    "goals": [
      "데이터 등록 시 필수값을 검증한다",
      "등록·조회 기능을 분리해 구현한다"
    ],
    "exercise": "빈 제목은 거부하고 여러 버그를 등록·조회하기",
    "quiz": [
      {
        "question": "버그 등록 기능에서 필수 제목이 빈 문자열이면?",
        "options": [
          "정상 등록",
          "입력을 거부하고 안내",
          "임의의 제목 생성",
          "프로그램 종료만"
        ],
        "answer": 1,
        "explanation": "필수 데이터 누락은 등록 전에 검증해야 한다."
      },
      {
        "question": "등록 후 목록 조회에 필요한 핵심 동작은?",
        "options": [
          "저장 목록을 순회해 출력",
          "항상 첫 요소만 출력",
          "변수 초기화",
          "무조건 파일 삭제"
        ],
        "answer": 0,
        "explanation": "목록의 각 요소를 순회해 보여주면 여러 등록 항목을 확인할 수 있다."
      }
    ]
  },
  {
    "goals": [
      "고유 id로 대상 버그를 찾는다",
      "상태변경과 삭제 시 존재 여부를 확인한다"
    ],
    "exercise": "ID로 버그를 찾아 open→closed 전환, 없는 ID 처리하기",
    "quiz": [
      {
        "question": "버그 상태 변경에서 id가 목록에 없으면?",
        "options": [
          "첫 버그 수정",
          "변경 실패 안내",
          "모든 버그 삭제",
          "임의 id 생성"
        ],
        "answer": 1,
        "explanation": "대상 식별에 실패했음을 알려야 다른 데이터를 잘못 수정하지 않는다."
      },
      {
        "question": "삭제 작업 전에 중요한 것은?",
        "options": [
          "대상 id의 존재와 일치 여부 확인",
          "항상 첫 항목 삭제",
          "무조건 모든 항목 복제",
          "상태와 무관하게 랜덤 삭제"
        ],
        "answer": 0,
        "explanation": "정확한 대상만 삭제하도록 식별자를 확인해야 한다."
      }
    ]
  },
  {
    "goals": [
      "with open()으로 파일을 연다",
      "읽기·쓰기 모드의 차이를 설명한다"
    ],
    "exercise": "메모를 파일에 저장하고 다음 실행 때 다시 불러오기",
    "quiz": [
      {
        "question": "open('a.txt','w')에 대한 설명으로 맞는 것은?",
        "options": [
          "기존 내용 뒤에 추가",
          "파일 내용을 새로 쓰며 기존 내용을 지울 수 있음",
          "파일만 읽음",
          "파일 이름만 수정"
        ],
        "answer": 1,
        "explanation": "'w' 모드는 기존 파일을 비우고 쓰는 동작을 할 수 있으므로 주의해야 한다."
      },
      {
        "question": "with open(...) 구문의 장점은?",
        "options": [
          "블록 종료 시 파일 자원 정리",
          "항상 파일 내용을 암호화",
          "모든 인코딩 자동 감지",
          "파일 실행 속도를 보장"
        ],
        "answer": 0,
        "explanation": "with는 블록을 벗어나면 파일을 자동으로 닫는다."
      }
    ]
  },
  {
    "goals": [
      "Python 객체와 JSON 텍스트의 차이를 안다",
      "dump/load로 직렬화·역직렬화한다"
    ],
    "exercise": "버그 리스트를 JSON 파일에 저장하고 다시 읽기",
    "quiz": [
      {
        "question": "Python 객체를 JSON 파일에 직접 써주는 함수는?",
        "options": [
          "json.dump()",
          "json.load()",
          "json.loads()",
          "json.decoder()"
        ],
        "answer": 0,
        "explanation": "json.dump(obj, file)은 Python 객체를 JSON 형식으로 파일에 쓴다."
      },
      {
        "question": "JSON 형식에서 딕셔너리의 키는 어떤 자료형이어야 하나?",
        "options": [
          "문자열",
          "튜플",
          "리스트",
          "함수"
        ],
        "answer": 0,
        "explanation": "JSON 객체의 키는 문자열이다."
      }
    ]
  },
  {
    "goals": [
      "프로그램 종료 후에도 자료를 복원한다",
      "파일이 없거나 손상됐을 때 오류를 처리한다"
    ],
    "exercise": "앱 재시작 후 기존 버그가 복원되는지 시험하기",
    "quiz": [
      {
        "question": "저장파일이 없는 첫 실행에서 적합한 처리는?",
        "options": [
          "항상 강제종료",
          "빈 목록으로 시작하거나 초기 파일 생성",
          "다른 사용자 파일 삭제",
          "무한 반복"
        ],
        "answer": 1,
        "explanation": "파일 부재는 예상 가능한 초기 상황이므로 적절히 처리할 수 있다."
      },
      {
        "question": "저장 기능이 제대로 작동했는지 검증하는 방법은?",
        "options": [
          "재시작해 저장값 조회",
          "메모리에 있는 값만 관찰",
          "print문만 추가",
          "오류를 숨김"
        ],
        "answer": 0,
        "explanation": "프로세스를 종료·재시작한 뒤 파일에서 값을 불러오는지 확인해야 한다."
      }
    ]
  },
  {
    "goals": [
      "버전관리와 파일 백업의 차이를 이해한다",
      "add→commit의 의미를 이해한다"
    ],
    "exercise": "작은 수정 2번을 별도 commit으로 남기고 기록 확인하기",
    "quiz": [
      {
        "question": "git add의 역할은?",
        "options": [
          "원격 서버에 즉시 배포",
          "변경 내용을 스테이징",
          "커밋 메시지 작성",
          "저장소 삭제"
        ],
        "answer": 1,
        "explanation": "git add는 다음 커밋에 포함할 변경을 스테이징 영역에 올린다."
      },
      {
        "question": "git commit이 수행하는 것은?",
        "options": [
          "스테이징된 변경을 버전 기록으로 저장",
          "온라인 계정 생성",
          "Python 설치",
          "브랜치 강제 삭제"
        ],
        "answer": 0,
        "explanation": "commit은 변경 내역을 하나의 버전 기록으로 남긴다."
      }
    ]
  },
  {
    "goals": [
      "로컬 Git과 GitHub 원격 저장소를 구분한다",
      "README에 실행 방법을 작성한다"
    ],
    "exercise": "미니 프로젝트를 GitHub에 업로드하고 README 작성하기",
    "quiz": [
      {
        "question": "로컬 커밋을 연결된 원격 저장소에 전송하는 명령은?",
        "options": [
          "git status",
          "git push",
          "git init",
          "git diff"
        ],
        "answer": 1,
        "explanation": "git push는 로컬 커밋을 원격 브랜치로 전송한다."
      },
      {
        "question": "좋은 README에 포함하면 유용한 것은?",
        "options": [
          "프로그램 실행 방법",
          "개인 비밀번호",
          "회사 내부 API 키",
          "사용자 개인정보"
        ],
        "answer": 0,
        "explanation": "README에는 목적·설치·실행법 같은 공개 가능한 사용 정보가 유용하다."
      }
    ]
  },
  {
    "goals": [
      "의도가 드러나는 변수명을 사용한다",
      "리팩터링 후 기존 동작을 보존한다"
    ],
    "exercise": "변수 x를 의미 있는 이름으로 바꾸고 기능이 같은지 확인하기",
    "quiz": [
      {
        "question": "사용자 수를 저장하는 변수명으로 읽기 쉬운 것은?",
        "options": [
          "x",
          "aaa",
          "user_count",
          "temp2"
        ],
        "answer": 2,
        "explanation": "user_count는 저장된 값의 의미를 직접 드러낸다."
      },
      {
        "question": "리팩터링 후 확인해야 할 것은?",
        "options": [
          "기존 기능이 여전히 동작하는지",
          "주석이 모두 사라졌는지",
          "파일 이름이 항상 바뀌었는지",
          "모든 함수가 하나로 합쳐졌는지"
        ],
        "answer": 0,
        "explanation": "리팩터링은 외부 동작을 유지하면서 코드 구조를 개선하는 작업이다."
      }
    ]
  },
  {
    "goals": [
      "assert로 기대와 실제를 비교한다",
      "정상·경계·오류 사례를 구분한다"
    ],
    "exercise": "계산 함수에 대해 정상값·0·음수 사례 3개 테스트 작성하기",
    "quiz": [
      {
        "question": "assert 2+2 == 4가 성공하면?",
        "options": [
          "예외 없이 다음 코드 진행",
          "무조건 출력 발생",
          "AssertionError 발생",
          "프로그램이 컴파일됨"
        ],
        "answer": 0,
        "explanation": "assert 조건이 True이면 AssertionError 없이 진행된다."
      },
      {
        "question": "함수의 경계값을 테스트해야 하는 이유는?",
        "options": [
          "조건 분기의 경계 오류를 잡기 위해",
          "코드 줄 수를 늘리기 위해",
          "화면을 예쁘게 하려고",
          "항상 속도가 빨라지기 때문에"
        ],
        "answer": 0,
        "explanation": "경계값은 비교 연산자 등으로 인한 오류가 자주 드러나는 지점이다."
      }
    ]
  },
  {
    "goals": [
      "예외 입력과 데이터 누락을 점검한다",
      "개선 전후 테스트 결과를 기록한다"
    ],
    "exercise": "버그 관리기의 빈 제목·없는 ID·손상 JSON 사례 점검표 만들기",
    "quiz": [
      {
        "question": "재현 가능한 결함 보고에 꼭 필요한 정보는?",
        "options": [
          "발생 절차와 기대/실제 결과",
          "개발자의 개인 연락처",
          "테스트와 무관한 디자인 취향",
          "화면 해상도만"
        ],
        "answer": 0,
        "explanation": "재현 절차와 기대·실제 결과를 기록해야 문제를 반복 검증할 수 있다."
      },
      {
        "question": "테스트에서 예상과 실제가 다를 때 권장 행동은?",
        "options": [
          "원인·환경을 기록하고 분석",
          "테스트 삭제",
          "무조건 통과 처리",
          "임의로 기대값 변경"
        ],
        "answer": 0,
        "explanation": "차이를 기록하고 요구사항과 코드를 점검해야 원인을 찾을 수 있다."
      }
    ]
  },
  {
    "goals": [
      "30일 학습 개념을 스스로 설명한다",
      "완성 프로젝트의 설계·실행·테스트 과정을 발표한다"
    ],
    "exercise": "AI 도움 없이 버그 관리기 핵심 기능 하나 다시 만들고 README에 회고 쓰기",
    "quiz": [
      {
        "question": "완료한 프로젝트의 실제 실력을 확인하는 좋은 방법은?",
        "options": [
          "기능을 직접 수정하고 이유 설명",
          "강의를 3배속 재생",
          "강의 수료 화면만 저장",
          "코드를 이해 없이 복사"
        ],
        "answer": 0,
        "explanation": "직접 수정과 설명이 가능해야 기술을 자기 것으로 만들었다고 판단할 근거가 생긴다."
      },
      {
        "question": "다음 1개월 학습으로 자연스럽게 이어질 기술은?",
        "options": [
          "Git·pytest·Python 응용",
          "디자인 색상만 고급화",
          "개념 복습 중단",
          "코드 저장 중단"
        ],
        "answer": 0,
        "explanation": "Python 기초 다음에는 Git, 테스트, 구조화 등으로 확장하는 게 자연스럽다."
      }
    ]
  }
];
