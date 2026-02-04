# My Portfolio

현대적이고 인터랙티브한 개인 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Deployment**: Vercel

## ✨ 주요 기능

- 🎨 독창적인 디자인과 애니메이션
- 📱 완벽한 반응형 디자인
- ⚡ Next.js App Router로 최적화된 성능
- 🎭 Framer Motion을 활용한 부드러운 애니메이션
- 🌙 다크 테마 디자인

## 🛠️ 로컬 개발

### 설치

\`\`\`bash
npm install
# 또는
yarn install
# 또는
pnpm install
\`\`\`

### 개발 서버 실행

\`\`\`bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
\`\`\`

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

\`\`\`bash
npm run build
# 또는
yarn build
# 또는
pnpm build
\`\`\`

## 📦 Vercel 배포

### 방법 1: Vercel CLI 사용

\`\`\`bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
\`\`\`

### 방법 2: Vercel 웹사이트 사용

1. [Vercel](https://vercel.com)에 가입/로그인
2. GitHub 저장소 연결
3. 자동 배포 설정 완료

## 🎨 커스터마이징

### 개인 정보 수정

다음 파일들을 수정하여 개인 정보를 업데이트하세요:

- `src/app/layout.tsx` - 메타데이터 (제목, 설명)
- `src/components/Hero.tsx` - 이름과 소개
- `src/components/About.tsx` - About 섹션
- `src/components/Projects.tsx` - 프로젝트 목록
- `src/components/Contact.tsx` - 연락처 정보

### 색상 테마 변경

`src/app/globals.css`의 CSS 변수를 수정하세요:

\`\`\`css
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --accent-primary: #ff4da6;
  --accent-secondary: #4d9fff;
  --text-primary: #ffffff;
  --text-secondary: #a0a0b0;
}
\`\`\`

## 📝 라이선스

MIT License

## 🙋‍♂️ 문의

질문이나 제안사항이 있으시면 이슈를 열어주세요!
