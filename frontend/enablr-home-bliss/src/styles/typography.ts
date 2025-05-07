export const typography = {
  // Headings with better mobile scaling
  hero: "text-[32px] sm:text-[42px] md:text-[56px] lg:text-[64px] font-bold tracking-tight leading-tight",
  heroSubtitle: "text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-relaxed",
  
  // Section titles
  h1: "text-3xl md:text-[36px] font-bold tracking-tight",
  h2: "text-2xl md:text-[36px] font-bold tracking-tight",
  h3: "text-xl md:text-2xl font-semibold",
  h4: "text-lg md:text-xl font-medium",
  
  // Body text
  body: {
    lg: "text-lg md:text-3xl leading-relaxed",
    base: "text-[16px] leading-relaxed font-normal",
    sm: "text-sm md:text-base leading-relaxed",
    xs: "text-xs md:text-sm leading-relaxed",
  },
  
  // Card text
  card: {
    title: "text-[20px] font-semibold leading-tight",
    body: "text-[14px] md:text-[16px] font-normal leading-relaxed",
  },
  
  // Special text styles
  tab: {
    base: "py-2 transition-colors duration-200 text-sm sm:text-base font-medium relative whitespace-nowrap min-w-[120px] px-4",
    active: "text-[#EE6C4D] font-medium",
    inactive: "text-gray-600 hover:text-gray-900 hover:after:scale-x-100",
    scrollArea: "overflow-x-auto no-scrollbar py-1 px-1 -mx-1",
  }
};

export const colors = {
  primary: {
    navy: "#1A1F2C",
    coral: "#EE6C4D",
    purple: "#7E69AB",
  },
  background: {
    light: "#FFF",
    coral: "#FDE1D3",
    lightCoral: "#fff1ec",
    subtle: "#f9f9fb",
  },
  text: {
    primary: "#1A1F2C",
    secondary: "#64748b",
    white: "#FFFFFF",
  },
  transitions: {
    default: "transition-all duration-300 ease-in-out",
    fast: "transition-all duration-200 ease-in-out",
    slow: "transition-all duration-500 ease-in-out",
  }
};
