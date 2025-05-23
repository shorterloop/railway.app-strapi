export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:", "https://proxy-event.ckeditor.com"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
            "https://cdn.shorterloop.com", // ✅ Allow CDN images
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
            "https://cdn.shorterloop.com", // ✅ Allow CDN videos/audio
          ],
          "frame-src": ["'self'"],
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net', 'cdn.ckeditor.com', 'https://cdn.ckeditor.com'],

        },
      },
    },
  }
];
