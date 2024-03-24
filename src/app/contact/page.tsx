import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import Contact from "@/components/Contact/Contact"
const Home: NextPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
