# GitHub + Vercel 正式部署指南

## 部署結論

本專案可以直接部署到 Vercel。repository 根目錄同時就是網站根目錄，入口檔案是根目錄的 **index.html**。

實際發布所需檔案：

    index.html
    styles.css
    data.js
    app.js

網站是純 HTML、CSS、JavaScript，沒有 package.json、套件安裝或建置程序。

## Vercel 部署設定表

| Vercel 欄位 | 實際設定 |
| --- | --- |
| Project Name | 自訂，建議 ori-rune-learning |
| Framework Preset | Other |
| Root Directory | 使用預設值，不要指定子資料夾 |
| Build Command | 留空 |
| Output Directory | 留空或使用預設值 |
| Install Command | 留空 |
| Environment Variables | 不需要 |

設定 Build Command 時，選擇 **Other** 後開啟 Override，確認欄位是空白。Output Directory 不需要開啟 Override；本專案沒有 public 資料夾，Vercel 會直接發布 repository 根目錄。

## 為什麼不需要 vercel.json

網站使用 Hash Router。首頁、總覽與詳情頁的網址分別類似：

    https://your-domain.vercel.app/#/
    https://your-domain.vercel.app/#/runes
    https://your-domain.vercel.app/#/rune/fehu
    https://your-domain.vercel.app/#/daily

井字號後方的路由不會傳送給伺服器。重新整理詳情頁時，Vercel 收到的請求仍然是根目錄 **/**，並回傳 index.html，再由 app.js 顯示正確符文。因此不會出現詳情頁 404，也不需要 rewrite、redirect 或 vercel.json。

## 靜態資源檢查

- index.html 以相對路徑載入 styles.css、data.js 與 app.js。
- 網站沒有需要額外複製的圖片；背景紋理直接內嵌於 CSS。
- 24 枚符文內容保存在 data.js，不需要 API 或資料庫。
- 符文詳情頁由 app.js 根據 Hash 路由與 slug 產生。
- 每日一符文由瀏覽器端 JavaScript 隨機抽取，不需要伺服器功能。
- 源雲明體使用官方 GitHub repository 的固定 v2.100 版本；正式站需能連線至 raw.githubusercontent.com。

## 推送到 GitHub

先在 GitHub 建立空白 repository，例如 **ori-rune-learning**，不要勾選自動建立 README、.gitignore 或 License。

在本專案根目錄執行：

    git init
    git add .
    git commit -m "Initial production-ready static site"
    git branch -M main
    git remote add origin https://github.com/YOUR_ACCOUNT/ori-rune-learning.git
    git push -u origin main

將 **YOUR_ACCOUNT** 換成你的 GitHub 使用者名稱。若本機已有正常的 Git repository，請先確認 remote，再執行 add、commit 與 push。

## 從 GitHub 匯入 Vercel

1. 登入 Vercel。
2. 選擇 **Add New → Project**。
3. 連接 GitHub，選擇剛推送的 repository。
4. Framework Preset 選擇 **Other**。
5. Root Directory 保持預設值。
6. Build Command 開啟 Override，但欄位保持空白。
7. Output Directory 與 Install Command 保持預設／空白。
8. 不需要新增 Environment Variables。
9. 按下 **Deploy**。

## 後續更新

    git add .
    git commit -m "Update site"
    git push

Vercel 會在 main 分支更新後自動建立新的 production deployment。

## 上線後驗收

1. **/**：首頁標題、導覽、CTA 與字型正常。
2. **/#/runes**：完整顯示 24 張符文卡片。
3. **/#/rune/fehu**：顯示核心含義、正向／明亮解讀、負向／陰影解讀、感情與建議。
4. 在詳情頁按重新整理，確認仍顯示 Fehu 而非 404。
5. **/#/daily**：可以抽取、再次抽取並進入符文詳情。
6. **/#/about**：Ori 與服務介紹正常。
7. 使用手機尺寸確認導覽、卡片與文字沒有水平溢出。
