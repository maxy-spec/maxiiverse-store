# Rovely

**Rovely** — An AI-powered talent marketplace connecting exceptional professionals with elite opportunities.

> **Note:** Rovely is a demo/rebuild of the original `maxiiverse-store` repository. The AI matching feature uses local/demo logic — no external AI backend is configured.

## Features

- **Landing Page**: Modern, dark premium violet/white visual identity with clear calls-to-action for candidates and employers
- **Candidate Entry Points**: Resume/profile creation, skill verification workflow
- **Employer Dashboard**: Job posting, candidate review, application management
- **Talent Discovery**: Searchable talent pool with filterable profiles
- **Job Listings**: Browse, filter, and apply to available positions
- **Profile Views**: Detailed candidate and employer profiles
- **Application Flow**: Multi-step application process with document upload
- **AI Matching UI**: Candidate-job matching suggestions (demo/local logic, not connected to a real AI backend)

## Architecture

- **Frontend**: Single-page web application with React/Vite (or static HTML/CSS/JS if the framework is not suitable)
- **Styling**: Custom CSS with CSS variables for the violet/white theme
- **State Management**: React Context / local state
- **Routing**: Client-side routing for smooth page transitions
- **AI Matching**: Local mock matching algorithm (clearly labeled as demo)

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/maxy-spec/maxiiverse-store.git
cd maxiiverse-store

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build

```bash
npm run build
```

### Run

```bash
npm run preview
```

## Project Structure

```
├── public/
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── TalentCard/
│   │   ├── JobCard/
│   │   └── ...
│   ├── pages/
│   │   ├── Home/
│   │   ├── Candidates/
│   │   ├── Jobs/
│   │   ├── Profile/
│   │   └── ...
│   ├── contexts/
│   │   └── AppContext/
│   ├── hooks/
│   │   └── useMatching/
│   ├── utils/
│   │   └── aiMatching/
│   └── App.jsx
├── package.json
└── README.md
```

## Known Limitations

- **AI Matching**: The matching feature uses a local demo algorithm and is not connected to any real AI service
- **No Backend**: This is a frontend-only MVP with no server/database
- **Mock Data**: All candidates, jobs, and applications use mock/demo data
- **No Authentication**: User login/signup is simulated

## License

MIT
