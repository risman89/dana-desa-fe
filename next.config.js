const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    APP_NAME: 'Dana Desa',
    APP_AUTHOR: 'Muzammil',
    DESA: 'Gampong Ulee Madon',
    KECAMATAN: 'Muara Batu',
    KAB: 'Aceh Utara',
    NEXT_PUBLIC_URL_SERVICE : 'https://amaranth-jackrabbit-cape.cyclic.app'
  },
  target: 'serverless',
};

module.exports = nextConfig;
