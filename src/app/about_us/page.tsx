import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar/Navbar';
import AboutUs from "@/components/AboutUs/AboutUs"
const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
    </div>
  );
};

export default Home;
