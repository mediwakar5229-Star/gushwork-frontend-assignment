// sticky
window.addEventListener("scroll",()=>{header.style.top=scrollY>100?"0":"-60px"});

// fade
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add("show")})});
document.querySelectorAll(".fade-in").forEach(el=>obs.observe(el));

// drag carousel
const track=document.querySelector(".carousel-track");
let isDown=false,startX,scrollLeft;
track.addEventListener("mousedown",e=>{isDown=true;startX=e.pageX-track.offsetLeft;scrollLeft=track.scrollLeft});
track.addEventListener("mouseleave",()=>isDown=false);
track.addEventListener("mouseup",()=>isDown=false);
track.addEventListener("mousemove",e=>{if(!isDown)return;e.preventDefault();const x=e.pageX-track.offsetLeft;const walk=(x-startX)*2;track.scrollLeft=scrollLeft-walk});

// onboarding
const roles=document.querySelectorAll(".role");
const btn=document.getElementById("continueBtn");
roles.forEach(r=>r.addEventListener("click",()=>{roles.forEach(x=>x.classList.remove("active"));r.classList.add("active");btn.disabled=false}));
