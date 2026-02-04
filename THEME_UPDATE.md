# 🌓 라이트/다크 모드 업데이트 가이드

포트폴리오에 테마 전환 기능이 추가되었습니다!

## ✨ 새로운 기능

- **다크 모드** (기본값): 눈이 편한 다크 테마
- **라이트 모드**: 밝고 깔끔한 라이트 테마
- **자동 저장**: 선택한 테마가 로컬 스토리지에 저장됨
- **부드러운 전환**: 애니메이션과 함께 자연스러운 테마 변경
- **네비게이션 바 토글 버튼**: 우측 상단에 토글 버튼 배치

## 📁 추가된 파일

### 1. `/src/contexts/ThemeContext.tsx`
테마 상태를 관리하는 Context Provider
- 현재 테마 상태 관리
- 로컬 스토리지에 테마 저장/불러오기
- 테마 전환 함수 제공

### 2. `/src/components/ThemeToggle.tsx`
테마 전환 버튼 컴포넌트
- 해/달 아이콘으로 현재 테마 표시
- 클릭 시 테마 전환
- 부드러운 회전 애니메이션

## 🔧 수정된 파일

### 1. `/src/app/layout.tsx`
```typescript
// ThemeProvider 추가
import { ThemeProvider } from '@/contexts/ThemeContext'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 2. `/src/app/globals.css`
```css
/* 라이트 모드 색상 변수 추가 */
:root.light {
  --bg-primary: #f8f9fa;
  --bg-secondary: #ffffff;
  --accent-primary: #e63b7a;
  --accent-secondary: #3b7fe6;
  --text-primary: #1a1a1a;
  --text-secondary: #6b7280;
}
```

### 3. `/src/components/Navbar.tsx`
```typescript
// ThemeToggle 컴포넌트 추가
import ThemeToggle from './ThemeToggle'

// 네비게이션 아이템 옆에 배치
<div className="flex items-center gap-8">
  {navItems.map(...)}
  <ThemeToggle />
</div>
```

### 4. `/src/app/page.tsx`
- 라이트/다크 모드별 배경 그라디언트 효과 추가
- 각 모드에 최적화된 불투명도 적용

## 🎨 색상 구성

### 다크 모드 (기본)
- 배경: 진한 남색/검정 (#0a0a0f)
- 카드: 어두운 남색 (#12121a)
- 강조색: 핑크-블루 그라디언트
- 텍스트: 흰색/회색

### 라이트 모드
- 배경: 밝은 회색 (#f8f9fa)
- 카드: 순백색 (#ffffff)
- 강조색: 진한 핑크-블루 그라디언트
- 텍스트: 검정/회색

## 🚀 사용 방법

### 사용자 관점
1. 네비게이션 바 우측의 해/달 아이콘 클릭
2. 테마가 즉시 전환됨
3. 선택한 테마는 자동으로 저장됨
4. 다음 방문 시에도 저장된 테마 유지

### 개발자 관점

#### 테마 값 가져오기
```typescript
import { useTheme } from '@/contexts/ThemeContext'

function MyComponent() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <div>
      Current theme: {theme}
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}
```

#### 조건부 스타일 적용
```typescript
// CSS 클래스 사용
<div className="light:bg-white dark:bg-black">

// 또는 인라인 조건
<div className={theme === 'light' ? 'bg-white' : 'bg-black'}>
```

## 🎯 커스터마이징

### 색상 변경하기

`src/app/globals.css` 파일을 열어서 원하는 색상으로 변경:

```css
/* 다크 모드 색상 */
:root {
  --bg-primary: #당신의색상;
  --accent-primary: #당신의강조색;
  /* ... */
}

/* 라이트 모드 색상 */
:root.light {
  --bg-primary: #당신의색상;
  --accent-primary: #당신의강조색;
  /* ... */
}
```

### 기본 테마 변경하기

`src/contexts/ThemeContext.tsx` 파일에서:

```typescript
// 15번째 줄 수정
const [theme, setTheme] = useState<Theme>('light') // 'dark' → 'light'
```

### 토글 버튼 위치 변경

`src/components/Navbar.tsx`에서 ThemeToggle 컴포넌트의 위치를 조정

## 🐛 문제 해결

### 테마가 저장되지 않을 때
- 브라우저의 로컬 스토리지가 활성화되어 있는지 확인
- 시크릿 모드에서는 저장이 안 될 수 있음

### 플래시 현상 (깜빡임)
- ThemeContext의 mounted 상태가 정상적으로 작동하는지 확인
- 초기 렌더링 전에 HTML 클래스가 올바르게 설정되는지 확인

### 일부 요소만 색상이 안 바뀔 때
- CSS 변수를 올바르게 사용하고 있는지 확인
- `var(--bg-primary)` 형태로 사용

## 📚 추가 개선 아이디어

1. **시스템 테마 감지**
   - 사용자의 OS 설정에 따라 자동 테마 설정
   - `prefers-color-scheme` 미디어 쿼리 활용

2. **커스텀 테마 추가**
   - 블루, 그린, 퍼플 등 다양한 테마 옵션
   - 사용자가 직접 색상 선택

3. **테마 전환 효과 개선**
   - View Transitions API 활용
   - 더 화려한 전환 애니메이션

## ✅ 체크리스트

업데이트 완료 후 확인:

- [ ] 테마 토글 버튼이 네비게이션 바에 표시됨
- [ ] 다크 모드 ↔ 라이트 모드 전환 작동
- [ ] 선택한 테마가 페이지 새로고침 후에도 유지됨
- [ ] 모든 섹션의 색상이 테마에 맞게 변경됨
- [ ] 텍스트 가독성이 두 테마 모두에서 좋음
- [ ] 전환 애니메이션이 부드럽게 작동

## 🎉 완료!

포트폴리오에 전문적인 테마 전환 기능이 추가되었습니다!

사용자는 자신의 선호에 따라 테마를 선택할 수 있으며,
선택한 테마는 자동으로 저장되어 다음 방문 시에도 유지됩니다.

---

더 궁금한 점이 있으시면 README.md를 참고하세요!
