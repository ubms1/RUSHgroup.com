// RUSH public website: shared navigation and footer, store badges, industries, live public data and forms.
// Self-contained: it needs only config.js and assets/rush-icons.js, so the folder can be hosted on its own.
(function () {
  'use strict';

  const CFG = window.RUSH_SITE_CONFIG || {};
  const page = document.body.dataset.page || '';
  const LOCAL = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  // On the RUSH server the API shares this origin. Elsewhere (static hosting) it comes from config.js,
  // and the live sections fall back to built-in content when it is not set.
  const ON_SERVER = LOCAL || (CFG.SERVER_HOSTS || []).includes(location.hostname);
  const API_BASE = String(CFG.API_BASE || (ON_SERVER ? '/api' : '')).replace(/\/+$/, '');
  // RushMedz lives on its own domain. The local RUSH server also serves it under /medz/ for testing.
  const MEDZ_URL = LOCAL ? '/medz/' : String(CFG.MEDZ_URL || 'https://www.rushmedz.com/').replace(/\/*$/, '/');
  const SUPPORT_EMAIL = CFG.SUPPORT_EMAIL || 'support@rush.ph';
  const PRIVACY_EMAIL = CFG.PRIVACY_EMAIL || 'privacy@rush.ph';
  // Built-in figures shown when the live API is not connected. They mirror the platform defaults.
  const VEHICLES = [
    ['MOTORCYCLE', 'Motorcycle', 20, '0.4 x 0.4 x 0.4 m', 'Small parcels, documents and food boxes', 'Motorbike with top box'],
    ['TRICYCLE', 'Cargo Tricycle', 150, '1.8 x 1.2 x 1.2 m', 'Medium parcels and bulk grocery boxes that are too big for a motorcycle', 'Sidecar cargo tricycle'],
    ['SEDAN', '200 kg Sedan', 200, '1.0 x 0.9 x 0.5 m', 'Boxes and bags that fit in a car trunk', 'Vios, City, Mirage G4'],
    ['SUV', '300 kg Small Crossover SUV', 300, '1.1 x 1.0 x 0.8 m', 'Larger boxes and small appliances', 'Raize, Avanza, Xpander'],
    ['MPV', '600 kg 7-seater SUV/Minivan', 600, '1.5 x 1.1 x 0.9 m', 'Cargo with seats folded down', 'Innova, Montero, Fortuner'],
    ['PICKUP', '800 kg Pickup', 800, '2.7 x 1.5 x 0.5 m', 'Furniture and items needing open height', 'Hilux, D-Max, Navara'],
    ['L300', '1000 kg L300 / Cargo Van', 1000, '2.1 x 1.2 x 1.2 m', 'MSME bulk orders, stocks and bazaar goods', 'L300 or van without seats'],
    ['FB_VAN', '2000 kg FB-type Long Van', 2000, '3.0 x 1.7 x 1.7 m', 'Refrigerators, large appliances and bulk stock', 'Isuzu QLR777, Foton Tornado'],
    ['ALUMINUM_VAN', '2000 kg Aluminum Van', 2000, '3.0 x 1.7 x 1.7 m', 'Enclosed cargo, events and sound systems', 'Aluminum closed van'],
    ['TRUCK_6W', '3000 kg 6W Aluminum Van', 3000, '4.3 x 1.8 x 2.1 m', 'Lipat-bahay and bulk deliveries', 'Isuzu N-Series, FUSO Canter'],
    ['TRUCK_6W_XL', '5000 kg 6W Large Aluminum Van', 5000, '6.1 x 2.1 x 2.1 m', 'Large moves and heavy commercial loads', 'Large 6-wheeler closed van'],
  ].map(([code, name, max_kg, dims, description, example]) => ({ code, name, max_kg, dims, description, example }));
  // Same content as GET /api/privacy/notice, shown when the live API is not connected.
  const NOTICE = {
    policy_version: '2026.1',
    company: 'RUSH Technologies Philippines',
    dpo: { name: 'Data Protection Officer', email: PRIVACY_EMAIL },
    law: 'Republic Act No. 10173 (Data Privacy Act of 2012), its IRR and National Privacy Commission issuances',
    rights: ['Be informed', 'Object', 'Access', 'Rectification', 'Erasure or blocking', 'Damages', 'Data portability', 'File a complaint with the National Privacy Commission (privacy.gov.ph)'],
    purposes: [
      { purpose: 'Account, authentication and security', data: 'Name, mobile number, email, password hash, device/IP logs', basis: 'Contract / legitimate interest' },
      { purpose: 'Orders, deliveries and cargo bookings', data: 'Delivery addresses, coordinates, contact details, item descriptions, driver location during active deliveries', basis: 'Contract' },
      { purpose: 'Payments and money transfers (RushPay)', data: 'Payment records, remittance senders and recipients, bills and load purchases, payout accounts (encrypted), identity verification documents', basis: 'Contract / legal obligation (AMLA, BSP rules for Money Service Businesses)' },
      { purpose: 'Health services (RushMedz)', data: 'Appointment reasons, consultation chat, prescriptions, laboratory results (sensitive personal information, encrypted at rest)', basis: 'Explicit consent / provision of medical care' },
      { purpose: 'Marketing messages', data: 'Mobile number, email, preferences', basis: 'Consent (optional, withdraw any time)' },
    ],
    retention: [
      { data: 'Account and profile', period: 'Until account deletion' },
      { data: 'Payment, remittance and identity verification records', period: '5 years after account closure (Anti-Money Laundering Act)' },
      { data: 'Orders and delivery records', period: 'Anonymised on account deletion; transaction totals kept for tax and accounting' },
      { data: 'Medical records', period: 'Retained by the treating provider as required by health regulations, de-identified from your account on deletion' },
      { data: 'Security and audit logs', period: '1 year' },
    ],
    breach_policy: 'In case of a personal data breach that is likely to result in serious harm, we notify the National Privacy Commission and affected individuals within 72 hours.',
  };
  const NAV = [
    { id: 'home', href: 'index.html', label: 'Home' },
    { id: 'groceries', href: 'groceries.html', label: 'Groceries' },
    { id: 'food', href: 'food.html', label: 'Food' },
    { id: 'cargo', href: 'cargo.html', label: 'Cargo' },
    { id: 'pay', href: 'pay.html', label: 'RushPay' },
    { id: 'medz', medz: '', label: 'RushMedz' },
    { id: 'ads', href: 'ads.html', label: 'RushAds' },
    { id: 'apps', href: 'apps.html', label: 'Apps' },
    { id: 'contact', href: 'contact.html', label: 'Contact' },
  ];
  const SERVICES = [
    { href: 'groceries.html', label: 'Groceries' },
    { href: 'food.html', label: 'Food' },
    { href: 'cargo.html', label: 'Cargo' },
    { href: 'pay.html', label: 'RushPay' },
    { medz: '', label: 'RushMedz' },
    { href: 'ads.html', label: 'RushAds' },
    { href: 'apps.html', label: 'Apps' },
  ];
  // Mobile apps, keyed like RUSH_SITE_CONFIG.STORES. Each has an anchor on apps.html.
  const APPS = [
    ['app', 'RUSH app'], ['pay', 'RushPay'], ['grocery', 'RushGrocery'], ['food', 'RushFood'],
    ['pharma', 'RushPharma'], ['cargo', 'RushCargo'], ['doctor', 'RushDoctor'], ['clinic', 'RushClinic'],
  ];
  const APP_NAME = Object.fromEntries(APPS);
  const STORES = {
    google: { live: 'Get it on', soon: 'Coming soon to', name: 'Google Play' },
    apple: { live: 'Download on the', soon: 'Coming soon to the', name: 'App Store' },
  };
  const INDUSTRIES = [
    { id: 'groceries', icon: 'bag', title: 'Groceries and retail', href: 'groceries.html', more: 'Groceries on RUSH',
      text: 'Grocery stores, mini-marts and specialty shops sell to customers near them. Stores run orders, products and stock in RushGrocery.' },
    { id: 'food', icon: 'food', title: 'Restaurants and food', href: 'food.html', more: 'Food on RUSH',
      text: 'Restaurants and food providers take orders, keep their menu up to date and hand meals to RushCargo riders, all in RushFood.' },
    { id: 'pharmacy', icon: 'pill', title: 'Pharmacies', medz: 'pharmacy.html', more: 'Pharmacy on RushMedz',
      text: 'Licensed pharmacies sell medicines through RushPharma. The pharmacist checks every prescription order before accepting it.' },
    { id: 'cargo', icon: 'truck', title: 'Logistics and cargo', href: 'cargo.html', more: 'RushCargo',
      text: 'RushCargo drivers deliver every RUSH order and move any item a customer books, in a vehicle that can carry it.' },
    { id: 'health', icon: 'doctor', title: 'Health care', medz: '', more: 'Visit RushMedz',
      text: 'Doctors, clinics, laboratories and hospitals take bookings for video and in-person care through RushMedz, RushDoctor and RushClinic.' },
    { id: 'pay', icon: 'send', title: 'Payments and remittance', href: 'pay.html', more: 'About RushPay', gold: true,
      text: 'RushPay sends money at home and abroad, pays bills, buys prepaid load and takes payment for every RUSH order, delivery and appointment.' },
    { id: 'ads', icon: 'broadcast', title: 'Advertising', href: 'ads.html', more: 'About RushAds', gold: true,
      text: 'RushAds helps merchants, health providers and brands reach the people who use RUSH.' },
  ];

  const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const icon = (name, size) => (window.RushIcons ? window.RushIcons.icon(name, size) : '');
  const money = (n) => '₱' + (Number(n) || 0).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const fmt = (n) => Number(n || 0).toLocaleString('en-PH');
  const LOGO = 'assets/rush-logo.png';

  // Calls the public RUSH API. Errors carry a message for the visitor; `offline` marks an API that is not
  // connected or cannot be reached, so callers can fall back to built-in content or email.
  async function api(path, body) {
    const fail = (message, offline) => Object.assign(new Error(message), { offline });
    if (!API_BASE) throw fail('Live RUSH services are not connected to this website.', true);
    const init = body === undefined
      ? { headers: { Accept: 'application/json' } }
      : { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
    let res;
    try {
      res = await fetch(API_BASE + path, init);
    } catch (_) {
      throw fail('We could not reach the RUSH service.', true);
    }
    const data = await res.json().catch(() => null);
    if (!data) throw fail('The RUSH service is not responding as expected.', true);
    if (!res.ok) throw fail((data.error && data.error.message) || 'The request could not be completed.', false);
    return data;
  }

  async function busy(button, fn) {
    if (!button) return fn();
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
    try {
      return await fn();
    } finally {
      button.disabled = false;
      button.removeAttribute('aria-busy');
    }
  }

  // A link to the RushMedz website; applyMedzLinks() sets the final href from MEDZ_URL.
  const medzAttrs = (path) => `href="${esc(MEDZ_URL + path)}" data-medz-link="${esc(path)}"`;
  const navHref = (n) => (n.medz !== undefined ? medzAttrs(n.medz) : `href="${esc(n.href)}"`);
  const appLabel = (key) => (key === 'app' ? 'the RUSH app' : APP_NAME[key] || 'the app');

  function renderHeader() {
    const host = $('[data-site-head]');
    if (!host) return;
    const links = NAV.map((n) => {
      const current = n.id === page ? ' aria-current="page"' : '';
      if (n.medz !== undefined) {
        return `<a ${navHref(n)} class="ext" title="RushMedz medical services website">${esc(n.label)}${icon('arrow-right', 14)}</a>`;
      }
      return `<a ${navHref(n)}${current}>${esc(n.label)}</a>`;
    }).join('');
    host.innerHTML = `<div class="wrap">
        <a class="brand" href="index.html" aria-label="RUSH home"><img src="${LOGO}" alt="RUSH logo" width="44" height="44"><span>RUSH<small>Everything, Delivered</small></span></a>
        <nav class="nav" id="site-nav" aria-label="Main">${links}</nav>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">${icon('menu', 22)}</button>
      </div>`;
    const btn = $('.nav-toggle', host);
    const nav = $('#site-nav', host);
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      btn.innerHTML = icon(open ? 'x' : 'menu', 22);
    });
  }

  // Google Play and App Store badges for one app. A badge with a listing URL in config.js is a link;
  // without one it is a disabled "Coming soon" badge, so both stores always show.
  function storeBadges(key) {
    const s = (CFG.STORES && CFG.STORES[key]) || {};
    return Object.keys(STORES).map((store) => {
      const t = STORES[store];
      const url = /^https?:\/\//i.test(s[store] || '') ? s[store] : '';
      if (url) {
        return `<a class="store-badge" href="${esc(url)}" target="_blank" rel="noopener">${icon('download', 20)}<span><small>${t.live} </small>${t.name}<span class="sr-only"> (${esc(appLabel(key))}, opens in a new tab)</span></span></a>`;
      }
      return `<span class="store-badge soon" role="link" aria-disabled="true" aria-label="${t.soon} ${t.name}">${icon('clock', 20)}<span><small>${t.soon} </small>${t.name}</span></span>`;
    }).join('');
  }

  function renderFooter() {
    const host = $('[data-site-foot]');
    if (!host) return;
    const services = SERVICES.map((n) => `<a ${navHref(n)}>${esc(n.label)}</a>`).join('');
    const apps = APPS.map(([key, name]) => `<a href="apps.html#${key}">${esc(name)}</a>`).join('');
    host.innerHTML = `<div class="wrap">
        <div>
          <a class="brand" href="index.html"><img src="${LOGO}" alt="" width="46" height="46"><span>RUSH<small>Everything, Delivered</small></span></a>
          <p style="margin-top:14px;color:rgba(255,255,255,.7)">One account for groceries, food, pharmacy, cargo delivery and health care in the Philippines, with RushPay for payments, remittance, bills and load.</p>
        </div>
        <div><h3>Services</h3>${services}</div>
        <div><h3>Apps</h3>${apps}</div>
        <div><h3>Help and legal</h3>
          <a href="contact.html">Contact us</a>
          <a href="privacy.html">Privacy Notice</a>
          <a href="terms.html">Terms of Service</a>
          <a href="privacy.html#request">Make a privacy request</a>
          <a href="mailto:${esc(SUPPORT_EMAIL)}" data-company="support_email">${esc(SUPPORT_EMAIL)}</a>
        </div>
        <div class="fine"><p data-copyright>RUSH · Compliant with the Data Privacy Act of 2012 (RA 10173). Vending machines are coming soon.</p></div>
      </div>`;
    const year = $('[data-copyright]', host);
    if (year) year.textContent = `© ${new Date().getFullYear()} RUSH · Compliant with the Data Privacy Act of 2012 (RA 10173). Vending machines are coming soon.`;
  }

  // Industry cards. data-industries holds the id of the industry the current page is about, so it is left out.
  function renderIndustries() {
    $$('[data-industries]').forEach((host) => {
      const skip = host.dataset.industries;
      host.innerHTML = INDUSTRIES.filter((x) => x.id !== skip).map((x) => `<a class="card" ${x.medz !== undefined ? medzAttrs(x.medz) : `href="${esc(x.href)}"`}>
          <div class="icon-tile${x.gold ? ' gold' : ''}">${icon(x.icon, 26)}</div>
          <h3>${esc(x.title)}</h3>
          <p>${esc(x.text)}</p>
          <span class="more">${esc(x.more)} ${icon('arrow-right', 16)}</span>
        </a>`).join('');
    });
  }

  function applyMedzLinks() {
    $$('[data-medz-link]').forEach((a) => { a.href = MEDZ_URL + (a.dataset.medzLink || ''); });
  }

  function hydrateIcons(root = document) {
    $$('[data-icon]', root).forEach((el) => {
      el.innerHTML = icon(el.dataset.icon, Number(el.dataset.size) || 24);
    });
  }

  // Live figures. Only fields the API returns are shown; without the live API the section is left out.
  async function loadStats() {
    const boxes = $$('[data-stat]');
    if (!boxes.length) return;
    const note = $('[data-stats-note]');
    const section = boxes[0].closest('section');
    try {
      const s = await api('/stats');
      boxes.forEach((b) => {
        const v = s[b.dataset.stat];
        b.textContent = typeof v === 'number' ? fmt(v) : '—';
      });
      if (note) note.textContent = 'Figures update live from the RUSH platform.';
    } catch (_) {
      if (section) section.hidden = true;
    }
  }

  // Vehicle classes from the live API, or the built-in list when it is not connected.
  async function loadVehicles() {
    const host = $('[data-vehicles]');
    if (!host) return;
    let items = VEHICLES;
    try {
      const r = await api('/cargo/vehicle-types');
      if (Array.isArray(r.items) && r.items.length) items = r.items;
    } catch (_) { /* the built-in list is shown */ }
    host.innerHTML = items.map((v) => `<article class="card vehicle">
          <div class="icon-tile">${icon(/^(MOTORCYCLE|TRICYCLE)$/.test(v.code) ? 'bike' : /^(SEDAN|SUV|MPV)$/.test(v.code) ? 'car' : 'truck', 24)}</div>
          <h3>${esc(v.name)}</h3>
          <span class="cap">Up to ${esc(fmt(v.max_kg))} kg</span>
          ${v.dims ? `<span class="dims">Cargo space ${esc(v.dims)}</span>` : ''}
          ${v.description ? `<p>${esc(v.description)}</p>` : ''}
          ${v.example ? `<p class="muted small">Examples: ${esc(v.example)}</p>` : ''}
          ${v.min_fare != null ? `<p class="muted small">Minimum fare ${esc(money(v.min_fare))}</p>` : ''}
          ${v.drivers_online != null ? `<p class="muted small">${esc(fmt(v.drivers_online))} driver${Number(v.drivers_online) === 1 ? '' : 's'} online</p>` : ''}
        </article>`).join('');
  }

  // Company contact details: the support email from config.js first, then the platform settings when live.
  // Rows without a value stay hidden.
  function fillCompany(co) {
    $$('[data-company]').forEach((el) => {
      const key = el.dataset.company;
      const value = co[key];
      const row = el.closest('li') || el;
      row.hidden = !value;
      if (!value) return;
      if (key === 'support_email') { el.href = 'mailto:' + value; }
      el.textContent = value;
    });
    $$('[data-company-name]').forEach((el) => { if (co.name) el.textContent = co.name; });
  }

  async function loadCompany() {
    if (!$('[data-company]')) return;
    fillCompany({ support_email: SUPPORT_EMAIL });
    try {
      const c = await api('/config');
      fillCompany({ support_email: SUPPORT_EMAIL, ...(c.company || {}) });
    } catch (_) { /* the built-in support email stays */ }
  }

  // The Privacy Notice from the live API, or the built-in copy of it when the API is not connected.
  async function loadPrivacy() {
    const host = $('[data-privacy]');
    if (!host) return;
    let p = NOTICE;
    try {
      p = await api('/privacy/notice');
    } catch (_) { /* the built-in notice is shown */ }
    const dpo = p.dpo || {};
    const rights = (p.rights || []).map((r) => `<li>${esc(r)}</li>`).join('');
    const purposes = (p.purposes || []).map((x) => `<tr><td>${esc(x.purpose)}</td><td>${esc(x.data)}</td><td>${esc(x.basis)}</td></tr>`).join('');
    const retention = (p.retention || []).map((x) => `<tr><td>${esc(x.data)}</td><td>${esc(x.period)}</td></tr>`).join('');
    host.innerHTML = `<p class="doc-meta">Policy version ${esc(p.policy_version || '')} · Governed by ${esc(p.law || 'the Data Privacy Act of 2012')}</p>
        <h2>Who we are</h2>
        <p>${esc((p.company && (p.company.name || p.company)) || 'RUSH')} is the controller of the personal data described here.${p.npc_registration ? ` NPC registration: ${esc(p.npc_registration)}.` : ''}</p>
        <p>Data Protection Officer: <strong>${esc(dpo.name || '')}</strong>${dpo.email ? ` · <a href="mailto:${esc(dpo.email)}">${esc(dpo.email)}</a>` : ''}</p>
        <h2>Your rights</h2><ul>${rights}</ul>
        ${purposes ? `<h2>What we use your data for</h2><div class="table-wrap"><table><thead><tr><th>Purpose</th><th>Data</th><th>Basis</th></tr></thead><tbody>${purposes}</tbody></table></div>` : ''}
        ${retention ? `<h2>How long we keep it</h2><div class="table-wrap"><table><thead><tr><th>Data</th><th>Period</th></tr></thead><tbody>${retention}</tbody></table></div>` : ''}
        ${p.breach_policy ? `<h2>Personal data breaches</h2><p>${esc(p.breach_policy)}</p>` : ''}
        <h2>Deleting your account</h2>
        <p>You can ask to delete your RUSH account in the RUSH app under Privacy. Deletion waits while you have a payment or payout in progress, an active order, booking or appointment, or (for store owners) active store orders, so that nothing is lost. Records we must keep by law are retained without your identity.</p>`;
  }

  // Forms post to the public API. Empty optional fields are removed so the server validates only what was typed.
  function readForm(form) {
    const data = {};
    new FormData(form).forEach((value, key) => {
      const v = typeof value === 'string' ? value.trim() : value;
      if (v !== '' && v !== 'on') data[key] = v;
    });
    if (form.elements.consent) data.consent = !!form.elements.consent.checked;
    if (form.dataset.kind) data.kind = form.dataset.kind;
    return data;
  }

  // The text of a form field as the visitor sees it (the option label for a select).
  const fieldText = (form, name) => {
    const el = form.elements[name];
    if (!el || !el.value) return '';
    return el.tagName === 'SELECT' ? el.options[el.selectedIndex].text : el.value.trim();
  };

  // Opens the visitor's email app with the form contents, for when the live API cannot take the form.
  function emailFallback(form) {
    const privacy = form.dataset.form === 'privacy';
    const to = privacy ? PRIVACY_EMAIL : SUPPORT_EMAIL;
    const subject = privacy ? `Privacy request: ${fieldText(form, 'type')}` : `RUSH website: ${fieldText(form, 'subject') || 'Message'}`;
    const lines = [`Name: ${fieldText(form, 'name')}`];
    if (fieldText(form, 'email')) lines.push(`Email: ${fieldText(form, 'email')}`);
    if (fieldText(form, 'phone')) lines.push(`Mobile number: ${fieldText(form, 'phone')}`);
    lines.push('', fieldText(form, privacy ? 'details' : 'message'));
    location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    return to;
  }

  function bindForms() {
    $$('form[data-form]').forEach((form) => {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const status = $('[data-status]', form.parentElement) || $('[data-status]', form);
        const button = $('button[type="submit"]', form);
        const path = form.dataset.form === 'privacy' ? '/privacy-requests' : '/inquiries';
        const body = readForm(form);
        const setStatus = (text, cls) => { if (status) { status.textContent = text; status.className = 'status ' + (cls || ''); } };
        setStatus('');
        if (!body.email && !body.phone) {
          setStatus('Please give an email or a mobile number, so we can reply.', 'bad');
          return;
        }
        const send = async () => {
          const r = await api(path, body);
          form.reset();
          if (path === '/privacy-requests') {
            setStatus(`Request received. Reference ${r.reference}. We will respond by ${new Date(r.respond_by).toLocaleDateString('en-PH', { dateStyle: 'long' })}.`, 'ok');
          } else {
            setStatus('Thank you. Our team will reply to the details you gave.', 'ok');
          }
        };
        try {
          await busy(button, send);
        } catch (err) {
          if (err.offline) {
            const to = emailFallback(form);
            setStatus(`Your email app is opening with your message to ${to}. Press Send there to finish. If it does not open, email ${to} directly.`, 'ok');
            return;
          }
          setStatus(err.message || 'We could not send your request. Please try again.', 'bad');
        }
      });
    });
  }

  // Fills each [data-store-badges="<app key>"] placeholder with that app's Google Play and App Store badges.
  function renderStoreBadges() {
    $$('[data-store-badges]').forEach((el) => {
      const key = el.dataset.storeBadges;
      el.classList.add('store-row');
      el.setAttribute('role', 'group');
      if (!el.hasAttribute('aria-label')) el.setAttribute('aria-label', `Download ${appLabel(key)}`);
      el.innerHTML = storeBadges(key);
    });
  }

  function bindNavigationHash() {
    if (location.hash === '#request') {
      const target = document.getElementById('request');
      if (target) target.scrollIntoView({ block: 'start' });
    }
  }

  renderHeader();
  renderFooter();
  renderIndustries();
  hydrateIcons();
  renderStoreBadges();
  applyMedzLinks();
  bindForms();
  loadStats();
  loadVehicles();
  loadCompany();
  loadPrivacy();
  bindNavigationHash();
})();
