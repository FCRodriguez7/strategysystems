const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
if (toggle && nav) {
  const close = () => {nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');};
  toggle.addEventListener('click', () => { const open = !nav.classList.contains('is-open');nav.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation'); });
  document.addEventListener('keydown', event => {if(event.key==='Escape')close();});
  document.addEventListener('click', event => {if (!nav.contains(event.target) && !toggle.contains(event.target)) close();});
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click',close));
}
const year=document.querySelector('#year');if(year)year.textContent=String(new Date().getFullYear());
