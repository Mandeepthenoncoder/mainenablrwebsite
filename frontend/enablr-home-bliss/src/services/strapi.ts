import { strapi } from '@strapi/client';

// Initialize Strapi client
const strapiClient = strapi({
  baseURL: 'http://localhost:1337/api',
});

export default strapiClient; 