/* =====================================================
   GhumneChale — Leaflet Roadmap Component
   ===================================================== */

let roadmapMap = null;
let roadmapMarkers = [];
let roadmapPolyline = null;
let roadmapAnimTimer = null;

function initRoadmap(itinerary) {
  const mapEl = document.getElementById('roadmapMap');
  if (!mapEl) return;

  // Destroy existing map
  if (roadmapMap) {
    roadmapMap.remove();
    roadmapMap = null;
  }
  roadmapMarkers = [];
  if (roadmapPolyline) roadmapPolyline = null;
  clearTimeout(roadmapAnimTimer);

  // Build day tabs
  const dayTabs = document.getElementById('roadmapDayTabs');
  if (dayTabs) {
    dayTabs.innerHTML = itinerary.map((day, i) => `
      <button class="rdm-tab ${i===0?'active':''}" data-day="${i}"
        style="${i===0?`background:${day.color};color:#fff;border-color:${day.color}`:''}">
        Day ${day.day}
      </button>`).join('');
  }

  // Init map with first day
  renderRoadmapDay(itinerary, 0);

  // Tab switching
  dayTabs?.addEventListener('click', e => {
    const tab = e.target.closest('.rdm-tab');
    if (!tab) return;
    const dayIdx = parseInt(tab.dataset.day);
    dayTabs.querySelectorAll('.rdm-tab').forEach((t, i) => {
      t.classList.toggle('active', i === dayIdx);
      if (i === dayIdx) {
        t.style.background = itinerary[dayIdx].color;
        t.style.color = '#fff';
        t.style.borderColor = itinerary[dayIdx].color;
      } else {
        t.style.background = '';
        t.style.color = '';
        t.style.borderColor = '';
      }
    });
    renderRoadmapDay(itinerary, dayIdx);
  });

  // Start journey button
  const startBtn = document.getElementById('roadmapStartBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      const activeDay = parseInt(dayTabs?.querySelector('.rdm-tab.active')?.dataset.day || 0);
      animateRoute(itinerary[activeDay]);
    });
  }
}

function renderRoadmapDay(itinerary, dayIdx) {
  const day = itinerary[dayIdx];
  const mapEl = document.getElementById('roadmapMap');
  if (!mapEl) return;

  // Filter stops with valid coordinates
  const validStops = day.stops.filter(s => s.lat !== 0 && s.lon !== 0);
  if (!validStops.length) {
    mapEl.innerHTML = `<div class="map-placeholder"><span>🗺️</span><p>Map coordinates not available for this destination.</p></div>`;
    renderStopList(day);
    return;
  }

  const center = [
    validStops.reduce((s, p) => s + p.lat, 0) / validStops.length,
    validStops.reduce((s, p) => s + p.lon, 0) / validStops.length
  ];

  if (!roadmapMap) {
    roadmapMap = L.map('roadmapMap', { zoomControl: true, scrollWheelZoom: false });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '© OpenStreetMap © CARTO',
      maxZoom: 18
    }).addTo(roadmapMap);
  }

  roadmapMap.setView(center, 13);

  // Clear old markers and polyline
  roadmapMarkers.forEach(m => m.remove());
  roadmapMarkers = [];
  if (roadmapPolyline) { roadmapPolyline.remove(); roadmapPolyline = null; }

  // Add markers
  validStops.forEach((stop, i) => {
    const icon = L.divIcon({
      className: '',
      html: `<div class="map-pin" style="border-color:${day.color};background:${day.color}22">
               <span class="mp-num" style="color:${day.color}">${i+1}</span>
               <span class="mp-emoji">${stop.emoji}</span>
             </div>`,
      iconSize: [44, 44],
      iconAnchor: [22, 22]
    });
    const marker = L.marker([stop.lat, stop.lon], { icon })
      .addTo(roadmapMap)
      .bindPopup(`<b>${stop.emoji} ${stop.place}</b><br><small>${stop.time}</small><br>${stop.desc}`);
    roadmapMarkers.push(marker);
  });

  // Draw initial polyline
  const latlngs = validStops.map(s => [s.lat, s.lon]);
  roadmapPolyline = L.polyline(latlngs, {
    color: day.color,
    weight: 3,
    opacity: 0.5,
    dashArray: '6 6'
  }).addTo(roadmapMap);

  // Fit bounds
  if (latlngs.length > 1) roadmapMap.fitBounds(latlngs, { padding: [30, 30] });

  renderStopList(day);
  document.getElementById('guideTipText').textContent = `${validStops.length} stops for Day ${day.day} — "${day.theme}"`;
}

function renderStopList(day) {
  const stopsEl = document.getElementById('roadmapStops');
  if (!stopsEl) return;
  stopsEl.innerHTML = day.stops.map((s, i) => `
    <div class="rdm-stop">
      <div class="rdm-stop-num" style="background:${day.color}">${i+1}</div>
      <div class="rdm-stop-info">
        <span class="rdm-stop-name">${s.emoji} ${s.place}</span>
        <span class="rdm-stop-time">${s.time}</span>
      </div>
    </div>`).join('');
}

function animateRoute(day) {
  const validStops = day.stops.filter(s => s.lat !== 0 && s.lon !== 0);
  if (!validStops.length || !roadmapMap) return;

  const startBtn = document.getElementById('roadmapStartBtn');
  if (startBtn) { startBtn.disabled = true; startBtn.textContent = '⏳ Animating…'; }

  // Remove existing polyline
  if (roadmapPolyline) { roadmapPolyline.remove(); roadmapPolyline = null; }
  roadmapMarkers.forEach(m => m.setOpacity(0.3));

  let currentIndex = 0;
  const drawnPoints = [];

  function showNextStop() {
    if (currentIndex >= validStops.length) {
      if (startBtn) { startBtn.disabled = false; startBtn.textContent = '▶ Start Journey'; }
      document.getElementById('guideTipText').textContent = '🎉 Journey complete! Check out all the amazing stops!';
      return;
    }

    const stop = validStops[currentIndex];
    roadmapMarkers[currentIndex]?.setOpacity(1);
    roadmapMap.panTo([stop.lat, stop.lon], { animate: true, duration: 0.8 });

    drawnPoints.push([stop.lat, stop.lon]);
    if (roadmapPolyline) roadmapPolyline.remove();
    roadmapPolyline = L.polyline(drawnPoints, {
      color: day.color,
      weight: 4,
      opacity: 0.9
    }).addTo(roadmapMap);

    document.getElementById('guideTipText').textContent = `📍 Stop ${currentIndex + 1}: ${stop.emoji} ${stop.place} — ${stop.time}`;
    currentIndex++;
    roadmapAnimTimer = setTimeout(showNextStop, 1800);
  }

  showNextStop();
}
