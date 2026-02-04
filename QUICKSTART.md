# 🚀 빠른 시작 가이드

포트폴리오 프로젝트를 5분 안에 배포하는 방법입니다!

## 📥 1단계: 프로젝트 다운로드

다운로드 받은 `my-portfolio` 폴더를 원하는 위치에 저장하세요.

## 🔑 2단계: GitHub 저장소 생성 및 업로드

### Option A: GitHub Desktop 사용 (초보자 추천)

1. **GitHub Desktop 다운로드 및 설치**
   - [GitHub Desktop 다운로드](https://desktop.github.com/)
   - GitHub 계정으로 로그인

2. **저장소 생성**
   - `File` → `New Repository` 클릭
   - Name: `my-portfolio`
   - Local Path: 다운로드한 프로젝트 폴더 선택
   - `Create Repository` 클릭

3. **GitHub에 업로드**
   - `Publish repository` 클릭
   - Public/Private 선택
   - `Publish Repository` 클릭

### Option B: 터미널/명령 프롬프트 사용

1. **GitHub에서 새 저장소 만들기**
   - [GitHub](https://github.com/new)에서 새 repository 생성
   - 이름: `my-portfolio`
   - `Create repository` 클릭

2. **터미널에서 명령어 실행**
   ```bash
   # 프로젝트 폴더로 이동
   cd path/to/my-portfolio
   
   # Git 초기화 및 업로드
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git
   git push -u origin main
   ```

## 🌐 3단계: Vercel 배포 (초간단!)

### 방법 1: Vercel 웹사이트 (가장 쉬움)

1. **[Vercel](https://vercel.com) 접속**
   - `Sign Up` 클릭
   - `Continue with GitHub` 선택

2. **프로젝트 임포트**
   - `Add New...` → `Project` 클릭
   - GitHub에서 `my-portfolio` 저장소 선택
   - `Import` 클릭

3. **배포 시작**
   - 자동으로 설정 완료됨
   - `Deploy` 버튼 클릭
   - 2분 대기 ⏳

4. **완료!** 🎉
   - 생성된 URL 클릭하여 사이트 확인
   - 예: `https://my-portfolio-xxxx.vercel.app`

## ✏️ 4단계: 개인 정보 수정

다음 파일들을 열어서 **"Your Name"**, **"your.email@example.com"** 등을 본인 정보로 수정하세요:

### 필수 수정 파일:

1. **`src/app/layout.tsx`** (6번째 줄)
   ```typescript
   title: '본인 이름 | Portfolio',
   ```

2. **`src/components/Navbar.tsx`** (25번째 줄)
   ```typescript
   YourName → 본인 이름
   ```

3. **`src/components/Hero.tsx`** (31번째 줄)
   ```typescript
   <span className="text-gradient">본인 이름</span>
   ```

4. **`src/components/About.tsx`** (57번째 줄)
   ```typescript
   안녕하세요, <span className="text-gradient">본인 이름</span>입니다
   ```

5. **`src/components/Contact.tsx`** (93번째 줄)
   ```typescript
   href="mailto:본인이메일@example.com"
   ```
   그리고 102번째 줄:
   ```typescript
   본인이메일@example.com
   ```

6. **`src/components/Projects.tsx`**
   - 프로젝트 내용을 본인의 실제 프로젝트로 수정
   - GitHub 링크 업데이트

7. **`src/components/Footer.tsx`**
   - 이름 수정

### 파일 수정 후 GitHub에 업데이트:

```bash
git add .
git commit -m "Update personal information"
git push
```

Vercel이 자동으로 새 버전을 배포합니다! (약 2분 소요)

## 🎨 선택사항: 색상 테마 변경

`src/app/globals.css` 파일을 열어서 색상을 변경할 수 있습니다:

```css
:root {
  --bg-primary: #0a0a0f;        /* 배경색 */
  --bg-secondary: #12121a;      /* 카드 배경색 */
  --accent-primary: #ff4da6;    /* 주요 강조색 (분홍) */
  --accent-secondary: #4d9fff;  /* 보조 강조색 (파랑) */
  --text-primary: #ffffff;      /* 메인 텍스트 색 */
  --text-secondary: #a0a0b0;    /* 보조 텍스트 색 */
}
```

## 🔗 커스텀 도메인 연결 (선택사항)

1. 도메인 구매 (예: [Namecheap](https://www.namecheap.com), [Cloudflare](https://www.cloudflare.com))
2. Vercel 프로젝트 → `Settings` → `Domains`
3. 도메인 입력 및 DNS 설정 따라하기

## 📱 소셜 미디어 링크 업데이트

`src/components/Contact.tsx` 파일에서 본인의 실제 소셜 미디어 링크로 변경:

```typescript
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/본인아이디',
    ...
  },
  ...
]
```

## ❓ 문제 해결

### "git command not found" 에러
- [Git 다운로드](https://git-scm.com/downloads) 후 설치

### Vercel 빌드 실패
- Vercel 대시보드에서 에러 로그 확인
- 대부분 오타나 문법 오류가 원인

### 로컬에서 테스트하고 싶을 때
```bash
npm install  # 의존성 설치 (최초 1회)
npm run dev  # 개발 서버 실행
```
브라우저에서 `http://localhost:3000` 접속

## 🎯 체크리스트

- [ ] GitHub 저장소 생성 ✅
- [ ] Vercel 배포 완료 ✅
- [ ] 본인 이름으로 수정 ✅
- [ ] 이메일 주소 수정 ✅
- [ ] 소셜 미디어 링크 수정 ✅
- [ ] 프로젝트 내용 업데이트 ✅
- [ ] 실제 사이트 확인 ✅

## 💡 추가 팁

- 코드를 수정하고 GitHub에 푸시하면 Vercel이 자동으로 재배포합니다
- Vercel 무료 플랜으로 충분히 사용 가능합니다
- 궁금한 점은 [Vercel 문서](https://vercel.com/docs) 참고

---

**축하합니다! 🎊 멋진 포트폴리오 사이트가 완성되었습니다!**

더 자세한 내용은 `DEPLOYMENT.md` 파일을 참고하세요.
