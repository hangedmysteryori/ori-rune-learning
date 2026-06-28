# SEO Route 重構紀錄

更新日期：2026-06-28  
狀態：本機重構與驗收完成，尚未上傳 GitHub 或部署 Vercel。

## 重構方向

網站已從 hash route：

- `/#/`
- `/#/start-here`
- `/#/runes`
- `/#/rune/:slug`
- `/#/daily`
- `/#/about`
- `/#/rune-reading`
- `/#/courses`

調整為正常路徑：

- `/`
- `/beginner`
- `/runes`
- `/runes/:slug`
- `/daily`
- `/about`
- `/rune-reading`
- `/courses`

## 已完成項目

- 所有導覽列、CTA、符文卡片與頁尾內部連結改用正常路徑。
- 路由改用 `location.pathname` 與 History API。
- 保留舊 hash route 相容轉址，不會產生無限導向。
- 首頁、6 個主要頁面與 24 枚符文詳情皆建立預渲染 HTML，共 31 頁。
- 外部抓取工具即使不執行 JavaScript，也能讀取各頁主內容。
- 每頁設有獨立 title、description、Open Graph、canonical URL。
- 新增 `vercel.json`，將正常網址 rewrite 到對應 HTML。
- 新增 `sitemap.xml`，包含 31 個正式網址。
- 新增 `robots.txt`。
- 更新 `README.md` 與 `DEPLOY.md`。
- 所有 CSS、JavaScript、Logo 與 favicon 使用根目錄絕對路徑。
- 全站前台未出現禁用的塔羅式術語。

## 本機驗收結果

- 31 個正常路徑皆回傳 HTTP 200。
- 31 頁皆有可見主內容、正確 canonical 與不重複 title。
- 首頁、主要頁面與符文詳情在瀏覽器中均正常呈現。
- 每日一符文可抽取，並顯示 3 個自我提問與詳情連結。
- 首頁 FAQ 與占卜頁 FAQ 可正常展開／收合。
- 390px 手機寬度下，24 張符文卡片無水平溢出。
- 桌機版首頁導覽與首屏排版正常。
- 舊網址 `/#/runes` 可轉為 `/runes`，hash 會被清除。
- CSS、JavaScript、資料檔、Logo、sitemap 與 robots 均回傳 HTTP 200。
- 瀏覽器測試未捕捉到 JavaScript exception。

## 部署注意事項

- 目前正式站仍是舊版本；本次本機版本尚未部署。
- 上傳 GitHub 時必須包含根目錄 7 個 HTML 與 `runes/` 內 24 個 HTML。
- `vercel.json`、`sitemap.xml`、`robots.txt` 必須保留。
- Vercel 設定維持 Framework Preset `Other`，Build、Output、Install Command 均留空。
- 上線後仍需在正式 Vercel 網域逐頁重新整理驗收。

## 後續內容更新原則

`app.js` 與 `data.js` 是互動內容來源；預渲染 HTML 是搜尋引擎與分享工具讀取的靜態版本。日後修改頁面文案或符文資料時，兩者需要同步更新後再部署。
