import{a as u,S as f,i as n}from"./assets/vendor-BLkLXWwN.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();u.defaults.baseURL="https://pixabay.com";function m(t){return u.get("api/",{params:{key:"50262492-fe39fd1e0043f380ecc767a24",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(o=>o.data.hits).catch(o=>{console.log(o)})}const p=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){return`<li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}">
      </a>
      <ul class="stats">
        <li class="stats-item"><p>likes</p><p>${t.likes}</p></li>
        <li class="stats-item"><p>views</p><p>${t.views}</p></li>
        <li class="stats-item"><p>comments</p><p>${t.comments}</p></li>
        <li class="stats-item"><p>downloads</p><p>${t.downloads}</p></li>   
      </ul>
    </li>`}function g(){p.innerHTML=""}function L(){d.style.display="block"}function c(){d.style.display="none"}function w(t){c(),p.insertAdjacentHTML("beforeend",t.map(h).join("")),y.refresh()}const l=document.querySelector(".form");l.addEventListener("submit",t=>{t.preventDefault();const a=new FormData(l).get("search-text");if(!a){n.show({message:`Sorry, there are no images matching your search query. 
        Please try again!`,color:"red",position:"topRight"});return}g(),L(),m(a).then(s=>{if(s.length===0){n.show({message:`Sorry, there are no images matching your search query. 
        Please try again!`,color:"red",position:"topRight"}),c();return}w(s)}).catch(s=>{n.show({message:`Error: ${s}`,color:"red",position:"topRight"}),c()}),l.reset()});
//# sourceMappingURL=index.js.map
