# 📁 프로젝트 구조

프로젝트의 파일 구조와 각 파일의 역할을 설명합니다.

## 전체 구조

```
my-portfolio/
├── src/                          # 소스 코드 폴더
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # 전체 레이아웃 (폰트, 메타데이터)
│   │   ├── page.tsx             # 메인 페이지
│   │   └── globals.css          # 전역 스타일
│   │
│   └── components/               # React 컴포넌트
│       ├── Navbar.tsx           # 상단 네비게이션
│       ├── Hero.tsx             # 히어로 섹션
│       ├── About.tsx            # About 섹션
│       ├── Projects.tsx         # 프로젝트 섹션
│       ├── Contact.tsx          # 연락처 섹션
│       └── Footer.tsx           # 푸터
│
├── public/                       # 정적 파일 (이미지 등)
│   └── images/                  # 이미지 폴더
│
├── package.json                  # 프로젝트 의존성
├── tsconfig.json                # TypeScript 설정
├── tailwind.config.js           # Tailwind CSS 설정
├── postcss.config.js            # PostCSS 설정
├── next.config.js               # Next.js 설정
├── .gitignore                   # Git 무시 파일
│
├── README.md                     # 프로젝트 설명
├── QUICKSTART.md                # 빠른 시작 가이드
└── DEPLOYMENT.md                # 배포 가이드
```

## 📄 주요 파일 설명

### `src/app/layout.tsx`
- **역할**: 전체 페이지의 레이아웃과 메타데이터 정의
- **수정할 내용**:
  - 10-11번째 줄: 페이지 제목과 설명

### `src/app/page.tsx`
- **역할**: 메인 페이지 컴포넌트 (모든 섹션 통합)
- **특징**: 
  - 마우스 움직임에 반응하는 배경 효과
  - 모든 섹션 컴포넌트를 불러와서 표시

### `src/app/globals.css`
- **역할**: 전역 CSS 스타일
- **수정할 내용**:
  - 4-9번째 줄: 색상 테마 변수
  - 스크롤바 스타일
  - 유틸리티 클래스

### `src/components/Navbar.tsx`
- **역할**: 상단 네비게이션 바
- **기능**:
  - 스크롤 시 배경 변경
  - 부드러운 애니메이션
  - About, Projects, Contact 링크
- **수정할 내용**:
  - 25번째 줄: 본인 이름

### `src/components/Hero.tsx`
- **역할**: 첫 화면 (히어로 섹션)
- **기능**:
  - 애니메이션 인트로
  - 메인 타이틀과 소개
  - CTA 버튼
  - 스크롤 다운 애니메이션
- **수정할 내용**:
  - 31번째 줄: 본인 이름
  - 40-41번째 줄: 소개 문구

### `src/components/About.tsx`
- **역할**: 자기소개 섹션
- **기능**:
  - 프로필 아바타
  - 자기소개 텍스트
  - 기술 스택 표시
- **수정할 내용**:
  - 13-24번째 줄: 사용 기술 목록
  - 57번째 줄: 본인 이름
  - 60-63번째 줄: 자기소개 내용

### `src/components/Projects.tsx`
- **역할**: 프로젝트 포트폴리오 섹션
- **기능**:
  - 프로젝트 필터링 (All, Web, Mobile)
  - 프로젝트 카드 애니메이션
  - Featured 프로젝트 강조
- **수정할 내용**:
  - 8-37번째 줄: 프로젝트 정보 전체
  - 각 프로젝트의 제목, 설명, 태그, 카테고리 수정

### `src/components/Contact.tsx`
- **역할**: 연락처 섹션
- **기능**:
  - 이메일 링크
  - 소셜 미디어 링크
  - 현재 상태 표시
- **수정할 내용**:
  - 12-42번째 줄: 소셜 미디어 링크
  - 93번째 줄: 이메일 주소
  - 102번째 줄: 이메일 주소 (표시용)

### `src/components/Footer.tsx`
- **역할**: 페이지 하단
- **기능**:
  - 저작권 정보
  - 사용 기술 표시
  - Top으로 이동 링크
- **수정할 내용**:
  - 16번째 줄: 본인 이름
  - 19번째 줄: 저작권 년도 및 이름

## 🎨 스타일링 구조

### Tailwind CSS 클래스
- 모든 스타일링은 Tailwind CSS 유틸리티 클래스 사용
- `globals.css`에 커스텀 유틸리티 클래스 정의
- 반응형: `md:`, `lg:` 등의 접두사 사용

### CSS 변수
`globals.css`의 `:root`에 정의된 색상 변수:
- `--bg-primary`: 메인 배경색
- `--bg-secondary`: 카드/섹션 배경색
- `--accent-primary`: 주요 강조색 (그라디언트 시작)
- `--accent-secondary`: 보조 강조색 (그라디언트 끝)
- `--text-primary`: 메인 텍스트
- `--text-secondary`: 보조 텍스트

### 애니메이션
- Framer Motion 라이브러리 사용
- 각 컴포넌트에서 `motion` 컴포넌트로 애니메이션 적용
- 스크롤 기반 애니메이션: `whileInView` prop

## 🔧 설정 파일

### `package.json`
- 프로젝트 의존성 관리
- 스크립트 명령어 정의
- Next.js, React, Framer Motion, Tailwind 등

### `tsconfig.json`
- TypeScript 컴파일러 설정
- 경로 alias 설정 (`@/*`)

### `tailwind.config.js`
- Tailwind CSS 커스터마이징
- 커스텀 애니메이션 정의
- 폰트 변수 설정

### `next.config.js`
- Next.js 프레임워크 설정
- 최적화 옵션

## 📝 수정 우선순위

### 1순위 (필수):
1. `src/components/Navbar.tsx` - 이름
2. `src/components/Hero.tsx` - 이름, 소개
3. `src/components/About.tsx` - 이름, 자기소개
4. `src/components/Contact.tsx` - 이메일, 소셜 링크
5. `src/components/Footer.tsx` - 이름

### 2순위 (중요):
1. `src/components/Projects.tsx` - 실제 프로젝트로 교체
2. `src/components/About.tsx` - 기술 스택 수정
3. `src/app/layout.tsx` - 메타데이터

### 3순위 (선택):
1. `src/app/globals.css` - 색상 테마
2. `tailwind.config.js` - 폰트 변경
3. 프로젝트 이미지 추가 (`public/images/`)

## 🚀 개발 팁

### 로컬 개발
```bash
npm run dev     # 개발 서버 실행 (http://localhost:3000)
npm run build   # 프로덕션 빌드
npm run start   # 프로덕션 서버 실행
```

### 파일 추가
- 새 컴포넌트: `src/components/`에 추가
- 이미지: `public/images/`에 추가
- 페이지: `src/app/`에 추가

### Git 커밋
```bash
git add .
git commit -m "설명"
git push
```

## 📚 추가 학습 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Framer Motion 문서](https://www.framer.com/motion/)
- [TypeScript 문서](https://www.typescriptlang.org/docs/)

---

이 문서가 프로젝트 구조를 이해하는 데 도움이 되길 바랍니다! 🎉
