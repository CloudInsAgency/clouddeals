/* ─────────────────────────────────────────────
   CloudDeals.com — Global JS
───────────────────────────────────────────── */

// ── Email signup handler ──
document.addEventListener('DOMContentLoaded', () => {

  // All signup forms
  document.querySelectorAll('.signup-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.style.display = 'none';
      const success = form.parentElement.querySelector('.signup-success');
      if (success) success.style.display = 'block';
    });
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('revealed'), i * 80);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => obs.observe(el));
  }

  // Active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') && path.includes(a.getAttribute('href').split('/')[1])) {
      a.classList.add('active');
    }
  });

  // Deal carousel (if present)
  const carousel = document.getElementById('dealCarousel');
  if (carousel) {
    const track  = carousel.querySelector('.carousel-track');
    const cards  = track ? track.querySelectorAll('.deal-card') : [];
    const dotsEl = document.getElementById('carouselDots');
    const barEl  = document.getElementById('carouselBar');
    if (!track || !cards.length) return;

    const TOTAL = cards.length;
    const INT   = 4500;
    let cur = 0, timer = null;

    function visible() {
      if (window.innerWidth <= 640)  return 1;
      if (window.innerWidth <= 1024) return 2;
      return 3;
    }
    function cardW() { return cards[0].offsetWidth + 20; }
    function maxIdx() { return Math.max(0, TOTAL - visible()); }

    function buildDots() {
      if (!dotsEl) return;
      dotsEl.innerHTML = '';
      for (let i = 0; i <= maxIdx(); i++) {
        const d = document.createElement('button');
        d.className = 'c-dot' + (i === cur ? ' on' : '');
        d.setAttribute('aria-label', 'Go to slide ' + (i+1));
        d.onclick = () => goTo(i);
        dotsEl.appendChild(d);
      }
    }
    function updateDots() {
      if (!dotsEl) return;
      dotsEl.querySelectorAll('.c-dot').forEach((d,i) => d.classList.toggle('on', i === cur));
    }
    function goTo(idx) {
      cur = Math.max(0, Math.min(idx, maxIdx()));
      track.style.transform = `translateX(-${cur * cardW()}px)`;
      updateDots();
      resetTimer();
    }
    function move(dir) {
      let n = cur + dir;
      if (n > maxIdx()) n = 0;
      if (n < 0) n = maxIdx();
      goTo(n);
    }
    function resetTimer() {
      if (barEl) { barEl.style.transition = 'none'; barEl.style.width = '0%'; }
      clearTimeout(timer);
      setTimeout(() => {
        if (barEl) { barEl.style.transition = `width ${INT}ms linear`; barEl.style.width = '100%'; }
      }, 30);
      timer = setTimeout(() => move(1), INT);
    }

    window.moveCarousel = move;
    buildDots();
    goTo(0);
    window.addEventListener('resize', () => { buildDots(); goTo(0); });

    carousel.addEventListener('mouseenter', () => { clearTimeout(timer); if (barEl) barEl.style.transition = 'none'; });
    carousel.addEventListener('mouseleave', resetTimer);

    let tx = 0;
    track.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive:true });
    track.addEventListener('touchend', e => {
      const d = tx - e.changedTouches[0].clientX;
      if (Math.abs(d) > 50) move(d > 0 ? 1 : -1);
    });
  }
});
