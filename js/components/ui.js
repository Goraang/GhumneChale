/* =====================================================
   GhumneChale — UI Components
   ===================================================== */

// ---------- Autocomplete Search ----------
function initSearch() {
  const input = document.getElementById('searchCity');
  const dropdown = document.getElementById('autocompleteDropdown');
  const chips = document.querySelectorAll('.dest-chip');

  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.trim();
    if (q.length < 1) { dropdown.innerHTML = ''; dropdown.classList.remove('open'); return; }
    const results = searchCities(q);
    if (!results.length) { dropdown.innerHTML = ''; dropdown.classList.remove('open'); return; }
    dropdown.innerHTML = results.slice(0, 5).map(c => `
      <div class="ac-item" data-key="${c.key}">
        <span>${c.flag}</span>
        <span>${c.name}</span>
        <span class="ac-country">${c.country}</span>
      </div>`).join('');
    dropdown.classList.add('open');
  });

  dropdown.addEventListener('click', e => {
    const item = e.target.closest('.ac-item');
    if (!item) return;
    input.value = CITIES[item.dataset.key].name;
    input.dataset.key = item.dataset.key;
    dropdown.innerHTML = '';
    dropdown.classList.remove('open');
  });

  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });

  // Preference pills
  ['budgetPills', 'interestPills', 'transportPills'].forEach(id => {
    const container = document.getElementById(id);
    if (!container) return;
    const multi = id !== 'budgetPills';
    container.addEventListener('click', e => {
      const pill = e.target.closest('.pref-pill');
      if (!pill) return;
      if (multi) {
        pill.classList.toggle('active');
      } else {
        container.querySelectorAll('.pref-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      }
    });
  });

  // Popular chips (both rows)
  document.querySelectorAll('.dest-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const key = chip.dataset.city;
      if (CITIES[key]) {
        input.value = CITIES[key].name;
        input.dataset.key = key;
      }
    });
  });

  // Date default to tomorrow
  const dateInput = document.getElementById('searchDate');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
    dateInput.min = tomorrow.toISOString().split('T')[0];
  }

  // Nav CTA
  document.getElementById('navCtaBtn')?.addEventListener('click', () => {
    document.getElementById('searchCity')?.focus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- City Overview Section ----------
function renderCityOverview(city) {
  document.getElementById('covImg').style.backgroundImage = `url('${city.image}')`;
  document.getElementById('covFlag').textContent = city.flag;
  document.getElementById('covCity').textContent = city.name;
  document.getElementById('covTagline').textContent = city.tagline;
  document.getElementById('covHistory').textContent = city.history;
  document.getElementById('cqcText').textContent = city.quote.text;
  document.getElementById('cqcAuthor').textContent = city.quote.author;
  document.getElementById('wcLocation').textContent = city.name;

  const why = document.getElementById('covWhy');
  if (why) why.innerHTML = city.why.map(w => `<li>${w}</li>`).join('');

  const grid = document.getElementById('covCultureGrid');
  if (grid) {
    grid.innerHTML = city.culture.map(c => `
      <div class="cov-culture-item">
        <div class="cci-icon">${c.icon}</div>
        <div class="cci-label">${c.label}</div>
        <div class="cci-desc">${c.desc}</div>
      </div>`).join('');
  }

  const stats = document.getElementById('covStats');
  if (stats) {
    stats.innerHTML = `
      <div class="stat-item"><span class="stat-val">${city.bestMonth}</span><span class="stat-lab">Best Time</span></div>
      <div class="stat-item"><span class="stat-val">${city.language}</span><span class="stat-lab">Language</span></div>
      <div class="stat-item"><span class="stat-val">${city.currency}</span><span class="stat-lab">Currency</span></div>`;
  }

  // Hero background
  document.getElementById('heroBgImg').style.backgroundImage = `url('${city.image}')`;
}

// ---------- Itinerary Tabs ----------
function renderItinerary(itinerary, cityName) {
  const tabsEl = document.getElementById('dayTabs');
  const panelsEl = document.getElementById('itineraryPanels');
  const subEl = document.getElementById('itinerarySub');
  if (!tabsEl || !panelsEl) return;

  if (subEl) subEl.textContent = `${itinerary.length}-day curated itinerary for ${cityName} — handpicked stops, timings, and local tips.`;

  tabsEl.innerHTML = itinerary.map((day, i) => `
    <button class="day-tab ${i === 0 ? 'active' : ''}" data-day="${i}" style="${i===0?`--tab-color:${day.color}`:''}">
      <span class="dt-num">Day ${day.day}</span>
      <span class="dt-theme">${day.theme}</span>
    </button>`).join('');

  panelsEl.innerHTML = itinerary.map((day, i) => `
    <div class="itinerary-panel ${i === 0 ? 'active' : ''}" data-day="${i}">
      <div class="panel-theme-bar" style="background:${day.color}"></div>
      <div class="panel-stops">
        ${day.stops.map((stop, si) => `
          <div class="stop-card" data-stop="${si}" style="animation-delay:${si*0.06}s">
            <div class="stop-time">${stop.time}</div>
            <div class="stop-connector">
              <div class="sc-dot" style="border-color:${day.color}"></div>
              ${si < day.stops.length - 1 ? `<div class="sc-line" style="background:${day.color}33"></div>` : ''}
            </div>
            <div class="stop-info">
              <div class="si-header">
                <span class="si-emoji">${stop.emoji}</span>
                <span class="si-name">${stop.place}</span>
                <span class="si-badge si-badge-${stop.type}">${stop.type}</span>
              </div>
              <p class="si-desc">${stop.desc}</p>
            </div>
          </div>`).join('')}
      </div>
    </div>`).join('');

  tabsEl.addEventListener('click', e => {
    const tab = e.target.closest('.day-tab');
    if (!tab) return;
    const day = tab.dataset.day;
    tabsEl.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
    panelsEl.querySelectorAll('.itinerary-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    tab.style.setProperty('--tab-color', itinerary[day].color);
    panelsEl.querySelector(`[data-day="${day}"]`).classList.add('active');
  });
}

// ---------- Transport Section ----------
function renderTransport(cityKey, cityName) {
  const data = getTransportData(cityKey);
  const subEl = document.getElementById('transportSub');
  const gridEl = document.getElementById('transportGrid');
  const filtersEl = document.getElementById('transportFilters');
  const bannerEl = document.getElementById('bookingBanner');

  if (subEl) subEl.textContent = data.summary;

  const filters = ['All', 'Fast', 'Budget', 'Eco'];
  if (filtersEl) {
    filtersEl.innerHTML = filters.map((f, i) => `
      <button class="transport-filter-btn ${i===0?'active':''}" data-filter="${f.toLowerCase()}">${f}</button>`).join('');
    filtersEl.addEventListener('click', e => {
      const btn = e.target.closest('.transport-filter-btn');
      if (!btn) return;
      filtersEl.querySelectorAll('.transport-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Simple filter: just re-render with a highlight (keep all cards visible)
    });
  }

  if (gridEl) {
    gridEl.innerHTML = data.modes.map(mode => `
      <div class="transport-card">
        <div class="tc-icon">${mode.emoji}</div>
        <div class="tc-info">
          <h3 class="tc-name">${mode.name}</h3>
          <p class="tc-desc">${mode.desc}</p>
          <div class="tc-badges">
            <span class="tc-badge tc-cost">💰 ${mode.cost}</span>
            <span class="tc-badge tc-speed">⚡ ${mode.speed}</span>
            ${mode.eco ? `<span class="tc-badge tc-eco">${mode.eco}</span>` : ''}
          </div>
          <ul class="tc-tips">${mode.tips.map(t=>`<li>${t}</li>`).join('')}</ul>
        </div>
      </div>`).join('');
  }

  if (bannerEl && Object.keys(data.booking).length) {
    const entries = Object.entries(data.booking);
    bannerEl.innerHTML = `
      <div class="bb-title">🎟️ Quick Booking Links for ${cityName}</div>
      <div class="bb-links">
        ${entries.map(([, b]) => `
          <a href="${b.url}" target="_blank" rel="noopener" class="bb-link">
            <span>${b.name}</span>
            <span class="bb-note">${b.note}</span>
          </a>`).join('')}
      </div>`;
  }
}

// ---------- Food Section ----------
function renderFood(cityKey) {
  const city = CITIES[cityKey];
  if (!city) return;
  const grid = document.getElementById('foodGrid');
  const filterBtns = document.querySelectorAll('.food-filter-btn');
  if (!grid) return;

  function renderCards(filter) {
    const items = filter === 'all' ? city.food : city.food.filter(f => f.type === filter);
    grid.innerHTML = items.map(item => `
      <div class="food-card" data-type="${item.type}">
        <div class="fc-emoji">${item.emoji}</div>
        <div class="fc-info">
          <div class="fc-header">
            <span class="fc-name">${item.name}</span>
            <span class="fc-price">${item.price}</span>
          </div>
          <span class="fc-type-badge fc-type-${item.type}">${item.type}</span>
          <p class="fc-desc">${item.desc}</p>
        </div>
      </div>`).join('');
  }

  renderCards('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards(btn.dataset.filter);
    });
  });
}

// ---------- Budget Level Tabs ----------
function initBudgetTabs(cityKey, days) {
  const tabs = document.getElementById('budgetLevelTabs');
  if (!tabs) return;
  tabs.addEventListener('click', e => {
    const btn = e.target.closest('.blt');
    if (!btn) return;
    tabs.querySelectorAll('.blt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderBudgetChart(cityKey, days, btn.dataset.level);
  });
}

// ---------- Tiki Guide Messages ----------
const TIKI_MESSAGES = [
  'Search a destination to start your adventure! 🗺️',
  'Did you know? You can pick multiple interests above! 🎯',
  'Try "Jaipur" or "Tokyo" for a great starter trip! 🌟',
  'Tap any day tab to switch your itinerary view 📅',
  'Press "Start Journey" on the roadmap to animate your route! 🎒',
];

function showTikiMessage(msg, duration = 4000) {
  const bubble = document.getElementById('tfBubble');
  const text = document.getElementById('tfText');
  if (!bubble || !text) return;
  text.textContent = msg;
  bubble.classList.remove('hidden');
  clearTimeout(showTikiMessage._timer);
  showTikiMessage._timer = setTimeout(() => bubble.classList.add('hidden'), duration);
}

function initTikiFloat() {
  const char = document.getElementById('tfChar');
  if (!char) return;
  let msgIdx = 0;
  setInterval(() => {
    if (document.getElementById('cityResult').classList.contains('hidden')) {
      showTikiMessage(TIKI_MESSAGES[msgIdx % TIKI_MESSAGES.length], 4000);
      msgIdx++;
    }
  }, 8000);
  char.addEventListener('click', () => {
    showTikiMessage(TIKI_MESSAGES[msgIdx % TIKI_MESSAGES.length], 4000);
    msgIdx++;
  });
}
