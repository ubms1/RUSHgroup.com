// RUSH website settings. Load this file first on every page.
//
// The site works in two places:
//  - On the RUSH server (localhost, or a host in SERVER_HOSTS). The API is on the same origin ('/api') and
//    RushMedz is tested under /medz/ on localhost.
//  - On static hosting such as GitHub Pages. Live sections use API_BASE when it is set (the API must list this
//    site in CORS_ORIGINS); without it the site shows its built-in content and the forms open an email to RUSH.
// Apps are offered only through Google Play and the App Store.
//
// SERVER_HOSTS:   host names where the RUSH server itself serves this website.
// API_BASE:       full RUSH API URL for static hosting, e.g. 'https://www.rush.ph/api'. Leave empty to skip live data.
// MEDZ_URL:       the RushMedz medical services website.
// SUPPORT_EMAIL:  shown on the site and used when a form cannot reach the API.
// PRIVACY_EMAIL:  the Data Protection Officer, used for privacy requests when the API cannot be reached.
// STORES:         Google Play and App Store listing links for each app. Leave a link empty until that listing is
//                 published; the site then shows a "Coming soon" badge in its place.
window.RUSH_SITE_CONFIG = {
  SERVER_HOSTS: ['www.rush.ph', 'rush.ph'],
  API_BASE: '',
  MEDZ_URL: 'https://www.rushmedz.com/',
  SUPPORT_EMAIL: 'support@rush.ph',
  PRIVACY_EMAIL: 'privacy@rush.ph',
  STORES: {
    app: { google: '', apple: '' },
    pay: { google: '', apple: '' },
    grocery: { google: '', apple: '' },
    food: { google: '', apple: '' },
    pharma: { google: '', apple: '' },
    cargo: { google: '', apple: '' },
    transpo: { google: '', apple: '' },
    essentials: { google: '', apple: '' },
    doctor: { google: '', apple: '' },
    clinic: { google: '', apple: '' },
  },
};
