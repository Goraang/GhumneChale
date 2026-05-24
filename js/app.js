/* =====================================================
   GhumneChale — Main Application Controller
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initSearch();
  initTikiFloat();

  const submitBtn = document.getElementById('searchSubmit');
  if (submitBtn) submitBtn.addEventListener('click', handleSearch);

  document.getElementById('searchCity')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') handleSearch();
  });

  showTikiMessage('👋 Hi! I\'m Tiki. Search a destination to start your adventure!', 6000);
});

async function handleSearch() {
  const input = document.getElementById('searchCity');
  const daysInput = document.getElementById('searchDays');
  const loader = document.getElementById('submitLoader');
  const btn = document.getElementById('searchSubmit');

  if (!input) return;

  // Resolve city key
  let cityKey = input.dataset.key;
  if (!cityKey) {
    const results = searchCities(input.value.trim());
    if (results.length) {
      cityKey = results[0].key;
      input.dataset.key = cityKey;
    }
  }

  const city = cityKey ? CITIES[cityKey] : null;
  if (!city) {
    showTikiMessage('🤔 Hmm, I don\'t know that city yet! Try Delhi, Tokyo, or Paris.', 4000);
    input.classList.add('input-error');
    setTimeout(() => input.classList.remove('input-error'), 1500);
    return;
  }

  const days = Math.max(1, Math.min(14, parseInt(daysInput?.value) || 2));

  // Get selected budget level
  const activeBudget = document.querySelector('#budgetPills .pref-pill.active');
  const budgetLevel = activeBudget?.dataset.value || 'budget';

  // Show loader
  if (loader) loader.classList.remove('hidden');
  if (btn) btn.disabled = true;

  showTikiMessage(`✈️ Planning your ${days}-day adventure in ${city.name}…`, 5000);

  // Small delay for UX
  await sleep(600);

  // Show result section
  const resultSection = document.getElementById('cityResult');
  if (resultSection) {
    resultSection.classList.remove('hidden');
    setTimeout(() => resultSection.classList.add('visible'), 50);
  }

  // ---- Render all sections ----
  renderCityOverview(city);

  const itinerary = buildItinerary(cityKey, days);
  renderItinerary(itinerary, city.name);
  initRoadmap(itinerary);

  renderTransport(cityKey, city.name);
  renderFood(cityKey);
  renderBudgetChart(cityKey, days, budgetLevel);
  initBudgetTabs(cityKey, days);

  // Fetch live weather
  fetchWeather(city);

  // Hide loader
  if (loader) loader.classList.add('hidden');
  if (btn) btn.disabled = false;

  // Scroll to results
  setTimeout(() => {
    resultSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 200);

  showTikiMessage(`🎉 Your ${days}-day ${city.name} itinerary is ready! Scroll down to explore.`, 6000);
}

async function fetchWeather(city) {
  try {
    const [current, forecast] = await Promise.all([
      WeatherAPI.fetch(city.lat, city.lon),
      WeatherAPI.forecast(city.lat, city.lon)
    ]);
    WeatherAPI.render(current, forecast, city.name);
  } catch (e) {
    const wc = document.getElementById('wcMain');
    if (wc) wc.innerHTML = `<p class="wc-loading">Weather data unavailable.</p>`;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
