import{a as l,S as d,i as f}from"./assets/vendor-BLkLXWwN.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();l.defaults.baseURL="https://pixabay.com";function m(t){return l.get("api/",{params:{key:"50262492-fe39fd1e0043f380ecc767a24",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(o=>o.data.hits).catch(o=>{console.log(o)})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){return`<li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}">
      </a>
      <ul class="stats">
        <li class="stats-item"><p>likes</p><p>${t.likes}</p></li>
        <li class="stats-item"><p>views</p><p>${t.views}</p></li>
        <li class="stats-item"><p>comments</p><p>${t.comments}</p></li>
        <li class="stats-item"><p>downloads</p><p>${t.downloads}</p></li>   
      </ul>
    </li>`}function g(){c.innerHTML=""}function L(){u.style.display="block"}function p(){u.style.display="none"}function b(t){p(),c.insertAdjacentHTML("beforeend",t.map(h).join("")),y.refresh()}const n=document.querySelector(".form");n.addEventListener("submit",t=>{t.preventDefault();const a=new FormData(n).get("search-text");g(),L(),m(a).then(s=>{if(s.length===0){f.show({message:`Sorry, there are no images matching your search query. 
        Please try again!`,color:"red",position:"topRight"}),p();return}b(s)}),n.reset()});
//# sourceMappingURL=index.js.map
