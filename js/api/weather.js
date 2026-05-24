const WeatherAPI = {
  async fetch(lat, lon) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${CONFIG.OPENWEATHER_KEY}&units=metric`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('API error');
      return await res.json();
    } catch(e) {
      return null;
    }
  },
  async forecast(lat, lon) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${CONFIG.OPENWEATHER_KEY}&units=metric&cnt=5`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('API error');
      return await res.json();
    } catch(e) {
      return null;
    }
  },
  icon(code) {
    const map = {
      '01':'☀️','02':'⛅','03':'☁️','04':'☁️',
      '09':'🌧️','10':'🌦️','11':'⛈️','13':'❄️','50':'🌫️'
    };
    return map[code?.slice(0,2)] || '🌡️';
  },
  render(data, forecast, city) {
    const wc = document.getElementById('wcMain');
    const wf = document.getElementById('wcForecast');
    const wl = document.getElementById('wcLocation');
    if (!data) {
      wc.innerHTML = `<p class="wc-loading">Weather unavailable. Check API key.</p>`;
      return;
    }
    wl.textContent = city;
    const ic = this.icon(data.weather[0].icon);
    wc.innerHTML = `
      <div style="font-size:3rem;line-height:1">${ic}</div>
      <div class="wc-temp">${Math.round(data.main.temp)}°C</div>
      <div class="wc-desc">${data.weather[0].description}</div>
      <div class="wc-meta">
        <div class="wc-meta-item">Feels <strong>${Math.round(data.main.feels_like)}°C</strong></div>
        <div class="wc-meta-item">Humidity <strong>${data.main.humidity}%</strong></div>
        <div class="wc-meta-item">Wind <strong>${Math.round(data.wind.speed)} m/s</strong></div>
      </div>`;
    if (forecast?.list) {
      const days = forecast.list.filter((_,i) => i % 2 === 0).slice(0,4);
      const names = ['Today','Tomorrow','Day 3','Day 4'];
      wf.innerHTML = days.map((d,i) => `
        <div class="wc-day">
          <div class="wc-day-name">${names[i]}</div>
          <div class="wc-day-icon">${this.icon(d.weather[0].icon)}</div>
          <div class="wc-day-t">${Math.round(d.main.temp)}°</div>
        </div>`).join('');
    }
  }
};
