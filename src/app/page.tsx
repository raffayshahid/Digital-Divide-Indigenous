import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import Introduction from '@/components/Introduction/Introduction';
import StatsSection from '@/components/StatsSection/StatsSection';
import VideoSection from '@/components/VideoSection/VideoSection';
import Footer from '@/components/Footer/Footer';



const Home: NextPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Introduction />
        <VideoSection embedId="dQw4w9WgXcQ" />
        <StatsSection />
        <Footer />
      </div>
    </div>

  );
};

export default Home;
