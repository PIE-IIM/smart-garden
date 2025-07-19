import 'dotenv/config';

export default {
  extra: {
    apiBaseUrl: process.env.API_BASE_URL,
    port: process.env.PORT,
    baseImageUrl: process.env.BASE_IMAGE_URL,
  },
};
