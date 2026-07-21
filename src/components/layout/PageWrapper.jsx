import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageWrapper() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
