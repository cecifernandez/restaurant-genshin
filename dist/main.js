(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","home"),t.setAttribute("id","page-content"),e.appendChild(t);const n=document.createElement("div");t.appendChild(n),n.setAttribute("id","filter");const d=document.createElement("div");d.setAttribute("id","home-elements"),t.appendChild(d);const c=document.createElement("h1");c.textContent="ShiMura's",c.setAttribute("id","title"),d.appendChild(c);const i=document.createElement("img");i.src="/src/assets/imgs/miso-soup.png",i.setAttribute("id","dish"),d.appendChild(i)};(()=>{const t=document.querySelector("#content"),n=document.createElement("div"),d=document.createElement("nav");t.appendChild(n),n.appendChild(d),d.setAttribute("id","nav");const c=document.createElement("ul");c.setAttribute("id","list"),d.appendChild(c);const i=document.createElement("li"),o=document.createElement("li"),l=document.createElement("li");function r(){const e=document.querySelector("#content"),t=document.querySelector("#page-content");t&&e.removeChild(t)}l.textContent="CONTACT",o.textContent="MENU",i.textContent="HOME",c.appendChild(i),c.appendChild(o),c.appendChild(l),i.addEventListener("click",(()=>{r(),e()})),o.addEventListener("click",(()=>{r()})),l.addEventListener("click",(()=>{r()}))})(),e()})();