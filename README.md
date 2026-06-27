# 世界樹觀測者 Ori｜盧恩符文學習網站

以初學者為核心設計的 Elder Futhark 盧恩符文學習網站。內容涵蓋 24 枚符文的基礎含義、正向／明亮解讀、負向／陰影解讀，以及感情與自我探索中的應用。

這是一個純靜態網站，只使用 HTML、CSS 與 JavaScript；沒有資料庫、登入、會員、付款、後台或建置套件。

## 網站功能

- 品牌首頁與盧恩入門說明
- 24 枚 Elder Futhark 符文總覽
- 每枚符文的完整詳情頁
- 每日隨機抽取一枚符文
- Ori、盧恩課程與占卜服務介紹
- 手機、平板與桌機響應式版面

## 專案結構

    .
    ├─ index.html      # 網站入口
    ├─ styles.css      # 視覺樣式與響應式排版
    ├─ data.js         # 24 枚符文本地資料
    ├─ app.js          # 頁面路由與每日抽符文功能
    ├─ README.md
    └─ DEPLOY.md

網站使用 Hash Router：

- **#/**：首頁
- **#/runes**：24 枚符文總覽
- **#/rune/fehu**：Fehu 詳情
- **#/daily**：每日一符文
- **#/about**：關於 Ori

因此重新整理或直接分享網址時，不需要伺服器 rewrite 規則。

## 本機預覽

最簡單的方式是直接開啟 **index.html**。

若電腦已安裝 Python，也可以在專案根目錄執行：

    python -m http.server 4173

然後開啟 http://localhost:4173。

## Vercel 部署

本專案不需要 build step，也不需要安裝套件。將 repository 匯入 Vercel 時使用：

| 欄位 | 設定 |
| --- | --- |
| Framework Preset | Other |
| Root Directory | ./ |
| Build Command | 開啟 Override，欄位保持空白 |
| Output Directory | 不開啟 Override，維持自動偵測；沒有 public 資料夾時會使用專案根目錄 |
| Install Command | 保持空白 |

完整的 GitHub 與 Vercel 操作步驟請見 [DEPLOY.md](./DEPLOY.md)。

## 字型

網站使用源雲明體 TW 2.100，從官方 GitHub repository 的固定版本標籤載入。其餘網站資料與功能皆為本地靜態資源。
