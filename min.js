var breeze_prefetch={"local_url":"https:\/\/exampaper.co.in","ignore_remote_prefetch":"1","ignore_list":["\/wp-admin\/"]};
/*! Created by Cloudways 
 On 12-12-2023 */
var timer,ready=e=>{"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)};function search_for_banned_links(e,t){var r=!1;if(e.length)for(i=0;i<e.length;i++)-1===t.indexOf(e[i])&&-1===e[i].indexOf(t)||(r=!0);return r}function breeze_ignore_special_links(e,t){var r=!0;return-1!==t.indexOf("add-to-cart=")&&(r=!1),r=void 0!==e.dataset.product_id&&void 0!==e.dataset.quantity&&void 0!==e.dataset.product_sku?!1:r}ready(()=>{var a=[];addEventListener("mouseover",function(r){var n,i;r.target instanceof HTMLAnchorElement&&(n=new URL(breeze_prefetch.local_url).host,-1===(i=r.target.attributes.href.value).indexOf(n)&&(i=r.target.href),timer=setTimeout(function(){var e,t;"#"!==i&&(t=i.replace(breeze_prefetch.local_url,""),e=new URL(i).host,""!==i.trim()&&!1===a.includes(i)&&n===e&&!1===search_for_banned_links(breeze_prefetch.ignore_list,t)&&!0===breeze_ignore_special_links(r.target,i)&&(a.push(i.trim()),(t=document.createElement("link")).href=i,t.rel="prefetch",document.head.appendChild(t)))},150))}),addEventListener("mouseout",function(e){clearTimeout(timer)})});!function(){"use strict";if("querySelector"in document&&"addEventListener"in window){var e=document.body;e.addEventListener("mousedown",function(){e.classList.add("using-mouse")}),e.addEventListener("keydown",function(){e.classList.remove("using-mouse")})}}();var generatepressMenu={"toggleOpenedSubMenus":"1","openSubMenuLabel":"Open Sub-Menu","closeSubMenuLabel":"Close Sub-Menu"};
!function(){"use strict";if("querySelector"in document&&"addEventListener"in window){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(this))return null;do{if(t.matches(e))return t}while(null!==(t=t.parentElement));return null});var o=function(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})},e=document.querySelectorAll(".menu-toggle"),t=document.querySelectorAll("nav .dropdown-menu-toggle"),n=document.querySelectorAll("nav .main-nav ul a"),l=document.querySelector(".mobile-menu-control-wrapper"),r=document.body,c=document.documentElement,u=function(e){if(e&&r.classList.contains("dropdown-hover")){var t=e.querySelectorAll("li.menu-item-has-children");for(p=0;p<t.length;p++)t[p].querySelector(".dropdown-menu-toggle").removeAttribute("tabindex"),t[p].querySelector(".dropdown-menu-toggle").setAttribute("role","presentation"),t[p].querySelector(".dropdown-menu-toggle").removeAttribute("aria-expanded"),t[p].querySelector(".dropdown-menu-toggle").removeAttribute("aria-label")}},a=function(e){"false"!==e.getAttribute("aria-expanded")&&e.getAttribute("aria-expanded")?(e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label",generatepressMenu.openSubMenuLabel)):(e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label",generatepressMenu.closeSubMenuLabel))},s=function(e,t){var n,s,o="";(o=(t=t||this).getAttribute("data-nav")?document.getElementById(t.getAttribute("data-nav")):document.getElementById(t.closest("nav").getAttribute("id")))&&(n=!1,t.closest(".mobile-menu-control-wrapper")&&(n=!0),s=o.getElementsByTagName("ul")[0],o.classList.contains("toggled")?(o.classList.remove("toggled"),c.classList.remove("mobile-menu-open"),s&&s.setAttribute("aria-hidden","true"),t.setAttribute("aria-expanded","false"),(n||l&&o.classList.contains("main-navigation"))&&l.classList.remove("toggled"),u(s)):(o.classList.add("toggled"),c.classList.add("mobile-menu-open"),s&&s.setAttribute("aria-hidden","false"),t.setAttribute("aria-expanded","true"),n?(l.classList.add("toggled"),l.querySelector(".search-item")&&l.querySelector(".search-item").classList.contains("active")&&l.querySelector(".search-item").click()):l&&o.classList.contains("main-navigation")&&l.classList.add("toggled"),function(e){if(e&&r.classList.contains("dropdown-hover")){var t=e.querySelectorAll("li.menu-item-has-children");for(p=0;p<t.length;p++)t[p].querySelector(".dropdown-menu-toggle").setAttribute("tabindex","0"),t[p].querySelector(".dropdown-menu-toggle").setAttribute("role","button"),t[p].querySelector(".dropdown-menu-toggle").setAttribute("aria-expanded","false"),t[p].querySelector(".dropdown-menu-toggle").setAttribute("aria-label",generatepressMenu.openSubMenuLabel)}}(s)))};for(p=0;p<e.length;p++)e[p].addEventListener("click",s,!1);var i=function(e,t){if(((t=t||this).closest("nav").classList.contains("toggled")||c.classList.contains("slide-opened"))&&!r.classList.contains("dropdown-click")){e.preventDefault();var n=t.closest("li");if(a(n.querySelector(".dropdown-menu-toggle")),t=n.querySelector(".sub-menu")?n.querySelector(".sub-menu"):n.querySelector(".children"),generatepressMenu.toggleOpenedSubMenus){var s=o(n);for(p=0;p<s.length;p++)s[p].classList.contains("sfHover")&&(s[p].classList.remove("sfHover"),s[p].querySelector(".toggled-on").classList.remove("toggled-on"),a(s[p].querySelector(".dropdown-menu-toggle")))}n.classList.toggle("sfHover"),t.classList.toggle("toggled-on")}e.stopPropagation()};for(p=0;p<t.length;p++)t[p].addEventListener("click",i,!1),t[p].addEventListener("keypress",function(e){"Enter"!==e.key&&" "!==e.key||i(e,this)},!1);var d=function(){var e=document.querySelectorAll(".toggled, .has-active-search");for(p=0;p<e.length;p++){var t=e[p].querySelector(".menu-toggle");if((t=l&&!t.closest("nav").classList.contains("mobile-menu-control-wrapper")?l.querySelector(".menu-toggle"):t)&&null===t.offsetParent){if(e[p].classList.contains("toggled")){var n,s,o,r=!1;if((r=e[p].classList.contains("mobile-menu-control-wrapper")?!0:r)||(s=(n=e[p].getElementsByTagName("ul")[0])?n.getElementsByTagName("li"):[],o=n?n.getElementsByTagName("ul"):[]),document.activeElement.blur(),e[p].classList.remove("toggled"),c.classList.remove("mobile-menu-open"),t.setAttribute("aria-expanded","false"),!r){for(var a=0;a<s.length;a++)s[a].classList.remove("sfHover");for(var i=0;i<o.length;i++)o[i].classList.remove("toggled-on");n&&n.removeAttribute("aria-hidden")}u(e[p])}l.querySelector(".search-item")&&l.querySelector(".search-item").classList.contains("active")&&l.querySelector(".search-item").click()}}};if(window.addEventListener("resize",d,!1),window.addEventListener("orientationchange",d,!1),r.classList.contains("dropdown-hover"))for(p=0;p<n.length;p++)n[p].addEventListener("click",function(e){var t;this.hostname!==window.location.hostname&&document.activeElement.blur(),(this.closest("nav").classList.contains("toggled")||c.classList.contains("slide-opened"))&&("#"!==(t=this.getAttribute("href"))&&""!==t||(e.preventDefault(),(e=this.closest("li")).classList.toggle("sfHover"),(e=e.querySelector(".sub-menu"))&&e.classList.toggle("toggled-on")))},!1);if(r.classList.contains("dropdown-hover")){for(var g=document.querySelectorAll(".menu-bar-items .menu-bar-item > a"),m=function(){if(!this.closest("nav").classList.contains("toggled")&&!this.closest("nav").classList.contains("slideout-navigation"))for(var e=this;-1===e.className.indexOf("main-nav");)"li"===e.tagName.toLowerCase()&&e.classList.toggle("sfHover"),e=e.parentElement},v=function(){if(!this.closest("nav").classList.contains("toggled")&&!this.closest("nav").classList.contains("slideout-navigation"))for(var e=this;-1===e.className.indexOf("menu-bar-items");)e.classList.contains("menu-bar-item")&&e.classList.toggle("sfHover"),e=e.parentElement},p=0;p<n.length;p++)n[p].addEventListener("focus",m),n[p].addEventListener("blur",m);for(p=0;p<g.length;p++)g[p].addEventListener("focus",v),g[p].addEventListener("blur",v)}if("ontouchend"in document.documentElement&&document.body.classList.contains("dropdown-hover")){var f=document.querySelectorAll(".sf-menu .menu-item-has-children");for(p=0;p<f.length;p++)f[p].addEventListener("touchend",function(e){if(!(this.closest("nav").classList.contains("toggled")||1!==e.touches.length&&0!==e.touches.length||(e.stopPropagation(),this.classList.contains("sfHover")))){e.target!==this&&e.target.parentNode!==this&&!e.target.parentNode.parentNode||e.preventDefault();var e=this.closest("li"),t=o(e);for(p=0;p<t.length;p++)t[p].classList.contains("sfHover")&&t[p].classList.remove("sfHover");this.classList.add("sfHover");var n,s=this;document.addEventListener("touchend",n=function(e){e.stopPropagation(),s.classList.remove("sfHover"),document.removeEventListener("touchend",n)})}})}}}();