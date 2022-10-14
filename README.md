
# 關鍵就業力平台

------------

## 👉 後台

backend/ ... 

#### 後台依據不同權限有不同色系主題，在 body 上加上 class 即可以改變主題。


```html

<!-- 老師 -->
<body class="user-teacher"></body>
<!-- 總管理 -->
<body class="user-admin"></body>
<!-- 分署 -->
<body class="user-branch"></body>
<!-- 會管單位 -->
<body class="user-unit"></body>

```

#### 選單使用 

``` html
		<!-- JsMenu -->
  <script src="../../assets/javascript/components/JsMenu.js"></script>
```

- 父層元件   data-tu-menu="true"
- .menu-item > .menu-link 
- data-sub="true" 代表有第二層分類，加上去後會有箭頭
- data-tu-menu-trigger="{ default: 'click', 'lg': 'hover', 'sm': 'click'}"
		選單顯示的事件 Hover Or Cilck , 或是針對螢幕寬度設定

```html
 <ul id="navBar" class="menu menu-rounded menu-column menu-lg-row" data-tu-menu="true">
  <li class="menu-item" data-sub="true" data-tu-menu-trigger="{
      default: 'click',
      'lg': 'hover', 
      'sm': 'click'}" data-tu-menu-placement="bottom">
    <a class="menu-link">
      <i class="svg-icon">
        <svg>
          <use href="#ic-setting"></use>
        </svg>
      </i>
      系統管理
      <!-- <div class="menu-arrow"></div> -->
    </a>
   </li>
  </ul>
```




#### 卡片表單 (chartlist.js)

調用範例


```html
<div class="js-bar-chart" 
					data-series="[[40,124,64,124,156]]" 
					data-labels='["北","桃","中","高","南"]' 
					data-is-stack-bars="true" 
					data-is-show-axis-x="true" 
					data-is-show-axis-y="false" 
					data-is-stroke-rounded="true" 
					data-is-show-label-axis-x="true" 
					data-is-show-label-axis-y="false" 
					data-height="100" 
					data-high="200" 
					data-offset-axis-x="24" 
					data-offset-axis-y="0" 
					data-low="0" 
					data-distance="64" 
					data-stroke-width="17.5%" 
					data-mobile-stroke-width="20%" 
					data-stroke-color='[["#fcd53b"]]' 
					data-is-grid-solid-line="true" 
					data-grid-line-color="#E3E3E8" 
					data-label-color-axis-x="#302C4D" 
					data-label-font-size-axis-x="12px" 
					data-is-show-tooltips="true"
					data-postfix="%" 
					data-tooltip-custom-class="chart-tooltip"></div>
```
