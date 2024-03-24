import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import Research from "@/components/Research/Research"
import { Hepta_Slab } from 'next/font/google';
const Home: NextPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Research />
      </div>
    </div>
  );
};

export default Home;
