(()=>{window.onload=function(){setTimeout((()=>{document.querySelector(".bubble-name").classList.add("show")}),300),setTimeout((()=>{document.querySelector(".bubble-1").classList.add("show")}),1e3),setTimeout((()=>{document.querySelector(".bubble-2").classList.add("show")}),2e3),setTimeout((()=>{document.querySelector(".resume-bubble").classList.add("show")}),3e3);const e=new IntersectionObserver((function(e,t){e.forEach(((e,o)=>{e.isIntersecting&&(setTimeout((()=>{e.target.classList.add("project-image-visible")}),200*o),t.unobserve(e.target))}))}),{threshold:.2});document.querySelectorAll(".project-image").forEach((t=>{e.observe(t)}))};const e=window.location.pathname;document.querySelectorAll("nav ul li a").forEach((t=>{t.getAttribute("href")===e&&t.classList.add("active")})),window.onscroll=function(){document.body.scrollTop>50||document.documentElement.scrollTop>50?document.body.classList.add("scrolled"):document.body.classList.remove("scrolled")},window.addEventListener("load",(function(){document.body.classList.add("loaded")})),window.addEventListener("load",(()=>{document.querySelectorAll(".cards-container .card").forEach(((e,t)=>{e.style.animationDelay=.2*t+"s",e.classList.add("show")}))})),document.addEventListener("DOMContentLoaded",(()=>{function e(){const e=document.querySelector("nav ul"),t=document.querySelector(".hamburger"),o=document.querySelector(".cross");e.classList.toggle("show"),t.classList.toggle("hidden"),o.classList.toggle("visible")}function t(){const e=document.querySelector("nav ul"),t=document.querySelector(".hamburger"),o=document.querySelector(".cross");e.classList.remove("show"),t.classList.remove("hidden"),o.classList.remove("visible")}document.querySelector(".hamburger").addEventListener("click",e),document.querySelector(".cross").addEventListener("click",e);document.querySelectorAll("nav ul li a").forEach((e=>{e.addEventListener("click",t)}))}));const t=document.getElementById("scrollUpBtn");function o(){for(var e=document.querySelectorAll(".project-card, .about-me-card, .hobby-card"),t=document.querySelectorAll(".card"),o=document.querySelectorAll(".button-container"),n=(document.querySelectorAll(".title"),document.querySelectorAll(".title h1, .typing-dots.heading-dots")),c=0;c<e.length;c++){var s=window.innerHeight;e[c].getBoundingClientRect().top<s-200&&e[c].classList.add("active")}for(c=0;c<o.length;c++){s=window.innerHeight;o[c].getBoundingClientRect().top<s-100&&o[c].classList.add("active")}for(c=0;c<n.length;c++){s=window.innerHeight;n[c].getBoundingClientRect().top<s-100&&n[c].classList.add("animate")}for(c=0;c<t.length;c++){s=window.innerHeight;t[c].getBoundingClientRect().top<s-300&&t[c].classList.add("active")}}window.onscroll=function(){document.body.scrollTop>200||document.documentElement.scrollTop>200?t.style.display="block":t.style.display="none"},document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("scroll",o,{passive:!0})})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".typing-dots.project-dots"),t=document.querySelector(".p-card"),o=document.querySelectorAll(".p-card:not(:first-child)");e.classList.add("active"),setTimeout((function(){e.classList.remove("active"),t.classList.add("active")}),750),window.addEventListener("scroll",(function(){var e=window.innerHeight;o.forEach((function(t,o){t.getBoundingClientRect().top<e-100&&t.classList.add("active")}))}))}));const n=document.querySelector(".arrow"),c=document.querySelector("#tagline");new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?n.style.display="none":n.style.display="block"}))}),{threshold:.5}).observe(c)})();