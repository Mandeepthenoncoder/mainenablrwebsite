import axios from 'axios';

const HUBSPOT_API_KEY = import.meta.env.VITE_HUBSPOT_API_KEY;
const HUBSPOT_API_URL = 'https://api.hubapi.com';

export const fetchJobOpenings = async () => {
  try {
    const response = await axios.get(
      `${HUBSPOT_API_URL}/crm/v3/objects/job_opening`,
      {
        headers: {
          'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
          'Content-Type': 'application/json',
        },
        params: {
          properties: 'title,description,requirements,location,experience,job_type,department,application_link',
          limit: 100,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching job openings from HubSpot:', error);
    throw error;
  }
};

export const fetchBlogPosts = async (limit = 10, offset = 0) => {
  try {
    const response = await axios.get(
      `${HUBSPOT_API_URL}/cms/v3/blogs/posts`,
      {
        headers: {
          'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
          'Content-Type': 'application/json',
        },
        params: {
          limit,
          offset,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching blog posts from HubSpot:', error);
    throw error;
  }
}; 