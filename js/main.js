/**
 * 主題介紹網站核心互動腳本 (main.js)
 * 功能：即時搜尋、分類篩選、動態計數與返回頂端
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const topicCards = document.querySelectorAll('.topic-card');
  const countDisplay = document.getElementById('visible-count');
  const totalDisplay = document.getElementById('total-count');

  let currentCategory = 'all';
  let searchQuery = '';

  if (totalDisplay) {
    totalDisplay.textContent = topicCards.length;
  }

  // 篩選與搜尋的核心邏輯
  function filterCards() {
    let visibleCount = 0;

    topicCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardTitle = (card.querySelector('.card-title')?.textContent || '').toLowerCase();
      const cardSummary = (card.querySelector('.card-summary')?.textContent || '').toLowerCase();
      const cardCategoryText = (card.querySelector('.card-category')?.textContent || '').toLowerCase();

      // 分類符合判斷
      const matchCategory = (currentCategory === 'all' || cardCategory === currentCategory);

      // 關鍵字符合判斷（標題、摘要、標籤）
      const matchSearch = searchQuery === '' || 
        cardTitle.includes(searchQuery) || 
        cardSummary.includes(searchQuery) ||
        cardCategoryText.includes(searchQuery);

      if (matchCategory && matchSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countDisplay) {
      countDisplay.textContent = visibleCount;
    }
  }

  // 搜尋輸入事件（防抖輕量處理）
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterCards();
    });

    // 快捷鍵：按下 '/' 自動聚焦到搜尋框
    window.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
      } else if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        searchQuery = '';
        filterCards();
        searchInput.blur();
      }
    });
  }

  // 分類標籤點擊事件
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      currentCategory = button.getAttribute('data-filter') || 'all';
      filterCards();
    });
  });

  // 初次執行計數初始化
  filterCards();
});
