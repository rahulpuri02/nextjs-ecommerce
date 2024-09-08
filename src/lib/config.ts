
const _config = {
    database: {
        databaseUrl: process.env.DATABASE_URL as string,
    },
    cloudinary: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    api: {
      apiUrl: process.env.NEXT_PUBLIC_BACKEND_URL
    }
}

const config = Object.freeze(_config);
export default config;