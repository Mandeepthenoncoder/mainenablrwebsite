import React, { useEffect } from 'react';

interface HubSpotContactFormProps {
  portalId?: string;
  formId?: string;
  region?: string;
  className?: string;
}

const HubSpotContactForm: React.FC<HubSpotContactFormProps> = ({
  portalId = 'YOUR_PORTAL_ID',
  formId = 'YOUR_FORM_ID',
  region = 'na1',
  className = '',
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.hbspt) {
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target: '#hubspot-contact-form',
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [portalId, formId, region]);

  return <div id="hubspot-contact-form" className={className} />;
};

export default HubSpotContactForm; 