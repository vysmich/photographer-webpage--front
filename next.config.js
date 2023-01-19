/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  i18n: {
    // providing the locales supported by your application
    locales: ["cs-CZ", "en"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "cs-CZ",
  },
  images: {
    domains: ["localhost", "storage.googleapis.com"],
  },
};
