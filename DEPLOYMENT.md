# Vercel 배포 가이드

이 문서는 포트폴리오를 Vercel에 배포하는 전체 과정을 안내합니다.

## 📋 사전 준비사항

1. GitHub 계정
2. Vercel 계정 (GitHub로 가입 가능)
3. Git 설치

## 🔧 Step 1: GitHub Repository 생성

### 1-1. GitHub에서 새 저장소 생성

1. [GitHub](https://github.com)에 로그인
2. 우측 상단의 `+` 버튼 클릭 → `New repository` 선택
3. Repository 정보 입력:
   - Repository name: `my-portfolio` (원하는 이름)
   - Description: `My personal portfolio website`
   - Public 또는 Private 선택
   - **중요**: `Add a README file` 체크 해제
4. `Create repository` 클릭

### 1-2. 로컬 프로젝트를 GitHub에 업로드

터미널에서 프로젝트 폴더로 이동 후 다음 명령어 실행:

\`\`\`bash
# Git 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Portfolio setup"

# GitHub 저장소와 연결 (본인의 username과 repository 이름으로 변경)
git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git

# main 브랜치로 변경
git branch -M main

# GitHub에 푸시
git push -u origin main
\`\`\`

**주의**: `YOUR-USERNAME`을 본인의 GitHub 사용자명으로 변경하세요!

## 🚀 Step 2: Vercel 배포

### 2-1. Vercel 계정 생성 및 로그인

1. [Vercel](https://vercel.com)에 접속
2. `Sign Up` 클릭
3. `Continue with GitHub` 선택
4. GitHub 계정으로 로그인 및 권한 승인

### 2-2. 프로젝트 임포트

1. Vercel 대시보드에서 `Add New...` → `Project` 클릭
2. `Import Git Repository` 섹션에서 GitHub 저장소 검색
3. `my-portfolio` 저장소 찾기 → `Import` 클릭

### 2-3. 프로젝트 설정

**Configure Project** 화면에서:

- **Project Name**: 자동으로 설정됨 (변경 가능)
- **Framework Preset**: Next.js (자동 감지됨)
- **Root Directory**: `./` (기본값 유지)
- **Build and Output Settings**: 자동 설정됨
- **Environment Variables**: 필요시 추가 (현재는 불필요)

### 2-4. 배포 시작

1. `Deploy` 버튼 클릭
2. 빌드 과정 확인 (약 1-2분 소요)
3. 배포 완료! 🎉

## 🌐 Step 3: 배포 완료 및 확인

배포가 완료되면:

1. Vercel이 자동으로 URL 생성
   - 예: `https://my-portfolio-xxxx.vercel.app`
2. `Visit` 버튼을 클릭하여 사이트 확인
3. 문제가 있다면 로그를 확인

## 🔄 Step 4: 업데이트 배포

코드를 수정한 후 GitHub에 푸시하면 자동으로 재배포됩니다:

\`\`\`bash
# 변경사항 추가
git add .

# 커밋
git commit -m "Update portfolio content"

# 푸시 (자동으로 Vercel이 재배포)
git push
\`\`\`

## 🎨 Step 5: 커스터마이징

### 도메인 연결 (선택사항)

1. Vercel 프로젝트 → `Settings` → `Domains`
2. 커스텀 도메인 입력 및 설정
3. DNS 설정 업데이트

### 환경 변수 설정 (필요시)

1. Vercel 프로젝트 → `Settings` → `Environment Variables`
2. 변수 이름과 값 입력
3. `Save` 클릭
4. 재배포 필요시 `Deployments` → `Redeploy`

## 🐛 문제 해결

### 빌드 실패시

1. Vercel 대시보드에서 `Deployments` 확인
2. 실패한 배포 클릭 → 로그 확인
3. 일반적인 문제:
   - TypeScript 에러: 타입 오류 수정
   - 의존성 문제: `package.json` 확인
   - 환경 변수: 필요한 환경 변수 추가

### 로컬에서는 되는데 Vercel에서 안 될 때

\`\`\`bash
# 로컬에서 프로덕션 빌드 테스트
npm run build
npm run start
\`\`\`

## 📚 추가 리소스

- [Vercel 공식 문서](https://vercel.com/docs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)
- [GitHub 가이드](https://guides.github.com)

## ✅ 체크리스트

배포 전 확인사항:

- [ ] GitHub 저장소 생성 완료
- [ ] 로컬 코드 GitHub에 푸시 완료
- [ ] Vercel 계정 생성 완료
- [ ] GitHub 저장소를 Vercel에 연결
- [ ] 배포 성공 확인
- [ ] 웹사이트 정상 작동 확인
- [ ] 개인 정보(이름, 이메일 등) 수정 완료

축하합니다! 포트폴리오가 성공적으로 배포되었습니다! 🚀
