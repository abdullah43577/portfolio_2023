import { Outlet } from 'react-router-dom';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';

export default function RootLayout() {
  return (
    <>
      <header className="text-zinc-700 dark:text-zinc-400 mb-16">
        <Navbar />
      </header>

      <main className="text-zinc-700 dark:text-zinc-400">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
