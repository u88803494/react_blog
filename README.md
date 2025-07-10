# React SPA BLOG 🚀

> **備註：本專案 UI 已持續優化，實際畫面可能比下方截圖更美觀、更現代！歡迎 clone 下來親自體驗。**

一個現代化、響應式的個人部落格平台，使用 React 打造，支援 Markdown 寫作、Google 登入、文章管理等功能。專為自由創作、技術筆記、生活分享而設計，結合美觀 UI 與流暢體驗。

---

## ✨ 專案亮點
- **現代化設計**：漸層色彩、卡片式介面、動畫互動、毛玻璃導覽列
- **完整文章管理**：新增、編輯、刪除、Markdown 支援
- **多種文章列表**：網格/條列切換，適合不同閱讀習慣
- **會員系統**：Google 登入，Cookie 維持狀態
- **響應式設計**：桌機、平板、手機皆完美呈現
- **即時互動**：彈窗登入、動態導覽列、即時錯誤提示
- **易於擴充**：採用 Redux 狀態管理、模組化元件

---

## 🏠 主要功能
- **首頁**：鼓勵用戶開始寫作，展示平台理念
- **文章列表**：
  - 網格模式：重點摘要、圖片預覽
  - 條列模式：快速瀏覽、管理操作
- **會員系統**：Google OAuth 登入，安全又方便
- **文章管理**：
  - 僅登入者可新增、編輯、刪除
  - 支援 Markdown 格式
  - 彈窗式編輯體驗
- **關於本站**：介紹平台理念與特色

---

## 🛠️ 使用技術
- React (hooks)
- Redux / Redux-thunk
- React-Router
- React-Bootstrap
- Firebase Authentication
- RWD 響應式設計

### Plugins
- [axios](https://github.com/axios/axios)
- [react-markdown](https://github.com/rexxars/react-markdown#readme)
- [firebase](https://www.npmjs.com/package/firebase)
- [js-cookie](https://github.com/js-cookie/js-cookie)

---

## 📂 目錄結構（/src）
- `component/`：UI 元件（首頁、文章列表、文章管理、導覽列、關於頁、footer...）
- `containers/`：容器元件，負責資料流與狀態管理
- `store/`：Redux actions、reducers、API 整合
- `images/`：本地圖片資源
- `index.js`、`App.js`：應用入口與路由

---

## 🖥️ 畫面預覽
### 首頁
![index](https://i.imgur.com/1yO8wtV.png)

### 文章列表
#### 網格狀顯示
![grid](https://i.imgur.com/QrxDrvp.png)

#### 條列式顯示
![list](https://i.imgur.com/MhFygGT.png)

#### 彈出視窗登入功能
![sign_in](https://i.imgur.com/0XbOgsX.png)

#### 登入後即可使用文章功能
![CRUD](https://i.imgur.com/xhxOROP.png)

#### 顯示單一文章（支援 Markdown）
![markdown](https://i.imgur.com/eohKhtU.png)

### 文章功能
#### 新增文章
![createPost](https://i.imgur.com/XIhp8pO.gif)

#### 編輯文章
![editing](https://i.imgur.com/tcebwRy.gif)

#### 刪除文章
![delete](https://i.imgur.com/FLRiUfb.gif)

#### 錯誤示範功能
![Imgur](https://i.imgur.com/gnCPEjo.gif)

### 畫面效果
#### 捲動隱藏導覽列
![Imgur](https://i.imgur.com/yn3fw2K.gif)
[Medium:讓 React 根據捲動隱藏導覽列](https://medium.com/@hugh_Program_learning_diary_Js/%E8%AE%93-react-%E6%A0%B9%E6%93%9A%E6%8D%B2%E5%8B%95%E9%9A%B1%E8%97%8F%E5%B0%8E%E8%A6%BD%E5%88%97-9dc59e3a4312)

---

## 🚀 快速啟動
```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm start
```

---

## 📖 相關說明
- 本專案為 React SPA 練習作品，歡迎參考、改作
- 若需 Firebase 設定，請於 `/src/firebase/config.js` 補上你的專案資訊
- 美化細節與設計理念請參考 [BEAUTIFICATION_SUMMARY.md](./BEAUTIFICATION_SUMMARY.md)

---

## 🙌 聯絡作者
有任何建議或問題，歡迎 issue 或來信交流！
