(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","contact"),t.setAttribute("id","page-content"),e.appendChild(t);const n=document.createElement("h1");n.innerHTML="Come visit us!",n.setAttribute("id","contact-title"),t.appendChild(n);const c=document.createElement("img");c.src="/src/assets/imgs/location.png",c.setAttribute("id","map-location"),t.appendChild(c)};(()=>{const t=document.querySelector("#content"),n=document.createElement("div"),c=document.createElement("nav");t.appendChild(n),n.appendChild(c),c.setAttribute("id","nav");const i=document.createElement("ul");i.setAttribute("id","list"),c.appendChild(i);const s=document.createElement("li"),d=document.createElement("li"),o=document.createElement("li");function a(){const e=document.querySelector("#content"),t=document.querySelector("#page-content");t&&e.removeChild(t)}o.textContent="CONTACT",d.textContent="MENU",s.textContent="HOME",i.appendChild(s),i.appendChild(d),i.appendChild(o),s.addEventListener("click",(()=>{a(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","home"),t.setAttribute("id","page-content"),e.appendChild(t);const n=document.createElement("div");t.appendChild(n),n.setAttribute("id","filter");const c=document.createElement("div");c.setAttribute("id","home-elements"),t.appendChild(c);const i=document.createElement("h1");i.textContent="ShiMura's",i.setAttribute("id","title"),c.appendChild(i);const s=document.createElement("img");s.src="/src/assets/imgs/miso-soup.png",s.setAttribute("id","dish"),c.appendChild(s)})()})),d.addEventListener("click",(()=>{a(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","menu"),t.setAttribute("id","page-content"),e.appendChild(t);const n=document.createElement("h1");t.appendChild(n),n.innerHTML="Shimura's Menu",n.setAttribute("id","food-title");const c=document.createElement("ul");c.setAttribute("id","food-list"),t.appendChild(c);const i=(e,t,n)=>{const c=document.createElement("li");c.setAttribute("class","food-item");const i=document.createElement("img");i.src=t,c.appendChild(i);const s=document.createElement("div");s.setAttribute("class","food-details");const d=document.createElement("span");d.setAttribute("class","food-name"),d.innerHTML=e,s.appendChild(d);const o=document.createElement("div");o.setAttribute("class","price-box");const a=document.createElement("img");a.setAttribute("class","price-icon"),a.src="/src/assets/imgs/coin.png",o.appendChild(a);const l=document.createElement("span");return l.setAttribute("class","food-price"),l.innerHTML=n,o.appendChild(l),s.appendChild(o),c.appendChild(s),c},s=i("Pickled Treasure","/src/assets/imgs/Item_Five_Pickled_Treasures.png","9.99"),d=i("Sangayaki","/src/assets/imgs/Item_Sangayaki.png","8.99"),o=i("Egg Roll","/src/assets/imgs/Item_Egg_Roll.png","7.99"),a=i("Tonkotsu Ramen","/src/assets/imgs/Item_Tonkotsu_Ramen.png","10.99"),l=i("Omelette Rice","/src/assets/imgs/Item_Omelette_Rice.png","11.00"),r=i("Unagi Chazuke","/src/assets/imgs/Item_Unagi_Chazuke.png","12.90");c.appendChild(s),c.appendChild(d),c.appendChild(o),c.appendChild(a),c.appendChild(l),c.appendChild(r)})()})),o.addEventListener("click",(()=>{a(),e()}))})(),e()})();