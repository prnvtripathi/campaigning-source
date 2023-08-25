import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import SocialMedia from "@/components/SocialMedia"
import Contact from "@/components/Contact"
import Head from "next/head"
import PastCustomers from "@/components/PastCustomers"

const Home = () => {
  return (
    <>
      <Head>
        <title>Campaigning Source</title>
      </Head>
      <Layout>
        <SocialMedia />
        <Hero />
        <PastCustomers />
        <Contact />
      </Layout>
    </>
  )
}


export default Home