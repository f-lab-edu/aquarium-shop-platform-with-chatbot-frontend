# 수족관 쇼핑몰 플랫폼

FastAPI 백엔드와 연동되는 React 기반 수족관 전문 쇼핑몰 플랫폼입니다. 챗봇 기능을 포함한 현대적이고 사용자 친화적인 e-commerce 솔루션을 제공합니다.

## 주요 기능

- 수족관 용품 전문 쇼핑몰
- AI 챗봇을 통한 고객 상담
- 장바구니 및 주문 관리
- 결제 시스템 연동
- 반응형 웹 디자인
- 상품 검색 및 필터링

## 기술 스택

### Frontend

- **React 19**
- **Vite**
- **TanStack React Query**
- **Tailwind CSS**
- **Headless UI**
- **Heroicons**

### 추가 예정 패키지

- **Axios**
- **React Router**
- **clsx + tailwind-merge**

### Backend

https://github.com/f-lab-edu/aquarium-shop-platform-with-chatbot

- **FastAPI** 

## 📁 프로젝트 구조

```
src/
├── api/                    # FastAPI 백엔드 통신
├── hooks/                  # React Query 커스텀 훅
├── pages/                  # 페이지 단위 컴포넌트
├── components/             # 재사용 가능한 UI 컴포넌트
│   ├── layout/            # 헤더, 푸터 등 레이아웃
│   ├── buttons/           # 버튼 컴포넌트들
│   ├── cards/             # 카드형 UI
│   ├── chat/              # 챗봇 관련
│   └── common/            # 공통 컴포넌트
├── lib/                    # 유틸리티 함수들
└── styles/                 # 글로벌 스타일
```

## 개발 환경 설정

### 의존성 설치

```bash
yarn install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

## 개발 명령어

- `yarn dev` - 개발 서버 시작 (HMR 포함)
- `yarn build` - 프로덕션 빌드
- `yarn preview` - 프로덕션 빌드 미리보기
- `yarn lint` - ESLint로 코드 품질 검사

## 개발 원칙

1. **실용성 우선** - 과도한 추상화보다는 직관적이고 실용적인 구조
2. **간결성** - 필요한 컴포넌트만 생성하여 복잡도 최소화
3. **확장성** - 기능 추가시 쉽게 확장 가능한 모듈화된 구조

## 환경 변수

```bash
# .env
VITE_API_URL=http://localhost:8000  # FastAPI 백엔드 URL
VITE_APP_NAME=아쿠아월드
```

---
