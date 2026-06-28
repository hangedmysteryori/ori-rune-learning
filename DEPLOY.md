# GitHub + Vercel 部署指南

## 部署方式

這是一個純 HTML、CSS、JavaScript 網站。各主要路徑與 24 枚符文詳情皆已有預渲染 HTML，不需要套件安裝、資料庫或 build step。

專案入口為根目錄的 `index.html`。`vercel.json` 將正常網址 rewrite 到對應的預渲染 HTML，因此直接輸入網址或重新整理頁面不會 404。

## 必要部署檔案

上傳 GitHub 時請保留：

```text
index.html
beginner.html
runes.html
daily.html
about.html
rune-reading.html
courses.html
runes/                  # 24 個詳情 HTML
assets/rune-logo.jpg
styles.css
data.js
app.js
vercel.json
sitemap.xml
robots.txt
```

`README.md`、`DEPLOY.md`、`AGENTS.md`、`.gitignore` 與 `.vercelignore` 可保留在 GitHub；它們不是網站執行所需資源。

不需要新增 `package.json`。

## 推送到 GitHub

如果資料夾尚未連接 GitHub：

```powershell
git init
git add .
git commit -m "Migrate site to SEO-friendly routes"
git branch -M main
git remote add origin https://github.com/hangedmysteryori/ori-rune-learning.git
git push -u origin main
```

如果 repository 已連接：

```powershell
git add .
git commit -m "Migrate site to SEO-friendly routes"
git push
```

推送前請先確認 `git status`，避免把不相關檔案一起提交。

## 在 Vercel 匯入 GitHub repository

1. 登入 Vercel。
2. 選擇 **Add New → Project**。
3. 匯入 `hangedmysteryori/ori-rune-learning`。
4. 依照下表設定。
5. 按下 **Deploy**。

## Vercel 部署設定表

| Vercel 欄位 | 應填內容 |
| --- | --- |
| Project Name | `ori-rune-learning` |
| Framework Preset | `Other` |
| Root Directory | 使用預設值 |
| Build Command | 留空 |
| Output Directory | 留空或使用預設值 |
| Install Command | 留空 |
| Environment Variables | 不需要 |

請不要啟用 Build Command、Output Directory 或 Install Command 的 Override。

## `vercel.json` 的用途

`vercel.json` 必須保留。它將：

- `/beginner` rewrite 到 `/beginner.html`
- `/runes` rewrite 到 `/runes.html`
- `/daily` rewrite 到 `/daily.html`
- `/about` rewrite 到 `/about.html`
- `/rune-reading` rewrite 到 `/rune-reading.html`
- `/courses` rewrite 到 `/courses.html`
- `/runes/:slug` rewrite 到 `/runes/:slug.html`

這些 rewrite 不改變瀏覽器網址，也不影響 CSS、JavaScript、圖片、`sitemap.xml` 或 `robots.txt`。

## 上線後驗收

請直接開啟並重新整理：

1. `https://ori-rune-learning.vercel.app/`
2. `https://ori-rune-learning.vercel.app/beginner`
3. `https://ori-rune-learning.vercel.app/runes`
4. `https://ori-rune-learning.vercel.app/runes/fehu`
5. `https://ori-rune-learning.vercel.app/daily`
6. `https://ori-rune-learning.vercel.app/about`
7. `https://ori-rune-learning.vercel.app/rune-reading`
8. `https://ori-rune-learning.vercel.app/courses`
9. `https://ori-rune-learning.vercel.app/sitemap.xml`
10. `https://ori-rune-learning.vercel.app/robots.txt`

另請確認：

- 24 枚符文卡片與上一枚／下一枚導覽正常。
- 每日一符文可抽取、再次抽取並進入詳情。
- 首頁與占卜頁 FAQ 可展開／收合。
- 手機選單可正常開關。
- Logo、CSS、JavaScript 與 favicon 沒有 404。
- 舊網址 `/#/runes`、`/#/rune/fehu` 可自動轉成正常路徑。
- 瀏覽器主控台沒有錯誤。

## 後續更新

更新網站內容時，需同步更新對應的預渲染 HTML，確保搜尋引擎讀到的內容與 JavaScript 畫面一致。完成後再提交：

```powershell
git add .
git commit -m "Update site content"
git push
```

Vercel 會在 `main` 更新後自動建立 production deployment。
