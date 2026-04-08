window.addEventListener("scroll",()=>{header.style.top=scrollY>100?"0":"-60px"});

const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add("show")})});
document.querySelectorAll(".fade-in").forEach(el=>obs.observe(el));

document.querySelectorAll(".role").forEach(r=>{
r.addEventListener("click",()=>{
document.querySelectorAll(".role").forEach(x=>x.classList.remove("active"));
r.classList.add("active");
continueBtn.disabled=false;
});
});
