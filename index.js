import{a as c,S as u}from"./assets/vendor-CBxvsRsL.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();c.defaults.baseURL="https://pixabay.com";function p(t){return c.get("api/",{params:{key:"50262492-fe39fd1e0043f380ecc767a24",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(n=>n.data.hits).catch(n=>{console.log(n)})}const i=document.querySelector(".gallery"),f=new u(".gallery a",{captionsData:"alt",captionDelay:250});function d(t){return`<li>
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}">
      </a>
      <ul class="stats">
        <li><span>likes</span><span>${t.likes}</span></li>
        <li><span>views</span><span>${t.views}</span></li>
        <li><span>comments</span><span>${t.comments}</span></li>
        <li><span>downloads</span><span>${t.downloads}</span></li>   
      </ul>
    </li>`}function m(t){i.innerHTML="",i.insertAdjacentHTML("beforeend",t.map(d).join("")),f.refresh()}const l=document.querySelector(".form");l.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(l).get("search-text");p(o).then(s=>{if(s.length===0){console.log("Sorry, there are no images matching your search query. Please try again!");return}m(s)})});
//# sourceMappingURL=index.js.map
