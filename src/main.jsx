import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './pages/AboutPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import MissionPage from './pages/MissionPage.jsx';
import ResearchPage from './pages/ResearchPage.jsx';
import TermsPage from './pages/TermsAndPrivacy/TermsPage.jsx';
import PrivacyPage from './pages/TermsAndPrivacy/PrivacyPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: 'about',
    element: <AboutPage />,
  },
  {
    path: 'mission',
    element: <MissionPage />,
  },
  {
    path: 'projects',
    element: <ProjectsPage />,
  },
  {
    path: 'research',
    element: <ResearchPage />,
  },
  {
    path: 'terms',
    element: <TermsPage />,
  },
  {
    path: 'privacy',
    element: <PrivacyPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
