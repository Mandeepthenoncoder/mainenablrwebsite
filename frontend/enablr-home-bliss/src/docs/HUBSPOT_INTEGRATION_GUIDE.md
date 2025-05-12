# HubSpot Integration Guide for Enablr Website

This guide outlines the process of integrating HubSpot with the Enablr website for managing newsletters, job openings, contact forms, and blog content.

## Table of Contents

1. [Setting Up HubSpot Account](#setting-up-hubspot-account)
2. [Installing HubSpot Tracking Code](#installing-hubspot-tracking-code)
3. [Newsletter Integration](#newsletter-integration)
4. [Job Openings Management](#job-openings-management)
5. [Contact Form Integration](#contact-form-integration)
6. [Blog Management](#blog-management)
7. [Testing and Troubleshooting](#testing-and-troubleshooting)

## Setting Up HubSpot Account

1. **Create a HubSpot Account**:
   - Sign up at [HubSpot](https://www.hubspot.com/)
   - Choose the appropriate plan based on your needs (Marketing Hub, Sales Hub, Service Hub, or a combination)

2. **Set Up Your Portal**:
   - Complete your company profile
   - Set up user accounts for team members
   - Configure basic settings like timezone, currency, etc.

## Installing HubSpot Tracking Code

1. **Get Your HubSpot Tracking Code**:
   - Navigate to Settings → Tracking Code in your HubSpot portal
   - Copy the provided JavaScript tracking code

2. **Add Tracking Code to the Website**:
   - Edit `frontend/enablr-home-bliss/src/components/layouts/MainLayout.tsx`
   - Add the tracking code in the `<head>` section using Helmet:

```jsx
<Helmet>
  {/* Other meta tags */}
  <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/YOUR_PORTAL_ID.js"></script>
</Helmet>
```

3. **Verify Installation**:
   - Use HubSpot's tracking code validation tool
   - Check if visitor data is being recorded in your HubSpot portal

## Newsletter Integration

1. **Create Email Subscription Form in HubSpot**:
   - Go to Marketing → Lead Capture → Forms
   - Create a new form for newsletter subscription
   - Include fields like Email (required), First Name, Last Name
   - Configure form settings and styling

2. **Embed the Form on the Website**:
   - Create a new component in `frontend/enablr-home-bliss/src/components/newsletter/HubSpotNewsletterForm.tsx`
   - Use either HubSpot's embed code or the HubSpot Forms API to render the form
   - Example implementation:

```tsx
import React, { useEffect } from 'react';

const HubSpotNewsletterForm = ({ formId }: { formId: string }) => {
  useEffect(() => {
    // Load HubSpot Forms script
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      hbspt.forms.create({
        region: "na1",
        portalId: "YOUR_PORTAL_ID",
        formId: formId,
        target: '#hubspot-newsletter-form'
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [formId]);

  return <div id="hubspot-newsletter-form"></div>;
};

export default HubSpotNewsletterForm;
```

3. **Replace the Current Newsletter Component**:
   - Update the newsletter section in the MainLayout component to use the new HubSpot form

## Job Openings Management

1. **Set Up Custom Objects in HubSpot**:
   - Go to Settings → Properties → Create Custom Object
   - Create a "Job Opening" object with properties like:
     - Title
     - Description
     - Requirements
     - Location
     - Experience level
     - Job type
     - Department
     - Application link

2. **Create an API Integration**:
   - Develop a service to fetch job openings from HubSpot
   - Create `frontend/enablr-home-bliss/src/services/hubspot.ts`:

```typescript
import axios from 'axios';

const HUBSPOT_API_KEY = process.env.REACT_APP_HUBSPOT_API_KEY;
const HUBSPOT_API_URL = 'https://api.hubapi.com';

export const fetchJobOpenings = async () => {
  try {
    const response = await axios.get(
      `${HUBSPOT_API_URL}/crm/v3/objects/job_opening`, 
      {
        headers: {
          'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
          'Content-Type': 'application/json'
        },
        params: {
          properties: 'title,description,requirements,location,experience,job_type,department,application_link',
          limit: 100
        }
      }
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching job openings from HubSpot:', error);
    throw error;
  }
};
```

3. **Update the Job Listings Component**:
   - Modify `CurrentOpeningsCompact.tsx` to fetch data from HubSpot
   - Replace the static job data with dynamic data from the API

## Contact Form Integration

1. **Create Contact Form in HubSpot**:
   - Go to Marketing → Lead Capture → Forms
   - Create a new form for contact submissions
   - Include necessary fields for contact information

2. **Embed the Form on the Contact Page**:
   - Create `frontend/enablr-home-bliss/src/components/contact/HubSpotContactForm.tsx`:

```tsx
import React, { useEffect } from 'react';

const HubSpotContactForm = ({ formId }: { formId: string }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      hbspt.forms.create({
        region: "na1",
        portalId: "YOUR_PORTAL_ID",
        formId: formId,
        target: '#hubspot-contact-form'
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [formId]);

  return <div id="hubspot-contact-form"></div>;
};

export default HubSpotContactForm;
```

3. **Update the Contact Page**:
   - Replace the current contact form with the HubSpot form component
   - Ensure form submissions are tracked in HubSpot CRM

## Blog Management

1. **Set Up HubSpot Blog**:
   - Navigate to Marketing → Website → Blog
   - Configure your blog settings

2. **Create Content in HubSpot**:
   - Use HubSpot's content creation tools to write and publish blog posts
   - Add images, tags, categories, and SEO metadata

3. **Integrate HubSpot Blog with Website**:
   - Create a service to fetch blog content from HubSpot API:

```typescript
// frontend/enablr-home-bliss/src/services/hubspot.ts

export const fetchBlogPosts = async (limit = 10, offset = 0) => {
  try {
    const response = await axios.get(
      `${HUBSPOT_API_URL}/cms/v3/blogs/posts`, 
      {
        headers: {
          'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
          'Content-Type': 'application/json'
        },
        params: {
          limit,
          offset
        }
      }
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching blog posts from HubSpot:', error);
    throw error;
  }
};
```

4. **Update Blog Components**:
   - Modify the blog listing and detail pages to use data from HubSpot
   - Implement pagination, filtering, and search functionality

## Testing and Troubleshooting

1. **Test Form Submissions**:
   - Submit test forms and verify data appears in HubSpot
   - Check for any console errors

2. **Test Blog Integration**:
   - Verify blog posts are displaying correctly
   - Test pagination and filtering

3. **Common Issues and Solutions**:
   - **CORS Issues**: Ensure proper CORS headers are configured in your API requests
   - **API Rate Limits**: Be mindful of HubSpot API rate limits
   - **Form Styling**: Customize HubSpot form CSS to match your website design
   - **Data Not Appearing**: Check API credentials and permission settings

4. **HubSpot Support Resources**:
   - [HubSpot Developers Documentation](https://developers.hubspot.com/docs/api/overview)
   - [HubSpot Community](https://community.hubspot.com/)
   - [HubSpot Support](https://help.hubspot.com/)

## Advanced Configuration

1. **Setting Up Workflows**:
   - Create automated workflows for new contact submissions
   - Set up email sequences for newsletter subscribers
   - Configure job application processing

2. **HubSpot CRM Integration**:
   - Connect job applications to the CRM pipeline
   - Create custom reports for recruitment metrics
   - Set up dashboards for monitoring website performance

3. **User Tracking and Personalization**:
   - Implement HubSpot's user tracking for personalized experiences
   - Create smart content that changes based on visitor attributes

---

For additional support, contact the development team or HubSpot customer support. 