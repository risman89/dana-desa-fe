/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_NAME: 'Dana Desa',
    APP_AUTHOR: 'Muzammil',
    DESA: 'Gampong Ulee Madon',
    KECAMATAN: 'Muara Batu',
    KAB: 'Aceh Utara'
  },
}

module.exports = nextConfig
