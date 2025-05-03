export interface Leader {
  id: string;
  name: string;
  title: string;
  photoUrl: string;
  linkedInUrl?: string;
  bio: string;
}

export const leadershipData: Leader[] = [
  {
    id: "1",
    name: "C V Subramanyam",
    title: "Chairman & Managing Director",
    photoUrl: "/lovable-uploads/CV_Subramanyam.png",
    linkedInUrl: "https://linkedin.com/in/cvsubramanyam",
    bio: "C.V. Subramanyam is a serial entrepreneur and the dynamic founder, Chairman and Managing Director of Covasant. Known for his fearless leadership style and relentless drive to make things happen, Subramanyam's journey is nothing short of inspirational, marked by his unwavering commitment to innovation, bold decision-making, and an unshakable belief in creating lasting value, across the companies he has built."
  },
  {
    id: "2",
    name: "Ram Ramaseshan",
    title: "Chief Executive Officer",
    photoUrl: "/lovable-uploads/Ram_Ramasheshan.webp",
    linkedInUrl: "https://linkedin.com/in/ramramaseshan",
    bio: "Ram is the CEO of Covasant and leads the charge in building AI-powered, Services-as-Software platforms that help enterprises unlock scalable value. He is driving the adoption of Agentic AI to help organizations adapt faster, innovate boldly, and achieve measurable outcomes."
  },
  {
    id: "3",
    name: "Vincent Walden",
    title: "CEO, konaAI Data Science",
    photoUrl: "/lovable-uploads/Patrick Grobbel.png",
    linkedInUrl: "https://linkedin.com/in/vincentwalden",
    bio: "Vincent Walden is the CEO of konaAI, a Covasant company, where he leads the company's vision to help organizations detect and prevent fraud, corruption, and compliance issues using data analytics and technology."
  }
]; 