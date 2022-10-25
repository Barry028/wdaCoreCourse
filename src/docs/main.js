"use strict";

function getDocumentHeight() {
  var body = document.body;
  var html = document.documentElement;
  return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
} 


// 浮動選單 監聽目標 , 
// target.HTMLCollection , 
// element.HTMLCollection
var ByFloatMenu = function (target, element) {

  var ofArray = [];
  var idArray = [];
  var anchor = document.getElementsByTagName(element); // HTMLCollection
  var navUl = document.getElementById(target); // HTMLCollection
  var lis = navUl.getElementsByTagName("li");

  for (var i = 0, len = anchor.length; i < len; i++) {
    var id = anchor[i].getAttribute('id');
    var offsetT = anchor[i].offsetTop;
    ofArray.push(offsetT);
    idArray.push(id);
    var li_item = document.createElement("li");
    var li_item_el = '<a class="pixel-nav-link" href="#' + id + '">' + id + '</a>';
    ByUtil.attr(li_item, "data-content", id);
    li_item.className = "pixel-nav-item";
    li_item.innerHTML = li_item_el;
    navUl.appendChild(li_item);
  }

  function clickanchor(hrefId) {
    document.querySelector("#" + hrefId).scrollIntoView(true);
  }

  function clickListener() {
    for (var j = 0; j < len; j++) {
      lis[j].addEventListener("click", function (event) {
        var ev = event || event;
        ev.stopPropagation;
        var target = ev.target || ev.srcElement; // 兼容IE
        this.className = "pixel-nav-item active";
        var contents = ByUtil.attr(this, "data-content");
        clickanchor(contents);
      });
    }
  }

  clickListener();

  function sideFloatMenu() {
    var scrollTop = ByUtil.getScrollTop();
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var scrollHeight = getDocumentHeight();
    var clip = window.innerHeight / 2;

    for (var i = 0; i < len; i++) {
      if (scrollTop + clip / 2 >= ofArray[i]) {
        lis[i].className = "pixel-nav-item active";
        lis[i].siblings(function () {
          this.className = "pixel-nav-item";
        });
      } else if (scrollTop == 0) {
        lis[i].siblings(function () {
          this.className = "pixel-nav-item";
        });
        lis[0].className = "pixel-nav-item active";
      } else if (scrollTop + clientHeight === scrollHeight) {
        lis[lis.length - 1].className = "pixel-nav-item active";
        lis[i].siblings(function () {
          this.className = "pixel-nav-item";
        });
      }
    }
  } // window.addEventListener('scroll', sideFloatMenu, true);


  window.addEventListener('scroll', function () {
    var timer;
    ByUtil.throttle(timer, function () {
      sideFloatMenu();
    }, 200);
  }, true);
  ByUtil.onDOMContentLoaded(sideFloatMenu);
};

ByFloatMenu.init = function () {
  ByFloatMenu("pixelNav", "h2");
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ByFloatMenu.init);
} else {
  ByFloatMenu.init;
}







// Toast
var ByToast = function(txt, type, duration) {
  var timer;
  ByUtil.throttle(timer, function() {
    var duration = isNaN(duration) ? 3000 : duration;
    var toast = document.createElement("div");
    toast.id = "toast";
    var toast_id = document.getElementById("toast");

    if (toast_id) toast_id.remove();

    var successIcon =
      '<path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10Z" opacity=".4"/>' +
      '<path d="M11 16a1 1 0 0 1-1-1l-3-2a1 1 0 0 1 1-2l3 3 5-5a1 1 0 0 1 1 1l-6 5a1 1 0 0 1 0 1Z"/>';
    var errorIcon =
      '<path d="M15 2H9a3 3 0 0 0-2 1L3 7a3 3 0 0 0-1 2v6a3 3 0 0 0 1 2l4 4a3 3 0 0 0 2 1h6a3 3 0 0 0 2-1l4-4a3 3 0 0 0 1-2V9a3 3 0 0 0-1-2l-4-4a3 3 0 0 0-2-1Z" opacity=".4"/>' +
      '<path d="m13 12 3-3a1 1 0 0 0-1-1l-3 3-3-3a1 1 0 0 0-1 1l3 3-3 3a1 1 0 0 0 0 1 1 1 0 0 0 1 0l3-3 3 3a1 1 0 0 0 1 0 1 1 0 0 0 0-1Z"/>';
    var infoIcon =
      '<path d="M2 13V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v7a5 5 0 0 1-5 5h-1a1 1 0 0 0-1 0l-2 2a1 1 0 0 1-2 0l-2-2H7a5 5 0 0 1-5-5Z" opacity=".4"/>' +
      '<path d="M15 11a1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1Zm-4 0a1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1Zm-4 0a1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1Z"/>';
    var warnIcon =
      '<path d="M11 2a2 2 0 0 1 2 0l2 2a2 2 0 0 0 1 0h2a2 2 0 0 1 2 2v2a2 2 0 0 0 0 1l2 2a2 2 0 0 1 0 2l-2 2a2 2 0 0 0 0 1v2a2 2 0 0 1-2 2h-2a2 2 0 0 0-1 0l-2 2a2 2 0 0 1-2 0l-2-2a2 2 0 0 0-1 0H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-1l-2-2a2 2 0 0 1 0-2l2-2a2 2 0 0 0 0-1V6a2 2 0 0 1 2-2h2a2 2 0 0 0 1 0Z" opacity=".4"/>' +
      '<path d="M11 16a1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1Zm0-3V8a1 1 0 0 1 1-1 1 1 0 0 1 1 1v5a1 1 0 0 1-1 1 1 1 0 0 1-1-1Z"/>';
    var helpIcon =
      '<path d="M17 18h-4l-4 3a1 1 0 0 1-2 0v-3a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5Z" opacity=".4"/>' +
      '<path d="M11 14a1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1Zm0-3a2 2 0 0 1 1-2h1a1 1 0 0 0-1-1 1 1 0 0 0-1 1 1 1 0 0 1-1 0 2 2 0 0 1 2-3 2 2 0 0 1 2 3 2 2 0 0 1-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1-1-1Z"/>';
    var load =
      '<path d="M20 5a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0 27a12 12 0 1 1 0-24 12 12 0 0 1 0 24z" opacity=".24"/>' +
      '<path d="m26 10 2-3-8-2v3l6 2z">' +
      '  <animateTransform attributeName="transform" attributeType="xml" dur="0.8s" from="0 20 20" repeatCount="indefinite" to="360 20 20" type="rotate"/>' +
      "</path>";
    var text = "<font>" + txt + "</font>";



    switch (type) {
      case "success":
        toast.className = "pixel-toast float-toast toast--" + type + " fadeIn";
        toast.innerHTML =
          '<svg viewBox="0 0 24 24"><g fill="currentColor">' +
          successIcon +
          "</g></svg>" +
          text;
        break;

      case "error":
        toast.className = "pixel-toast float-toast toast--" + type + " fadeIn";
        toast.innerHTML =
          '<svg viewBox="0 0 24 24"><g fill="currentColor">' +
          errorIcon +
          "</g></svg>" +
          text;
        break;

      case "info":
        toast.className = "pixel-toast float-toast toast--" + type + " fadeIn";
        toast.innerHTML =
          '<svg viewBox="0 0 24 24"><g fill="currentColor">' +
          infoIcon +
          "</g></svg>" +
          text;
        break;

      case "warning":
        toast.className = "pixel-toast float-toast toast--" + type + " fadeIn";
        toast.innerHTML =
          '<svg viewBox="0 0 24 24"><g fill="currentColor">' +
          warnIcon +
          "</g></svg>" +
          text;
        break;

      case "help":
        toast.className = "pixel-toast float-toast toast--" + type + " fadeIn";
        toast.innerHTML =
          '<svg viewBox="0 0 24 24"><g fill="currentColor">' +
          helpIcon +
          "</g></svg>" +
          text;
        break;

      case "default":
        toast.className = "pixel-toast float-toast toast--" + type + " fadeIn";
        toast.innerHTML =
          '<svg xml:space="preserve" viewBox="0 0 40 40"><g fill="currentColor">' +
          load +
          "</g></svg>" +
          text;
        break;
    }

    document.body.appendChild(toast);

    setTimeout(function() {
      toast.classList.remove("fadeIn");
      toast.classList.add("fadeOut", "t-invisible");
    }, duration);
  }, 200);
}







// Copy 
var ByCopyText = function(button, content, success) {

  if (!button) {
    return;
  }

  if (typeof content == 'function') {
    success = content;
    content = null;
  }

  success = success || function() {};

  // 是否降級使用
  var isFallback = !navigator.clipboard;

  if (typeof button == 'string' && !content) {
    if (content === false) {
      isFallback = true;
    }
    content = button;
    button = null;
  }

  var eleTextarea = document.querySelector('#tempTextarea');
  if (!eleTextarea && isFallback) {
    eleTextarea = document.createElement('textarea');
    eleTextarea.style.width = 0;
    eleTextarea.style.position = 'fixed';
    eleTextarea.style.left = '-999px';
    eleTextarea.style.top = '10px';
    eleTextarea.setAttribute('readonly', 'readonly');
    document.body.appendChild(eleTextarea);
  }

  var funCopy = function(text, callback) {
    callback = callback || function() {};

    if (!isFallback) {
      navigator.clipboard.writeText(text).then(function() {
        callback();
        // 成功回調
        success(text);
      }, function() {
        // 禁止寫入剪切板後使用兜底方法
        copyText(text, false);
        callback();
        // 成功回調
        success(text);
      });

      return;
    }

    eleTextarea.value = text;
    eleTextarea.select();
    document.execCommand('copy', true);

    callback();
    // 成功回調
    success(text);
  };

  if (!button) {
    funCopy(content);
    return;
  }

  // 事件綁定
  button.addEventListener('click', function(event) {
    var strCopy = content;
    if (content && content.tagName) {
      strCopy = content.textContent || content.value;
    }
    // 覆制的文字內容
    if (!strCopy) {
      return;
    }

    funCopy(strCopy, function() {
      console.log(this)
      ByToast('複製成功', 'success', 1500);
    });
  });
};


// CreatePalettes
var ByCreatePalette = function(el, colors) {

  var elem = document.getElementById(el);

  function lightness(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    result.shift();
    result.forEach(function(val, i) {
      result[i] = parseInt(val, 16);
    });
    return result.reduce(function(a, b) {
      return a + b;
    })
  }

  function bulid() {
    colors.forEach(function(color) {
      var li = document.createElement("li");
      var lColor = lightness(color.value);

      li.className = lColor > 420 ? "pixel-list-inline-item pixel-list-inline-item-dark" :
        "pixel-list-inline-item";
      li.innerHTML = '\
                  <figure class="pixel-card">\
                    <div class="pixel-card-img-container">\
                      <i class="bbion-copy" aria-hidden="true"></i>\
                      <div class="pixel-card-img" data-color="' + color.value + '" style="background-color:' + color.value + '">\
                    </div>\
                    </div>\
                    <figcaption class="pixel-card-cnt">\
                    ' + color.name +
        '</figcaption>\
                  </figure>';
      // e.style.background = color;
      var colorVal = ByUtil.attr(li, "data-color", color.value)
      elem.appendChild(li);
    });
  }

  bulid();



  ByUtil.on(ByUtil.getBody(), 'li', 'click', function(event) {
    event.preventDefault();
    var val = ByUtil.attr(event.target, "data-color");

    ByCopyText(val, function(text) {
      ByToast('複製成功', 'success', 1500)

    });
  }, true);
};