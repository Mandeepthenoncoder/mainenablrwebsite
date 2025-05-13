interface HubSpotForms {
  forms: {
    create: (config: {
      region: string;
      portalId: string;
      formId: string;
      target: string;
    }) => void;
  };
}

declare global {
  interface Window {
    hbspt: HubSpotForms;
  }
}

export {}; 