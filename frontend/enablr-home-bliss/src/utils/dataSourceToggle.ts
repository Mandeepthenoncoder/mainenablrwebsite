/**
 * Simple utility to toggle between Supabase and Strapi data sources.
 * This allows for easy switching during the transition period.
 */

// Define the allowed data source types
type DataSource = 'strapi' | 'supabase';

// Set this to 'strapi' to use Strapi, or 'supabase' to use Supabase
export const DATA_SOURCE: DataSource = 'strapi';

/**
 * Check if the current data source is Strapi
 */
export const isStrapi = () => DATA_SOURCE === 'strapi';

/**
 * Check if the current data source is Supabase
 */
export const isSupabase = () => DATA_SOURCE === 'supabase';

/**
 * Get the name of the current data source
 */
export const getDataSourceName = () => DATA_SOURCE.charAt(0).toUpperCase() + DATA_SOURCE.slice(1); 