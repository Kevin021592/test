# 專案規範與 AI 代理工作手冊 (AGENTS.md)

## 1. 專案目的與願景
- **專案名稱**：個人主題介紹網站（Topic Notes Library）
- **核心定位**：個人的「綜合型知識主題筆記庫」，採「一個主題、獨立一篇」的單元化結構。
- **目標**：打造一個輕量、排版舒適、專注於閱讀與長期累積的靜態筆記網站。

---

## 2. 核心紀律：資料真實性原則（最高準則）
AI 助手在新增、編輯或重構主題筆記時，必須嚴格遵守以下準則：
1. **嚴禁臆測與腦補**：只能使用使用者在對話中「明確提供」的文字、筆記或資料。
2. **不擅自擴展外來資訊**：不得自行補充未經使用者提及的歷史背景、外部數據、額外案例或捏造參考資料。
3. **資訊缺漏處理**：若使用者提供的內容不足以填滿預設欄位（例如缺少「參考資料」或「詳細解析」），該區塊應維持精簡、標記為「（無提供資料）」或乾淨留空，絕不可自行編造內容填補。
4. **保留原意**：整理的任務在於「排版、分層、結構化」，而非改寫使用者的核心觀點或論述。

---

## 3. 技術限制與部署環境
- **純原生技術（Zero Frameworks）**：
  - 僅使用原生 HTML5、CSS3 與純 JavaScript（Vanilla JS）。
  - 嚴禁引入 React、Vue、Tailwind、Bootstrap、Sass 或任何打包構建工具（如 Vite, Webpack, npm build）。
- **相容 GitHub Pages**：
  - 所有 HTML 必須能直接以瀏覽器本地開啟（雙擊預覽），亦能在推送至 GitHub Pages 後直接正常運作。
  - **路徑限制**：所有靜態資源（CSS、JS、圖片、頁面超連結）必須使用「相對路徑」（例如 `../css/style.css`、`./topics/xxx.html`），嚴禁使用絕對根目錄路徑（如 `/css/style.css`），避免在 GitHub Pages 子路徑環境下發生 404 錯誤。

---

## 4. 檔案結構與命名規範

### 檔案目錄樹
```text
/
├── index.html              # 網站首頁（主題目錄、搜尋/分類篩選、卡片列表）
├── css/
│   └── style.css           # 全站共用樣式（Notion / 現代卡片風）
├── js/
│   └── main.js             # 輕量互動（首頁卡片搜尋、分類過濾、返回頂端）
├── topics/                 # 主題筆記專用目錄（一人一頁）
│   ├── atomic-habits.html
│   └── pomodoro-technique.html
├── assets/                 # 靜態資源（如有圖片）
│   └── images/
└── AGENTS.md               # 本專案規範文件
```

### 命名規範
- **主題檔案**：一律置於 `topics/` 目錄下。
- **英文短語命名（Kebab-case）**：檔名必須使用全小寫英文字母與連字號，例如 `topics/time-management.html`、`topics/docker-basics.html`。
- **語意化命名**：檔名應簡短並直接反映主題，避免無意義的序號（如 `topic-1.html`）。

---

## 5. 視覺風格規範（Notion / 現代卡片風）
整體呈現乾淨、柔和、留白充足的現代文件風格：

- **色彩配置**：
  - 頁面背景：淺灰米白 `#F7F7F5`
  - 卡片/主內容背景：純白 `#FFFFFF`
  - 內文主色：深灰黑 `#37352F`（柔和不刺眼）
  - 次要文字/輔助資訊：中灰 `#787774`
  - 邊框線條：淺灰細線 `rgba(55, 53, 47, 0.09)` 或 `#E9E9E7`
  - 強調標註（Callout 背景）：淡黃或淡藍（如 `#F1F1EF` 或 `#EBF3F5`）
- **字型與排版**：
  - 系統無襯線字型優先：`-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "PingFang TC", "Microsoft JhengHei", sans-serif`
  - 行距（Line-height）：內文 `1.65` ~ `1.75`，確保舒適閱讀。
  - 容器限制：主題內文寬度限制為 `720px` ~ `800px`，居中呈現。
  - 圓角與陰影：卡片統一採用 `8px` ~ `12px` 圓角，微細柔和陰影（Hover 時微浮動）。

---

## 6. 新增筆記的固定格式與模板

每篇新增的主題筆記 HTML 必須包含以下標準語意結構：

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>【主題名稱】 - 主題介紹</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body class="topic-page">
  <div class="container">
    <!-- 頂部導航 -->
    <nav class="breadcrumb">
      <a href="../index.html">← 回到主題列表</a>
    </nav>

    <article class="topic-article">
      <!-- 主題標頭 -->
      <header class="topic-header">
        <h1 class="topic-title">【主題名稱】</h1>
        <div class="topic-meta">
          <span class="meta-date">整理日期：YYYY-MM-DD</span>
          <span class="meta-tag">分類：【主題分類】</span>
        </div>
      </header>

      <!-- 區塊一：一句話核心定義 -->
      <section class="section-card callout-card">
        <h2>核心定義</h2>
        <p class="core-definition">【由使用者提供的資料中整理出的一句話核心定義】</p>
      </section>

      <!-- 區塊二：重點速覽 -->
      <section class="section-card">
        <h2>重點速覽</h2>
        <ul class="highlight-list">
          <li>【重點 1】</li>
          <li>【重點 2】</li>
          <li>【重點 3】</li>
        </ul>
      </section>

      <!-- 區塊三：詳細解析 -->
      <section class="section-card">
        <h2>詳細解析</h2>
        <div class="detail-content">
          <!-- 僅使用使用者提供的資料進行分段/小標整理 -->
          <h3>【小節標題】</h3>
          <p>【使用者提供的詳細解析內容】</p>
        </div>
      </section>

      <!-- 區塊四：參考資料與補充 -->
      <section class="section-card">
        <h2>參考資料與補充</h2>
        <ul class="reference-list">
          <li>【使用者提供的來源、備註或書目，若無則註明「無提供資料」】</li>
        </ul>
      </section>
    </article>

    <!-- 底部導覽 -->
    <footer class="topic-footer">
      <a href="../index.html">← 返回首頁目錄</a>
      <a href="#top">回到頂端 ↑</a>
    </footer>
  </div>
</body>
</html>
```

---

## 7. 標準工作流程（Workflow）

當使用者要求新增一篇主題筆記時：
1. **接收資料**：向使用者索取該主題的筆記或文字資料。
2. **格式化為單一檔案**：
   - 依據主題內容，取一個簡短英文 kebab-case 檔名。
   - 在 `topics/` 目錄建立該檔案，將內容套入第 6 節的四區塊標準模板中。
3. **首頁目錄同步（重要）**：
   - 打開 `index.html`。
   - 在主題清單（卡片網格）中新增一張卡片，包含：主題名稱、一句話核心定義、分類標籤、發布日期、連往該單篇的相對連結。
4. **自檢驗證**：完成後執行「完成檢查清單」。

---

## 8. 修改規則與完成檢查清單

### 修改原則
- **樣式集中管理**：嚴禁在個別 HTML 中撰寫內聯樣式（`style="..."`），所有排版與顏色異動一律在 `css/style.css` 修改。
- **一致性**：所有主題頁面必須維持一致的 HTML 結構與 Class 命名。

### 完成檢查清單（Checklist）
- [ ] **資料查核**：內容是否 100% 取自使用者輸入？完全沒有 AI 自行幻想或延伸的未提供資訊？
- [ ] **相對路徑**：所有 `href` 與 `src` 是否皆為相對路徑？（從 `topics/` 返回上一層必須是 `../`）
- [ ] **雙向連結**：單篇頁面是否有「返回首頁」連結？首頁 `index.html` 是否已同步新增這篇主題的卡片？
- [ ] **版面響應式（RWD）**：手機寬度下卡片與字型是否易讀、無橫向滾動溢出？
- [ ] **零構建依賴**：不需任何終端指令，以瀏覽器直接點開 HTML 能否正常檢視？
