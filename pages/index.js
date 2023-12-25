import { useEffect, useState } from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import SocialMedia from '@/components/SocialMedia';
import Contact from '@/components/Contact';
import PastCustomers from '@/components/PastCustomers';
import Banner from '@/components/Banner';
import FloatingForm from '@/components/FloatingForm';

const Home = () => {
  const [isFormVisible, setFormVisibility] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormVisibility(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const closeForm = () => {
    setFormVisibility(false);
  };

  return (
    <>
      <Head>
        {/* ... your head content ... */}
      </Head>
      <Layout>
        <SocialMedia />
        <Hero />
        <PastCustomers />
        <Banner />
        <Contact />
        {isFormVisible && <FloatingForm closeForm={closeForm} />}
      </Layout>
    </>
  );
};

export default Home;
