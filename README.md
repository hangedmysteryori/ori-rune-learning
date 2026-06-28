# 世界樹觀測者 Ori｜盧恩符文學習網站

以初學者為核心的 Elder Futhark 盧恩符文學習網站，收錄 24 枚符文的核心含義、正向／明亮解讀、負向／陰影解讀、感情應用、自我提問與今日行動建議。

網站使用純 HTML、CSS 與 JavaScript，不需要登入、資料庫、後台、套件安裝或建置流程。

## 網站功能

- 首頁與初學者學習入口
- 單頁式新手學習地圖
- 依三組 Aett 分組的 24 枚符文總覽
- 24 枚符文完整詳情與前後導覽
- 每日隨機抽取一枚符文
- 關於 Ori、占卜須知與教學課程頁
- FAQ accordion
- 手機與桌機響應式排版
- 獨立 SEO metadata、canonical、Open Graph
- `sitemap.xml` 與 `robots.txt`

## 正式網址結構

- `/`
- `/beginner`
- `/runes`
- `/runes/fehu`（其他符文依相同格式）
- `/daily`
- `/about`
- `/rune-reading`
- `/courses`

舊版 `/#/...` 網址仍有前端相容轉址，但網站內部連結一律使用正常路徑。

## 專案結構

```text
.
├─ index.html
├─ beginner.html
├─ runes.html
├─ daily.html
├─ about.html
├─ rune-reading.html
├─ courses.html
├─ runes/                  # 24 枚符文預渲染 HTML
├─ assets/
│  └─ rune-logo.jpg
├─ styles.css
├─ data.js
├─ app.js
├─ vercel.json
├─ sitemap.xml
└─ robots.txt
```

每個主要路徑都有預渲染 HTML，因此未執行 JavaScript 的搜尋引擎與分享工具也能讀取頁面主內容；`app.js` 則負責導覽、每日抽取、accordion 與其他互動。

## 本機預覽

不要直接雙擊 HTML 檔案測試正常路由。請在專案根目錄啟動任一靜態伺服器，例如：

```powershell
python -m http.server 4173
```

再開啟 `http://localhost:4173/`。

若要完整模擬 Vercel 的無副檔名 rewrite，建議以 Vercel Preview Deployment 驗收 `/beginner`、`/runes/fehu` 等路徑。

## Vercel 部署

本專案不需要 build step，也不需要 `package.json`。

| 欄位 | 設定 |
| --- | --- |
| Framework Preset | Other |
| Root Directory | 使用預設值 |
| Build Command | 留空 |
| Output Directory | 留空或使用預設值 |
| Install Command | 留空 |
| Environment Variables | 不需要 |

詳細部署流程請參考 [DEPLOY.md](./DEPLOY.md)。
