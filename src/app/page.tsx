import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar/Navbar';
import Introduction from '@/components/Introduction/Introduction';
import StatsSection from '@/components/StatsSection/StatsSection';
const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <StatsSection />
    </div>
  );
};

export default Home;
