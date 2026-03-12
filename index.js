import{a as c,S as f,i as m}from"./assets/vendor-BLkLXWwN.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();c.defaults.baseURL="https://pixabay.com";function y(t){return c.get("api/",{params:{key:"50262492-fe39fd1e0043f380ecc767a24",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(o=>o.data.hits).catch(o=>{console.log(o)})}const u=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(t){return`<li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}">
      </a>
      <ul class="stats">
        <li class="stats-item"><p>likes</p><p>${t.likes}</p></li>
        <li class="stats-item"><p>views</p><p>${t.views}</p></li>
        <li class="stats-item"><p>comments</p><p>${t.comments}</p></li>
        <li class="stats-item"><p>downloads</p><p>${t.downloads}</p></li>   
      </ul>
    </li>`}function l(){u.innerHTML=""}function L(){p.style.display="block"}function d(){p.style.display="none"}function b(t){d(),u.insertAdjacentHTML("beforeend",t.map(g).join("")),h.refresh()}const n=document.querySelector(".form");n.addEventListener("submit",t=>{t.preventDefault();const a=new FormData(n).get("search-text");l(),L(),y(a).then(s=>{if(s.length===0){m.show({message:`Sorry, there are no images matching your search query. 
        Please try again!`,color:"red",position:"topRight"}),l(),d();return}b(s)}),n.reset()});
//# sourceMappingURL=index.js.map
