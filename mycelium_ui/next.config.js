/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_MAPBOX_API_KEY:
    process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_API_KEY,
    OPENWEATHER_API_KEY:
    process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
    ACCUWEATHER_API_KEY:
    process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY,
  },
}

module.exports = nextConfig
