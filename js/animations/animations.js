/* =====================================================
   GhumneChale — Animations & Hero FX
   ===================================================== */

// ---------- Hero Particle Canvas ----------
function initHeroParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = canvas.offsetWidth;
  let H = canvas.height = canvas.offsetHeight;

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 2.5 + 0.5,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.5 + 0.1
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245,166,35,${p.alpha})`;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });
    requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener('resize', () => {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  });
}

// ---------- Tiki Walking Animation ----------
function animateTiki() {
  const legs = document.getElementById('tikiLegs');
  if (!legs) return;
  let frame = 0;
  setInterval(() => {
    const angle = Math.sin(frame * 0.2) * 8;
    const lines = legs.querySelectorAll('line');
    if (lines[0]) {
      lines[0].setAttribute('x2', 20 + Math.sin(frame * 0.2) * 4);
      lines[0].setAttribute('y2', 69);
    }
    if (lines[1]) {
      lines[1].setAttribute('x2', 36 - Math.sin(frame * 0.2) * 4);
      lines[1].setAttribute('y2', 69);
    }
    frame++;
  }, 80);
}

// ---------- Scroll-triggered Reveal ----------
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.section-wrapper, .city-overview, .budget-layout').forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}

// ---------- Navbar scroll effect ----------
function initNavScroll() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav-scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ---------- Quote strip auto-scroll ----------
function initQuoteStrip() {
  const track = document.getElementById('quoteTrack');
  if (!track) return;
  let x = 0;
  function scroll() {
    x -= 0.6;
    if (x < -track.scrollWidth / 2) x = 0;
    track.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(scroll);
  }
  requestAnimationFrame(scroll);
}

// ---------- Budget Donut Chart ----------
let budgetChartInstance = null;

function renderBudgetChart(cityKey, days, level) {
  const canvas = document.getElementById('budgetChart');
  const centerEl = document.getElementById('budgetChartCenter');
  const rowsEl = document.getElementById('budgetRows');
  const totalEl = document.getElementById('budgetTotal');
  const tipsEl = document.getElementById('budgetTips');
  if (!canvas) return;

  const budgets = {
    delhi:   { budget:[800,300,500,200,200],   mid:[2500,800,1500,500,400],    luxury:[8000,2500,5000,2000,1500] },
    jaipur:  { budget:[700,250,400,150,200],   mid:[2000,700,1200,400,350],    luxury:[7000,2000,4000,1500,1200] },
    mumbai:  { budget:[1000,400,600,250,300],  mid:[3000,1000,2000,700,600],   luxury:[10000,3000,7000,2500,2000] },
    goa:     { budget:[900,350,500,200,250],   mid:[2800,900,1800,600,500],    luxury:[9000,3000,6000,2000,1500] },
    paris:   { budget:[4000,1500,2000,800,600],mid:[10000,4000,6000,2000,1500],luxury:[30000,12000,20000,6000,4000] },
    tokyo:   { budget:[5000,2000,2500,1000,800],mid:[12000,4000,7000,2500,2000],luxury:[35000,12000,22000,7000,5000] },
    bangkok: { budget:[1500,600,800,300,400],  mid:[4000,1500,2500,800,700],   luxury:[12000,5000,8000,3000,2500] },
    dubai:   { budget:[6000,2000,3000,1200,1000],mid:[15000,5000,8000,3000,2500],luxury:[50000,15000,30000,10000,8000] }
  };

  const labels = ['Accommodation','Food','Sightseeing','Transport','Misc'];
  const colors = ['#F5A623','#00C9A7','#8B5CF6','#EF4444','#3B82F6'];
  const cityBudget = budgets[cityKey] || budgets.delhi;
  const perDay = cityBudget[level] || cityBudget.budget;
  const total = perDay.reduce((a, b) => a + b, 0);
  const totalTrip = total * days;

  const currency = (CITIES[cityKey] || {}).currency || 'INR';
  const sym = currency === 'EUR' ? '€' : currency === 'USD' ? '$' : currency === 'JPY' ? '¥' : currency === 'THB' ? '฿' : currency === 'AED' ? 'AED ' : '₹';

  if (budgetChartInstance) budgetChartInstance.destroy();
  budgetChartInstance = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{ data: perDay, backgroundColor: colors, borderWidth: 0, hoverOffset: 8 }]
    },
    options: {
      cutout: '72%',
      plugins: { legend: { display: false }, tooltip: {
        callbacks: { label: ctx => ` ${ctx.label}: ${sym}${ctx.raw.toLocaleString()}` }
      }},
      animation: { animateScale: true, duration: 800 }
    }
  });

  if (centerEl) centerEl.innerHTML = `<div class="bcc-total">${sym}${totalTrip.toLocaleString()}</div><div class="bcc-label">${days}-day trip</div>`;

  if (rowsEl) {
    rowsEl.innerHTML = labels.map((l, i) => `
      <div class="budget-row">
        <span class="br-dot" style="background:${colors[i]}"></span>
        <span class="br-label">${l}</span>
        <span class="br-amount">${sym}${perDay[i].toLocaleString()}/day</span>
      </div>`).join('');
  }

  if (totalEl) totalEl.innerHTML = `<span>Total (${days} days):</span><strong>${sym}${totalTrip.toLocaleString()}</strong>`;

  const tips = {
    budget: ['Book hostels or budget guesthouses','Eat at local dhabas and street food stalls','Use public transport exclusively','Travel in shoulder season for lower prices'],
    mid:    ['Opt for 3-star hotels or boutique stays','Mix street food with sit-down restaurants','Use a mix of metro and occasional cabs','Look for combo tickets at monuments'],
    luxury: ['Book 5-star hotels or heritage properties','Fine dining and curated food experiences','Private driver or luxury car hire','Skip-the-line access at major attractions']
  };
  if (tipsEl) tipsEl.innerHTML = `<strong>💡 Money Tips (${level.charAt(0).toUpperCase()+level.slice(1)}):</strong><ul>${(tips[level]||tips.budget).map(t=>`<li>${t}</li>`).join('')}</ul>`;
}

// ---------- Animate count-up numbers ----------
function animateCount(el, target, duration = 1200) {
  let start = 0;
  const step = target / (duration / 16);
  const tick = () => {
    start = Math.min(start + step, target);
    el.textContent = Math.round(start).toLocaleString();
    if (start < target) requestAnimationFrame(tick);
  };
  tick();
}

// ---------- Init all animations ----------
function initAnimations() {
  initHeroParticles();
  animateTiki();
  initScrollReveal();
  initNavScroll();
  initQuoteStrip();
}
