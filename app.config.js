import 'dotenv/config';

export default {
  extra: {
    apiBaseUrl: process.env.API_BASE_URL,
    baseImageUrl: process.env.BASE_IMAGE_URL,
  },
  ios: {
    bundleIdentifier: 'com.jaxv9.garden',
  },
};
