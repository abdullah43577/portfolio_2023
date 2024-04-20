import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Pages/Main';
import About from './components/Pages/About';
import Projects from './components/Pages/Projects';
import ProjectDetail from './components/Pages/ProjectDetail';

import Resume from './components/Pages/Resume';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="about/resume" element={<Resume />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/:id" element={<ProjectDetail />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
