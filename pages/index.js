import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import SocialMedia from "@/components/SocialMedia"
import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <title>Campaigning Source</title>
      </Head>
      <Layout>
        <SocialMedia />
        <Hero />
      </Layout>
    </>
  )
}


export default Home