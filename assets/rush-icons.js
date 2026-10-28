/* RUSH icon set. 24px grid, 1.8px rounded strokes, drawn with currentColor.
   Usage: RushIcons.icon('bag', 20) -> <svg> string. */
(function (global) {
  'use strict';
  const G = {
    home: '<path d="M3.5 10.2 12 3.5l8.5 6.7"/><path d="M5.5 9.3V20h13V9.3"/><path d="M10 20v-5h4v5"/>',
    bag: '<path d="M5.2 8.2h13.6l-1.1 11.3a1.6 1.6 0 0 1-1.6 1.5H7.9a1.6 1.6 0 0 1-1.6-1.5z"/><path d="M9 8.2V6.7a3 3 0 0 1 6 0v1.5"/>',
    food: '<path d="M6 3v5.2a2.2 2.2 0 0 0 4.4 0V3"/><path d="M8.2 10.4V21"/><path d="M17.5 21V3c-2.1 1.4-3 3.9-3 7.2 0 1.3 1 2.1 3 2.1"/>',
    pill: '<g transform="rotate(-45 12 12)"><rect x="2.5" y="8.5" width="19" height="7" rx="3.5"/><path d="M12 8.5v7"/></g>',
    doctor: '<path d="M6 3H5v5.2a4 4 0 0 0 8 0V3h-1"/><path d="M9 12.4v.9a4 4 0 0 0 8 0v-2.2"/><circle cx="17" cy="9.4" r="1.8"/>',
    clinic: '<rect x="4.5" y="3.5" width="15" height="17" rx="2"/><path d="M12 7.5v6M9 10.5h6"/><path d="M10 20.5v-3h4v3"/>',
    lab: '<path d="M9.5 3h5M10.5 3v5.5L5.4 17.6A1.6 1.6 0 0 0 6.8 20h10.4a1.6 1.6 0 0 0 1.4-2.4L13.5 8.5V3"/><path d="M7.6 15h8.8"/>',
    truck: '<path d="M2.5 6.5h11.5v10H2.5z"/><path d="M14 10h4.2l3.3 3.4v2.6H14"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    bike: '<circle cx="5.5" cy="16.5" r="3"/><circle cx="18.5" cy="16.5" r="3"/><path d="M5.5 16.5 9.5 10h5.5l3.5 6.5"/><path d="M9.5 10 8.2 6.5H5.8"/><path d="M14.5 10l-1.2-3.3h2.7"/>',
    car: '<path d="M3.5 15.5v-3.1l1.9-4.9h13.2l1.9 4.9v3.1z"/><path d="M3.5 12.4h17"/><circle cx="7.5" cy="16.2" r="1.6"/><circle cx="16.5" cy="16.2" r="1.6"/>',
    wallet: '<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10h18"/><path d="M16.5 14.5h2"/>',
    qr: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.2"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.2"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.2"/><path d="M13.5 13.5h2.5v2.5h-2.5zM18.5 13.5h2v2M13.5 18.5h2M17 17h3.5v3.5"/>',
    scan: '<path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16"/><path d="M7.5 12h9"/>',
    send: '<path d="M5 19 19 5"/><path d="M9 5h10v10"/>',
    receive: '<path d="M19 5 5 19"/><path d="M15 19H5V9"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    check: '<path d="m5 12.6 4.4 4.4L19 7.6"/>',
    'check-circle': '<circle cx="12" cy="12" r="9"/><path d="m8 12.3 2.7 2.7L16 9.6"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    'x-circle': '<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/>',
    ban: '<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',
    'chevron-right': '<path d="m9.5 6 6 6-6 6"/>',
    'chevron-left': '<path d="m14.5 6-6 6 6 6"/>',
    'chevron-down': '<path d="m6 9.5 6 6 6-6"/>',
    'arrow-left': '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
    bell: '<path d="M6 9.5a6 6 0 0 1 12 0c0 5.6 2.2 7.2 2.2 7.2H3.8S6 15.1 6 9.5z"/><path d="M10 19.8a2 2 0 0 0 4 0"/>',
    user: '<circle cx="12" cy="8.5" r="4"/><path d="M4.5 20.5c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5"/>',
    users: '<circle cx="9" cy="9" r="3.5"/><path d="M2.5 20c.8-3.3 3.3-5 6.5-5s5.7 1.7 6.5 5"/><path d="M16 5.6a3.5 3.5 0 0 1 0 6.8M18.2 15.2c1.6.7 2.6 2.4 3.1 4.8"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.4 5.4l2.1 2.1M16.5 16.5l2.1 2.1M5.4 18.6l2.1-2.1M16.5 7.5l2.1-2.1"/>',
    logout: '<path d="M9.5 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3.5"/><path d="M15.5 16.5 20 12l-4.5-4.5M20 12H9.5"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.2 7.5 9.5 4.4-1.3 7.5-4.9 7.5-9.5V6z"/><path d="m9 12.2 2.2 2.2 3.8-3.9"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12.2 20 3.3M16.5 6.8l2.5 2.5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>',
    mail: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="m4 7.5 8 6 8-6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    star: '<path d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M3 4h2.5l2.2 10.5a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L20.5 8H6.5"/>',
    receipt: '<path d="M5.5 3.5h13v17l-2.2-1.4-2.2 1.4-2.2-1.4-2.2 1.4-2.2-1.4-2.2 1.4z"/><path d="M9 8.5h6M9 12h6M9 15.5h4"/>',
    box: '<path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z"/><path d="m3.5 7.5 8.5 4.5 8.5-4.5M12 12v9"/>',
    chart: '<path d="M4 20V4M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
    tag: '<path d="M3.5 12.5V4.5a1 1 0 0 1 1-1h8l8.5 8.5a1.5 1.5 0 0 1 0 2.1l-6.4 6.4a1.5 1.5 0 0 1-2.1 0z"/><circle cx="8" cy="8" r="1.4"/>',
    percent: '<path d="M5 19 19 5"/><circle cx="7" cy="7" r="2.3"/><circle cx="17" cy="17" r="2.3"/>',
    chat: '<path d="M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-8L7 20.5V16.5H5A1.5 1.5 0 0 1 3.5 15V7A1.5 1.5 0 0 1 5 5.5z"/>',
    file: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 15.5h6"/>',
    upload: '<path d="M12 15V4M7.5 8.5 12 4l4.5 4.5M4 15v4.5h16V15"/>',
    download: '<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M4 15v4.5h16V15"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
    trash: '<path d="M4.5 7h15M9.5 7V4.5h5V7M6.5 7l1 13h9l1-13"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    image: '<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.8"/><path d="m4 17.5 5-4.5 4 3.5 2.5-2 4.5 4"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.8v.1"/>',
    alert: '<path d="M12 3.5 2.5 20h19z"/><path d="M12 10v4.5M12 17.3v.1"/>',
    navigate: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H14a3.5 3.5 0 0 0 0-7h-4a3.5 3.5 0 0 1 0-7h5.5"/>',
    power: '<path d="M12 3v8.5"/><path d="M6.8 6.8a7.5 7.5 0 1 0 10.4 0"/>',
    store: '<path d="M4 9.5 5.5 4h13L20 9.5"/><path d="M4 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0"/><path d="M5.5 12v8h13v-8"/>',
    id: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2.2"/><path d="M5.8 16c.6-1.5 1.8-2.3 3.2-2.3s2.6.8 3.2 2.3M14.5 10h3.5M14.5 13.5h3"/>',
    activity: '<path d="M3 12h4l2.5-6 5 12 2.5-6H21"/>',
    backspace: '<path d="M9.5 5.5h10a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5h-10L3.5 12z"/><path d="m13 9.5 4 5M17 9.5l-4 5"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    vending: '<rect x="5" y="3" width="14" height="18" rx="2"/><rect x="8" y="6" width="8" height="6" rx="1"/><path d="M8 16h2M14 16h2M8 19h8"/>',
    heart: '<path d="M12 20s-7.5-4.4-7.5-10A4.2 4.2 0 0 1 12 7.6 4.2 4.2 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/>',
    video: '<rect x="3" y="6.5" width="12" height="11" rx="2"/><path d="m15 10.5 6-3.5v10l-6-3.5"/>',
    bank: '<path d="M3 9.5 12 4l9 5.5M4.5 10v8.5M9.5 10v8.5M14.5 10v8.5M19.5 10v8.5M3 20.5h18"/>',
    grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
    layers: '<path d="M12 3 3 7.5 12 12l9-4.5z"/><path d="m3 12 9 4.5 9-4.5M3 16.5 12 21l9-4.5"/>',
    map: '<path d="M9 4 3 6.5v13.5L9 17.5l6 2.5 6-2.5V4l-6 2.5z"/><path d="M9 4v13.5M15 6.5V20"/>',
    list: '<path d="M9 6.5h11M9 12h11M9 17.5h11"/><circle cx="4.5" cy="6.5" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="17.5" r="1"/>',
    building: '<rect x="5" y="3.5" width="14" height="17" rx="1.5"/><path d="M9 7.5h1.5M13.5 7.5H15M9 11h1.5M13.5 11H15M10 20.5v-3h4v3"/>',
    filter: '<path d="M4 5h16l-6 7.5V19l-4-2v-4.5z"/>',
    broadcast: '<path d="M4 10v4h3l8 4.5V5.5L7 10z"/><path d="M18 9a4 4 0 0 1 0 6"/>',
  };

  function body(name) {
    return G[name] || G.info;
  }

  function icon(name, size = 20, cls = '') {
    return `<svg class="ic${cls ? ' ' + cls : ''}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body(name)}</svg>`;
  }

  // ───────── 3D clay tiles ─────────
  // Soft-plastic illustrations in the style of the best super-apps, drawn as inline SVG: tonal gradients,
  // a key light from the top left, a specular highlight and a radial contact shadow. No images, no filters.
  const SERVICE_COLORS = {
    grocery: '#16a34a', food: '#f97316', pharmacy: '#0d9488', doctor: '#2563eb', clinic: '#7c3aed', lab: '#0891b2',
    cargo: '#d97706', truck: '#d97706', bike: '#ea580c', pay: '#c8a04a', send: '#1d4f91', receive: '#12a150', bills: '#6366f1',
    load: '#0ea5e9', qr: '#17212f', promo: '#e11d48', ads: '#db2777', vending: '#64748b', box: '#b45309', star: '#f59e0b',
    shield: '#1d4f91', bell: '#f59e0b', success: '#12a150', error: '#d92d20', empty: '#94a3b8', offline: '#64748b', pin: '#dc2626', clock: '#1d4f91',
    taxi: '#0f766e', car: '#2563eb', tools: '#b45309', plug: '#f59e0b', shirt: '#db2777', appliance: '#475569',
  };
  const hex2rgb = (h) => { const s = h.replace('#', ''); const n = parseInt(s.length === 3 ? s.replace(/./g, '$&$&') : s, 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; };
  const mix = (a, b, t) => '#' + hex2rgb(a).map((c, i) => Math.round(c + (hex2rgb(b)[i] - c) * t).toString(16).padStart(2, '0')).join('');
  const tone = (base) => ({ base, light: mix(base, '#ffffff', .38), lighter: mix(base, '#ffffff', .62), dark: mix(base, '#000000', .22), deep: mix(base, '#000000', .42) });
  let uid = 0;

  // Each tile is a function(t, id) -> svg body in a 64x64 box; `g(id)` names its gradients.
  const T = {
    grocery: (t, id) => `<path d="M14 26h36l-4.5 25a4 4 0 0 1-4 3.4H22.5a4 4 0 0 1-4-3.4z" fill="url(#${id}a)"/><path d="M14 26h36l-1 5.5H15z" fill="${t.deep}" opacity=".35"/>
      <path d="M22 26l5-13M42 26l-5-13" stroke="${t.deep}" stroke-width="3.2" stroke-linecap="round"/><circle cx="24" cy="20" r="6.5" fill="#fb923c"/><circle cx="22.5" cy="18.5" r="2.2" fill="#fff" opacity=".55"/>
      <path d="M33 13c6 0 9 5 9 9-5 0-9-3-9-9z" fill="#4ade80"/><path d="M39 10c3 1 5 4 5 7" stroke="#16a34a" stroke-width="2" stroke-linecap="round"/>
      <path d="M24 36v12M32 36v12M40 36v12" stroke="${t.deep}" stroke-width="2.4" stroke-linecap="round" opacity=".45"/><path d="M19 29h26" stroke="#fff" stroke-width="2" opacity=".5" stroke-linecap="round"/>`,
    food: (t, id) => `<path d="M12 28c0-9 9-15 20-15s20 6 20 15z" fill="url(#${id}a)"/><ellipse cx="22" cy="19" rx="5" ry="2.4" fill="#fff" opacity=".45"/>
      <path d="M10 30h44c1.8 0 2.8 2 1.8 3.4L52 38H12l-3.8-4.6C7.2 32 8.2 30 10 30z" fill="#4ade80"/><path d="M14 38h36v4H14z" fill="#92400e"/>
      <path d="M12 42h40c1.2 0 2 .8 2 2v1c0 4.4-3.6 8-8 8H18c-4.4 0-8-3.6-8-8v-1c0-1.2.8-2 2-2z" fill="url(#${id}b)"/><circle cx="26" cy="20" r="1.4" fill="#fff"/><circle cx="36" cy="22" r="1.4" fill="#fff"/><circle cx="31" cy="17" r="1.2" fill="#fff"/>`,
    pharmacy: (t, id) => `<g transform="rotate(-38 32 32)"><rect x="10" y="22" width="44" height="20" rx="10" fill="#f8fafc"/><path d="M32 22h12a10 10 0 0 1 0 20H32z" fill="url(#${id}a)"/><path d="M12 29c1-3.5 4.5-5 8-5h12v4H19c-3 0-5.5 1.5-7 4z" fill="#fff" opacity=".9"/>
      <path d="M34 25h9a7 7 0 0 1 7 6" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".55"/></g>
      <circle cx="48" cy="18" r="9" fill="url(#${id}b)"/><path d="M48 13.5v9M43.5 18h9" stroke="#fff" stroke-width="2.8" stroke-linecap="round"/>`,
    doctor: (t, id) => `<path d="M20 12v14a12 12 0 0 0 24 0V12" stroke="url(#${id}a)" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M32 38v4a9 9 0 0 0 18 0v-6" stroke="${t.dark}" stroke-width="5" stroke-linecap="round" fill="none"/><rect x="16" y="8" width="8" height="8" rx="3" fill="${t.deep}"/><rect x="40" y="8" width="8" height="8" rx="3" fill="${t.deep}"/>
      <circle cx="50" cy="31" r="8" fill="url(#${id}b)"/><circle cx="50" cy="31" r="4" fill="#fff"/><circle cx="48.5" cy="29.5" r="1.3" fill="${t.light}"/><path d="M23 14v12a9 9 0 0 0 4 7.5" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".5"/>`,
    clinic: (t, id) => `<path d="M12 26 32 12l20 14v26a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3z" fill="url(#${id}a)"/><path d="M12 26 32 12l20 14-3 2L32 15.5 15 28z" fill="#fff" opacity=".45"/>
      <rect x="26" y="40" width="12" height="15" rx="2" fill="${t.deep}"/><rect x="28" y="42" width="8" height="9" rx="1" fill="#fff" opacity=".2"/>
      <circle cx="32" cy="29" r="7.5" fill="#fff"/><path d="M32 25v8M28 29h8" stroke="#ef4444" stroke-width="2.8" stroke-linecap="round"/>
      <rect x="16" y="36" width="6" height="6" rx="1.5" fill="#fff" opacity=".7"/><rect x="42" y="36" width="6" height="6" rx="1.5" fill="#fff" opacity=".7"/>`,
    lab: (t, id) => `<path d="M26 10h12M28 10v14L43.5 50a3 3 0 0 1-2.6 4.5H23.1a3 3 0 0 1-2.6-4.5L36 24V10" fill="#f1f5f9"/><path d="M28 10v14L43.5 50a3 3 0 0 1-2.6 4.5H23.1a3 3 0 0 1-2.6-4.5L36 24V10" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>
      <path d="M23.5 38h17l3 12.5c.4 1.6-.8 3-2.4 3H23a2.5 2.5 0 0 1-2.4-3z" fill="url(#${id}a)"/><circle cx="29" cy="46" r="2" fill="#fff" opacity=".8"/><circle cx="35" cy="49" r="1.4" fill="#fff" opacity=".6"/><circle cx="33" cy="42" r="1.1" fill="#fff" opacity=".7"/>
      <rect x="24" y="7" width="16" height="4" rx="2" fill="${t.deep}"/><path d="M30 14v10" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".9"/>`,
    cargo: (t, id) => `<path d="M32 10 54 20v24L32 54 10 44V20z" fill="url(#${id}a)"/><path d="M10 20 32 30l22-10L32 10z" fill="${t.lighter}"/><path d="M32 30v24L10 44V20z" fill="${t.dark}"/>
      <path d="M21 15 43 25v9l-5-2.3v-7.2L18 17.8z" fill="#fde68a"/><path d="M27 13l22 10" stroke="#fff" stroke-width="1.5" opacity=".5"/><path d="M32 30v24" stroke="${t.deep}" stroke-width="1.2" opacity=".5"/>
      <path d="M14 34l6 2.7v3L14 37z" fill="#fff" opacity=".55"/>`,
    truck: (t, id) => `<path d="M8 20a3 3 0 0 1 3-3h26v24H8z" fill="url(#${id}a)"/><path d="M37 24h10l9 9v8H37z" fill="${t.dark}"/><path d="M40 27h6.5l5.5 5.5H40z" fill="#bfdbfe"/>
      <path d="M8 41h48v3a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z" fill="${t.deep}"/><circle cx="19" cy="46" r="6" fill="#1f2937"/><circle cx="19" cy="46" r="2.5" fill="#cbd5e1"/><circle cx="46" cy="46" r="6" fill="#1f2937"/><circle cx="46" cy="46" r="2.5" fill="#cbd5e1"/>
      <path d="M12 21h18" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".55"/><path d="M12 27h10" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".35"/>`,
    bike: (t, id) => `<circle cx="16" cy="46" r="8" fill="#1f2937"/><circle cx="16" cy="46" r="3" fill="#cbd5e1"/><circle cx="48" cy="46" r="8" fill="#1f2937"/><circle cx="48" cy="46" r="3" fill="#cbd5e1"/>
      <path d="M16 46 26 30h14l8 16" stroke="url(#${id}a)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M24 31c0-5 4-7 9-7h7" stroke="${t.dark}" stroke-width="4" stroke-linecap="round" fill="none"/>
      <rect x="10" y="14" width="20" height="16" rx="4" fill="url(#${id}b)"/><path d="M13 18h14" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".6"/><circle cx="42" cy="22" r="3.5" fill="#fde68a"/>`,
    pay: (t, id) => `<g transform="rotate(-8 32 32)"><rect x="8" y="18" width="48" height="30" rx="6" fill="url(#${id}a)"/><rect x="8" y="24" width="48" height="7" fill="${t.deep}" opacity=".55"/><rect x="14" y="36" width="12" height="8" rx="2" fill="#fde68a"/><path d="M14 40h12M20 36v8" stroke="${t.deep}" stroke-width="1" opacity=".5"/>
      <path d="M12 21h20" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".55"/><circle cx="46" cy="40" r="4" fill="#fff" opacity=".85"/><circle cx="41" cy="40" r="4" fill="#fff" opacity=".55"/></g>
      <circle cx="50" cy="16" r="8" fill="url(#${id}b)"/><text x="50" y="19.5" text-anchor="middle" font-size="10" font-weight="800" fill="#fff" font-family="Inter,system-ui,sans-serif">₱</text>`,
    send: (t, id) => `<path d="M10 30 54 12 42 54l-12-15z" fill="url(#${id}a)"/><path d="M54 12 30 39l-6 12 4-13z" fill="${t.dark}"/><path d="M30 39 54 12" stroke="#fff" stroke-width="1.6" opacity=".6"/><path d="M14 30l36-15" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".45"/>
      <circle cx="16" cy="48" r="2" fill="${t.light}"/><circle cx="22" cy="54" r="1.4" fill="${t.light}"/>`,
    receive: (t, id) => `<path d="M10 36h44v10a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8z" fill="url(#${id}a)"/><path d="M10 36h44v5H10z" fill="${t.deep}" opacity=".4"/>
      <circle cx="32" cy="24" r="12" fill="url(#${id}b)"/><circle cx="32" cy="24" r="8" fill="#fde68a"/><path d="M32 19v10M28.5 25.5 32 29l3.5-3.5" stroke="#92400e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M14 42h8" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".5"/>`,
    bills: (t, id) => `<path d="M16 8h32v46l-4-3-4 3-4-3-4 3-4-3-4 3-4-3-4 3z" fill="url(#${id}a)"/><path d="M22 18h20M22 25h20M22 32h12" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".85"/>
      <circle cx="42" cy="42" r="9" fill="#12a150"/><path d="m37.5 42 3 3 6-6" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M19 11h10" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".5"/>`,
    load: (t, id) => `<rect x="18" y="8" width="28" height="48" rx="6" fill="#1f2937"/><rect x="21" y="13" width="22" height="34" rx="3" fill="url(#${id}a)"/><circle cx="32" cy="52" r="2" fill="#94a3b8"/>
      <path d="M26 36v-6M31 36V24M36 36V18M41 36v-9" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M23 15h8" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".5"/>
      <circle cx="50" cy="14" r="7" fill="#fde68a"/><path d="M50 10.5v7M46.5 14h7" stroke="#92400e" stroke-width="2" stroke-linecap="round"/>`,
    qr: (t, id) => `<rect x="10" y="10" width="44" height="44" rx="8" fill="#fff"/><rect x="10" y="10" width="44" height="44" rx="8" fill="none" stroke="${t.light}" stroke-width="1.5"/>
      <rect x="16" y="16" width="12" height="12" rx="2.5" fill="${t.base}"/><rect x="19.5" y="19.5" width="5" height="5" rx="1" fill="#fff"/><rect x="36" y="16" width="12" height="12" rx="2.5" fill="${t.base}"/><rect x="39.5" y="19.5" width="5" height="5" rx="1" fill="#fff"/>
      <rect x="16" y="36" width="12" height="12" rx="2.5" fill="${t.base}"/><rect x="19.5" y="39.5" width="5" height="5" rx="1" fill="#fff"/><path d="M36 36h4v4h-4zM44 36h4v4h-4zM40 40h4v4h-4zM36 44h4v4h-4zM44 44h4v4h-4z" fill="${t.base}"/>
      <rect x="8" y="30" width="48" height="4" rx="2" fill="url(#${id}a)"/>`,
    promo: (t, id) => `<path d="M12 14a3 3 0 0 1 3-3h17l20 20a3 3 0 0 1 0 4.2L37.2 50a3 3 0 0 1-4.2 0L13 30z" fill="url(#${id}a)"/><circle cx="22" cy="21" r="4" fill="#fff"/><circle cx="22" cy="21" r="1.6" fill="${t.deep}"/>
      <path d="m27 40 12-12" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="28.5" cy="29.5" r="2.6" fill="#fff"/><circle cx="37.5" cy="38.5" r="2.6" fill="#fff"/><path d="M15 13h12" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".5"/>`,
    ads: (t, id) => `<path d="M14 26h8l22-12v36L22 38h-8a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4z" fill="url(#${id}a)"/><path d="M22 26h-8v4h8z" fill="#fff" opacity=".35"/><path d="M44 14v36c4 0 7-8 7-18s-3-18-7-18z" fill="${t.dark}"/>
      <path d="M20 38h6l3 12a2 2 0 0 1-2 2.5h-3a2 2 0 0 1-2-1.5z" fill="${t.deep}"/><path d="M52 24l6-3M52 32h7M52 40l6 3" stroke="#fbbf24" stroke-width="2.6" stroke-linecap="round"/>`,
    vending: (t, id) => `<rect x="14" y="8" width="36" height="48" rx="5" fill="url(#${id}a)"/><rect x="18" y="13" width="18" height="30" rx="2" fill="#dbeafe"/><rect x="39" y="14" width="8" height="12" rx="2" fill="${t.deep}" opacity=".5"/><rect x="40" y="30" width="6" height="3" rx="1" fill="#fde68a"/>
      <rect x="20" y="16" width="5" height="7" rx="1" fill="#f97316"/><rect x="27" y="16" width="5" height="7" rx="1" fill="#16a34a"/><rect x="20" y="26" width="5" height="7" rx="1" fill="#2563eb"/><rect x="27" y="26" width="5" height="7" rx="1" fill="#e11d48"/>
      <rect x="18" y="46" width="28" height="6" rx="2" fill="${t.deep}"/>`,
    box: (t, id) => T.cargo(t, id),
    star: (t, id) => `<path d="m32 8 7.3 15 16.5 2.3-12 11.6 2.9 16.4L32 45.5l-14.7 7.8 2.9-16.4-12-11.6L24.7 23z" fill="url(#${id}a)"/><path d="m32 8 7.3 15 16.5 2.3-6.8 6.6L32 13z" fill="#fff" opacity=".3"/><path d="M24 24 32 13" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".6"/>`,
    shield: (t, id) => `<path d="M32 6 10 14v16c0 13 9.4 23 22 27 12.6-4 22-14 22-27V14z" fill="url(#${id}a)"/><path d="M32 6 10 14v16c0 4 .9 7.8 2.5 11.2L32 9.5z" fill="#fff" opacity=".2"/>
      <path d="m22 32 7 7 13-14" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    bell: (t, id) => `<path d="M32 8a4 4 0 0 1 4 4v1.3A16 16 0 0 1 48 29v10l5 6H11l5-6V29a16 16 0 0 1 12-15.7V12a4 4 0 0 1 4-4z" fill="url(#${id}a)"/><path d="M25 50a7 7 0 0 0 14 0z" fill="${t.deep}"/><path d="M22 28a10 10 0 0 1 7-9.5" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".6"/><circle cx="46" cy="16" r="7" fill="#ef4444"/>`,
    success: (t, id) => `<circle cx="32" cy="32" r="24" fill="url(#${id}a)"/><circle cx="24" cy="22" r="8" fill="#fff" opacity=".25"/><path d="m20 33 8 8 16-17" stroke="#fff" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    error: (t, id) => `<circle cx="32" cy="32" r="24" fill="url(#${id}a)"/><circle cx="24" cy="22" r="8" fill="#fff" opacity=".25"/><path d="m23 23 18 18M41 23 23 41" stroke="#fff" stroke-width="5.5" stroke-linecap="round"/>`,
    empty: (t, id) => `<path d="M10 26h44v22a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z" fill="url(#${id}a)"/><path d="M10 26 18 14h28l8 12z" fill="${t.lighter}"/><path d="M10 26h44l-5 6H15z" fill="${t.deep}" opacity=".3"/><path d="M26 40h12" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/><path d="M22 14 10 26M42 14l12 12" stroke="#fff" stroke-width="1.5" opacity=".4"/>`,
    offline: (t, id) => `<path d="M20 50a11 11 0 0 1-1.5-21.9A15 15 0 0 1 47 26a10 10 0 0 1 1 20z" fill="url(#${id}a)"/><path d="M19 32a8 8 0 0 1 7-5" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".55"/><path d="m14 54 36-36" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/><path d="m14 54 36-36" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>`,
    pin: (t, id) => `<path d="M32 58S12 38.8 12 26a20 20 0 0 1 40 0c0 12.8-20 32-20 32z" fill="url(#${id}a)"/><circle cx="32" cy="26" r="8" fill="#fff"/><circle cx="29.5" cy="23.5" r="2.4" fill="${t.light}"/><path d="M18 22a14 14 0 0 1 8-10" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".5"/>`,
    clock: (t, id) => `<circle cx="32" cy="32" r="24" fill="url(#${id}a)"/><circle cx="32" cy="32" r="18" fill="#fff"/><path d="M32 20v12l8 5" stroke="${t.deep}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="32" cy="32" r="2.2" fill="${t.base}"/><circle cx="24" cy="22" r="6" fill="#fff" opacity=".35"/>`,
    taxi: (t, id) => `<path d="M10 36c0-3 1.4-5 4-6l5-10a4 4 0 0 1 3.6-2.2h18.8A4 4 0 0 1 45 20l5 10c2.6 1 4 3 4 6v8a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3z" fill="url(#${id}a)"/><path d="M19 29l3.5-7.5h19L45 29z" fill="#bfdbfe"/><path d="M19 29l3.5-7.5h9V29z" fill="#fff" opacity=".6"/>
      <rect x="24" y="12" width="16" height="6" rx="2" fill="#fde047"/><path d="M26 12h12" stroke="#1f2937" stroke-width="1.2" opacity=".3"/><circle cx="19" cy="48" r="6" fill="#1f2937"/><circle cx="19" cy="48" r="2.5" fill="#cbd5e1"/><circle cx="45" cy="48" r="6" fill="#1f2937"/><circle cx="45" cy="48" r="2.5" fill="#cbd5e1"/>
      <rect x="12" y="35" width="7" height="4" rx="2" fill="#fef3c7"/><rect x="45" y="35" width="7" height="4" rx="2" fill="#fca5a5"/><path d="M26 38h12" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".45"/>`,
    car: (t, id) => T.taxi({ ...t }, id).replace('<rect x="24" y="12" width="16" height="6" rx="2" fill="#fde047"/><path d="M26 12h12" stroke="#1f2937" stroke-width="1.2" opacity=".3"/>', ''),
    tools: (t, id) => `<g transform="rotate(-40 32 32)"><rect x="28" y="18" width="8" height="34" rx="3" fill="#92400e"/><path d="M20 10h24l-4 10H24z" fill="url(#${id}a)"/><rect x="22" y="8" width="20" height="5" rx="2" fill="${t.deep}"/><path d="M24 11h6" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".5"/></g>
      <g transform="rotate(40 32 32)"><rect x="29" y="14" width="6" height="36" rx="3" fill="#64748b"/><path d="M26 10h12v6a6 6 0 0 1-12 0z" fill="#94a3b8"/><path d="M28 12h3" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".7"/></g>
      <circle cx="32" cy="32" r="5" fill="#fde68a"/><circle cx="32" cy="32" r="2" fill="${t.deep}"/>`,
    plug: (t, id) => `<rect x="14" y="10" width="36" height="44" rx="8" fill="url(#${id}a)"/><rect x="20" y="16" width="24" height="24" rx="12" fill="#f8fafc"/><rect x="26" y="23" width="4" height="9" rx="1.5" fill="${t.deep}"/><rect x="34" y="23" width="4" height="9" rx="1.5" fill="${t.deep}"/>
      <path d="M22 46h20" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".5"/><path d="M46 20l6-4M46 28h7M46 36l6 4" stroke="#fbbf24" stroke-width="2.4" stroke-linecap="round"/><path d="M17 13h10" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".5"/>`,
    shirt: (t, id) => `<path d="M22 10h20l10 8-5 8-5-3v29H22V23l-5 3-5-8z" fill="url(#${id}a)"/><path d="M22 10c2 5 6 7 10 7s8-2 10-7l-4-1a7 7 0 0 1-12 0z" fill="${t.deep}"/><path d="M26 20v28" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".35"/>
      <path d="M12 18l10-8" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".5"/><circle cx="44" cy="40" r="6" fill="#fde68a"/><path d="M42 40l1.5 1.5L47 38" stroke="#92400e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    appliance: (t, id) => `<rect x="14" y="8" width="36" height="48" rx="6" fill="url(#${id}a)"/><rect x="18" y="12" width="28" height="18" rx="3" fill="#dbeafe"/><rect x="18" y="33" width="28" height="19" rx="3" fill="${t.deep}" opacity=".35"/><rect x="21" y="36" width="22" height="3" rx="1.5" fill="#fff" opacity=".6"/>
      <circle cx="42" cy="47" r="3" fill="#fde68a"/><path d="M20 14h6" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/><circle cx="24" cy="24" r="2" fill="#2563eb"/><circle cx="31" cy="24" r="2" fill="#2563eb"/>`,
  };
  const ALIAS = { grocer: 'grocery', bag: 'grocery', store: 'grocery', cart: 'grocery', restaurant: 'food', pill: 'pharmacy', medicine: 'pharmacy', health: 'doctor', facility: 'clinic', hospital: 'clinic', building: 'clinic', laboratory: 'lab', delivery: 'cargo', parcel: 'box', motorcycle: 'bike', rider: 'bike', wallet: 'pay', card: 'pay', money: 'pay', remit: 'send', bill: 'bills', receipt: 'bills', file: 'bills', topup: 'load', phone: 'load', voucher: 'promo', tag: 'promo', percent: 'promo', megaphone: 'ads', broadcast: 'ads', check: 'success', ok: 'success', 'check-circle': 'success', warn: 'error', x: 'error', alert: 'error', ban: 'error', location: 'pin', map: 'pin', navigate: 'pin', time: 'clock', activity: 'clock', calendar: 'clock', bank: 'receive', search: 'empty', inbox: 'empty', list: 'empty', users: 'doctor', user: 'doctor', lock: 'shield', key: 'shield', id: 'shield', chat: 'bell', mail: 'bell', image: 'empty', camera: 'empty',
    transpo: 'taxi', ride: 'taxi', tricycle: 'bike', angkas: 'bike', sedan: 'car', suv: 'car', mpv: 'car', essentials: 'tools', hardware: 'tools', hardware_construction: 'tools', electrical: 'plug', electrical_home_depot: 'plug', apparel: 'shirt', clothing: 'shirt', appliances: 'appliance', appliances_electronics: 'appliance', electronics: 'appliance', automotive: 'car', motorcycle_parts: 'bike', others: 'box' };

  // tile(name, size, color?) -> <svg> string with a soft contact shadow. Colour defaults to the service palette.
  function tile(name, size = 56, color) {
    const key = T[name] ? name : (ALIAS[name] || 'box');
    const t = tone(color || SERVICE_COLORS[key] || '#1d4f91');
    const id = 'r3d' + (++uid).toString(36);
    return `<svg class="tile3d" width="${size}" height="${size}" viewBox="0 0 64 64" aria-hidden="true" focusable="false"><defs>
      <linearGradient id="${id}a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t.light}"/><stop offset=".55" stop-color="${t.base}"/><stop offset="1" stop-color="${t.dark}"/></linearGradient>
      <linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t.lighter}"/><stop offset="1" stop-color="${t.base}"/></linearGradient>
      <radialGradient id="${id}s" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="${t.deep}" stop-opacity=".38"/><stop offset="1" stop-color="${t.deep}" stop-opacity="0"/></radialGradient></defs>
      <ellipse cx="32" cy="58" rx="20" ry="4.5" fill="url(#${id}s)"/>${T[key](t, id)}</svg>`;
  }

  const api = { icon, body, names: Object.keys(G), tile, tiles: Object.keys(T), serviceColor: (n) => SERVICE_COLORS[T[n] ? n : ALIAS[n]] || null };
  global.RushIcons = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
