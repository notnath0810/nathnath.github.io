
// typing
const typing = document.getElementById("typing");
if (typing) {
  const text = "Nathaniel M. Padas";
  let i=0; (function t(){ if(i<text.length){ typing.innerHTML+=text[i++]; setTimeout(t,50);} })();
}
// dark mode
const toggle = document.getElementById("darkModeToggle");
if (toggle) toggle.onclick = ()=> document.body.classList.toggle("dark-mode");
// expand
document.querySelectorAll(".project-top").forEach(el=> el.onclick = ()=> el.closest(".project").classList.toggle("active"));
// search
const search = document.getElementById("search");
if (search) search.oninput = ()=> {
  document.querySelectorAll(".project").forEach(p=>{
    p.style.display = p.innerText.toLowerCase().includes(search.value.toLowerCase()) ? "" : "none";
  });
};
// reveal
const obs = new IntersectionObserver(es=> es.forEach(e=> e.isIntersecting && e.target.classList.add("show")));
document.querySelectorAll(".project, .block").forEach(el=>{ el.classList.add("reveal"); obs.observe(el); });
// focus container
document.querySelectorAll(".content").forEach(c=>{
  c.classList.add("focus-container");
  c.addEventListener("mouseover", ()=> c.classList.add("focus-active"));
  c.addEventListener("mouseleave", ()=> c.classList.remove("focus-active"));
});
// logo tilt (subtle)
document.querySelectorAll(".edu-logo-wrap").forEach(el=>{
  el.addEventListener("mousemove", (e)=>{
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left)/r.width - .5;
    const y = (e.clientY - r.top)/r.height - .5;
    el.style.transform = `perspective(400px) rotateX(${y*-6}deg) rotateY(${x*6}deg)`;
  });
  el.addEventListener("mouseleave", ()=> el.style.transform = "perspective(400px) rotateX(0) rotateY(0)");
});
