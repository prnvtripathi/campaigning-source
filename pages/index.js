import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import SocialMedia from "@/components/SocialMedia"
import Contact from "@/components/Contact"
import Head from "next/head"
import PastCustomers from "@/components/PastCustomers"
import Banner from "@/components/Banner"

const Home = () => {
  return (
    <>
      <Head>
        <title>Campaigning Source</title>
        <meta name="description" content="Campaigning Source" />
        <meta name="keywords" content="Campaigning Source" />
        <meta name="author" content="Campaigning Source" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="wuImTDqbWJwqAK-DAqsRtO-vJP6fxbe5wDrnEFc29Lw" />
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5963660164973789"
     crossorigin="anonymous"></script>
      </Head>
      <Layout>
        <SocialMedia />
        <Hero />
        <PastCustomers />
        <Banner />
        <Contact />
      </Layout>
    </>
  )
}


export default Home
