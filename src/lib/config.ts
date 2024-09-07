
const _config = {
    database: {
        databaseUrl: process.env.DATABASE_URL as string,
    },
    cloudinary: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET
    }
}

const config = Object.freeze(_config);
export default config;