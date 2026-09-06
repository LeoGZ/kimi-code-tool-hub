/**
 * Kimi Code Tool Hub — 渲染与交互
 * 数据来自 tools.js 的 TOOLS 数组。
 */
(function () {
  "use strict";

  var grid = document.getElementById("toolGrid");
  var tabs = document.getElementById("categoryTabs");
  var searchInput = document.getElementById("searchInput");
  var emptyState = document.getElementById("emptyState");
  var featureGrid = document.getElementById("featureGrid");

  // 精选卡片颜色循环：pink → teal → lavender → peach → ochre → cream
  var FEATURE_COLORS = ["f-pink", "f-teal", "f-lavender", "f-peach", "f-ochre", "f-cream"];

  var state = { query: "", category: "全部" };

  // 分类列表：以 "全部" 开头，按数据中出现顺序去重
  var categories = ["全部"];
  TOOLS.forEach(function (t) {
    if (categories.indexOf(t.category) === -1) categories.push(t.category);
  });

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function matches(t) {
    if (state.category !== "全部" && t.category !== state.category) return false;
    if (!state.query) return true;
    var q = state.query.toLowerCase();
    var haystack = (t.name + " " + t.desc + " " + t.tags.join(" ")).toLowerCase();
    return haystack.indexOf(q) !== -1;
  }

  function renderTabs() {
    tabs.innerHTML = categories.map(function (c) {
      var cls = "category-tab" + (c === state.category ? " active" : "");
      return '<button class="' + cls + '" data-category="' + escapeHtml(c) + '" role="tab">' + escapeHtml(c) + "</button>";
    }).join("");
  }

  function renderGrid() {
    var list = TOOLS.filter(matches);
    emptyState.hidden = list.length > 0;
    grid.innerHTML = list.map(function (t) {
      return (
        '<article class="tool-card">' +
          '<div class="tool-head">' +
            '<span class="tool-icon" aria-hidden="true">' + t.icon + "</span>" +
            '<h3 class="tool-name">' + escapeHtml(t.name) + "</h3>" +
          "</div>" +
          '<p class="tool-desc">' + escapeHtml(t.desc) + "</p>" +
          '<div class="tool-tags">' +
            t.tags.map(function (tag) { return '<span class="tool-tag">' + escapeHtml(tag) + "</span>"; }).join("") +
          "</div>" +
          '<div class="tool-foot">' +
            '<span class="tool-stars">★ ' + escapeHtml(t.stars) + "</span>" +
            '<a class="tool-link" href="' + encodeURI(t.github) + '" target="_blank" rel="noopener">GitHub →</a>' +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function renderFeatured() {
    var featured = TOOLS.filter(function (t) { return t.featured; }).slice(0, 6);
    featureGrid.innerHTML = featured.map(function (t, i) {
      return (
        '<article class="feature-card ' + FEATURE_COLORS[i % FEATURE_COLORS.length] + '">' +
          '<span class="badge-pill">' + escapeHtml(t.category) + "</span>" +
          "<h3>" + escapeHtml(t.name) + "</h3>" +
          "<p>" + escapeHtml(t.desc) + "</p>" +
          '<div class="feature-meta">' +
            "<span>★ " + escapeHtml(t.stars) + "</span>" +
            '<a class="btn btn-on-color" href="' + encodeURI(t.github) + '" target="_blank" rel="noopener">GitHub →</a>' +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function renderStats() {
    document.getElementById("statTools").textContent = TOOLS.length;
    document.getElementById("statCategories").textContent = categories.length - 1;
    document.getElementById("statStars").textContent = "20k+";
  }

  // ---- 事件 ----
  tabs.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-category]");
    if (!btn) return;
    state.category = btn.getAttribute("data-category");
    renderTabs();
    renderGrid();
  });

  searchInput.addEventListener("input", function () {
    state.query = this.value.trim();
    renderGrid();
  });

  var burger = document.getElementById("navBurger");
  burger.addEventListener("click", function () {
    document.getElementById("navMobile").classList.toggle("open");
  });

  // ---- 首渲染 ----
  renderTabs();
  renderGrid();
  renderFeatured();
  renderStats();
})();
