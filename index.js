/* empty css                      */import{S as l,$ as a,A as c,N as u,P as d}from"./assets/vendor-IbIMHxMZ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".button-prev"),e=document.querySelector(".button-next");let t;function i(){t&&(t.isBeginning?n.setAttribute("disabled","true"):n.removeAttribute("disabled"),t.isEnd?e.setAttribute("disabled","true"):e.removeAttribute("disabled"))}t=new l(".swiper-hero",{watchOverflow:!1,loop:!0,direction:"horizontal",simulateTouch:!0,grabCursor:!0,slidesPerView:1,speed:1e3,keyboard:{enabled:!0,onlyInViewport:!0},autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".button-next",prevEl:".button-prev"},on:{slideChange:i,init:i}})});function p(){{let n=function(e){var t=parseInt(e.html(),10);t=t+10,e.html(++t),t>e.data("count")?e.html(e.data("count")):setTimeout(function(){n(e)},50)};a(".stat-count").each(function(){a(this).data("count",parseInt(a(this).html(),10)),a(this).html("0"),n(a(this))})}}a(document).ready(function(){var n=document.getElementById("counter"),e,t=0;window.onscroll=function(){e=m(n),e==!0&&t==0&&(p(),t=1)}});function m(n){var e=n.getBoundingClientRect(),t=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(e.bottom<0||e.top-t>=0)}new c(".mod-list",{duration:500,showMultiple:!1});const f=document.querySelectorAll(".mod-button");f.forEach(n=>{n.addEventListener("click",()=>{const t=n.closest(".mod-item").querySelector(".mod-answer"),i=n.classList.contains("active");document.querySelectorAll(".mod-answer").forEach(o=>{o.style.maxHeight=null,o.style.opacity="0",o.style.transition="opacity 0.3s ease, max-height 0.5s ease"}),document.querySelectorAll(".mod-button").forEach(o=>{o.classList.remove("active")}),i||(t.style.maxHeight=t.scrollHeight+"px",t.style.opacity="1",t.style.transition="opacity 0.5s ease, max-height 0.5s ease",n.classList.add("active"))})});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll(".accordion-item");n.forEach((e,t)=>{const i=e.querySelector(".accordion-trigger"),o=e.querySelector(".accordion-content");t===0&&(e.classList.add("open"),o.style.maxHeight=o.scrollHeight+"px"),i.addEventListener("click",()=>{const r=e.classList.contains("open");n.forEach(s=>{s.classList.remove("open"),s.querySelector(".accordion-content").style.maxHeight=0}),r?o.style.maxHeight=0:(e.classList.add("open"),o.style.maxHeight=o.scrollHeight+"px")})})});document.addEventListener("DOMContentLoaded",()=>{new l(".swiper-about",{slidesPerView:2,modules:[u,d],navigation:{nextEl:".swiper-button-next-2"},loop:!0,watchOverflow:!1,pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,loopFillGroupWithBlank:!0,breakpoints:{640:{slidesPerView:3},768:{slidesPerView:3},1440:{slidesPerView:4}}})});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".button-prev"),e=document.querySelector(".button-next");let t;function i(){t&&(t.isBeginning?n.setAttribute("disabled","true"):n.removeAttribute("disabled"),t.isEnd?e.setAttribute("disabled","true"):e.removeAttribute("disabled"))}t=new l(".slider-wrapper",{watchOverflow:!0,centeredSlides:!0,loop:!0,direction:"horizontal",simulateTouch:!0,grabCursor:!0,spaceBetween:16,slidesPerView:1,speed:1e3,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"},on:{slideChange:i,init:i},breakpoints:{768:{slidesPerView:2},1200:{slidesPerView:3},1440:{slidesPerView:4}}})});
//# sourceMappingURL=index.js.map
