
// Load JSON data and expose as globals, with readiness promise
window.dataReady = (async () => {
  try {
    const [charsRes, eventsRes, hcharsRes] = await Promise.all([
      fetch('data/characters.json'),
      fetch('data/events.json'),
      fetch('data/historical-characters.json')
    ]);
    const [chars, events, hchars] = await Promise.all([
      charsRes.json(),
      eventsRes.json(),
      hcharsRes.json()
    ]);
    // expose
    window.characters = chars;
    window.historicalEvents = events;
    window.historicalCharacters = hchars;
  } catch (e) {
    // Fallback: if JSONs are unavailable, keep any existing globals
    console.warn('Data JSON load failed, falling back to existing JS arrays.', e);
  }
})();