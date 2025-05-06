<div align="center">
<img src="/Favicon.png" alt="" width="150"/>

<h1>Enablr</h1>
<p><strong>Build Your Global Team with Confidence</strong></p>
<p>
Enablr is a comprehensive platform designed to streamline the process of building, managing, and scaling global teams. Our solution empowers businesses to hire international talent efficiently while ensuring compliance with local regulations.
</p>
<p>
<a href="https://enablr.io](https://mainenablrwebsite.vercel.app/" target="_blank" rel="noopener noreferrer">
<img src="https://img.shields.io/badge/View-Live%20Demo-blue?style=for-the-badge" alt="Live Demo"/>
</a>
</p>
</div>

## 📋 Table of Contents
- [About Enablr](#-about-enablr)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [License](#-license)
- [Contact](#-contact)

## 🌍 About Enablr

Enablr addresses the challenges businesses face when building global teams:

- **Complex compliance requirements** across different countries
- **Time-consuming recruitment** processes for international talent
- **Inefficient payroll management** for distributed teams
- **Communication barriers** in remote work environments

Our platform provides an all-in-one solution that simplifies international hiring and team management, allowing you to focus on growth while we handle the complexities.

## ✨ Key Features

- **Global Talent Acquisition Hub** - Access a curated network of pre-vetted international professionals across 150+ countries
- **Automated Compliance** - Stay compliant with local employment laws with our continuously updated regulatory database
- **Seamless Onboarding** - Digital contracts, background checks, and documentation all managed through one platform
- **Real-time Performance Analytics** - Track productivity, engagement, and ROI across your global team


## 🛠 Tech Stack

### Frontend
- **Framework**: React.js with Vite
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Redux Toolkit with RTK Query

### Backend & Services
- **Primary Backend**: Supabase (PostgreSQL, Auth, Storage)
- **API Layer**: Node.js with Express
- **CRM Integration**: HubSpot API
- **Content Management**: Strapi headless CMS
- **Communication**: Socket.io for real-time features

### DevOps
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel (frontend), Railway (backend services)
- **Monitoring**: Sentry for error tracking, LogRocket for UX analysis

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher) or yarn (v1.22.0 or higher)
- Supabase account
- HubSpot account for CRM features

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Mandeepthenoncoder/mainenablrwebsite.git
cd mainenablrwebsite/frontend/enablr-home-bliss
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
```

4. Edit `.env.local` with your credentials:
```
# Supabase
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_public_anon_key

# HubSpot
VITE_HUBSPOT_API_KEY=your_hubspot_api_key

# Feature flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CHAT_FEATURE=true
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:8080` in your browser.

## 🌐 Deployment

### Production Deployment
Our recommended deployment workflow:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel project settings
3. Set up automatic deployments for the main branch
4. Use preview deployments for feature branches

### Staging Environment
For testing before production:
```bash
npm run build:staging
# or
yarn build:staging
```

## 📂 Project Structure

```
enablr/
├── public/                # Static assets
├── src/
│   ├── assets/            # Internal assets
│   ├── components/        # UI components (atomic design)
│   ├── features/          # Feature modules
│   │   ├── auth/          # Authentication
│   │   ├── dashboard/     # Dashboard
│   │   ├── onboarding/    # User onboarding
│   │   └── teams/         # Team management
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API services
│   ├── store/             # Redux store
│   ├── styles/            # Global styles
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main App component
│   └── main.tsx           # Entry point
├── backend/               # API and Strapi services
├── .env.example           # Environment variables template
└── ...                    # Config files
```



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

Purple Magic Studios - https://www.purplemagicstudio.com/

Project Link: https://github.com/Mandeepthenoncoder/mainenablrwebsite.git

