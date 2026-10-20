(function(){
document.querySelectorAll('.ca-val').forEach(e=>e.textContent=CA);
document.querySelectorAll('.xlink').forEach(a=>a.href=X_LINK);
document.querySelectorAll('.copy').forEach(b=>b.onclick=()=>{const done=()=>{const o=b.textContent;b.textContent='COPIED ✓';setTimeout(()=>b.textContent=o,1500)};
if(navigator.clipboard)navigator.clipboard.writeText(CA).then(done,fb);else fb();function fb(){const t=document.createElement('textarea');t.value=CA;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();done()}});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
})();
