import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

function SubmitIdea() {
  return (
    <>
        <Head>
            <title>Submit an Idea | Campaigning Source</title>
        </Head>
        <Navbar/>

        <section className="flex flex-col md:flex-row items-center justify-center w-11/12 mx-auto overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "inertia", velocity: 50 }}
          className="flex items-center justify-center text-center md:text-left w-full px-8 py-6 md:h-[41rem] md:w-1/2">
          <div className="max-w-2xl mb-28">
            <h2 className="text-3xl font-semibold text-gray-300 tracking-widest md:text-5xl">Give Us Feedback</h2>

            <p className="mt-4 text-sm text-gray-500 md:text-base">Your one-stop solution for political promotion and business development. We help you navigate the political landscape and grow your business.</p>

          
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "inertia", velocity: 50 }}
          className="w-full md:w-1/2 mx-auto p-2">
          <div className="w-full h-full mx-auto">
            <Image src="" width={500} height={500} alt="hero image" className="opacity-90 rounded-full border-2 -translate-x-24 md:translate-x-0" />
          </div>
        </motion.div>
      </section>


      <h1 className='text-center text-4xl'>How to Make Your Idea a Startup?</h1>
      <section className="flex flex-col md:flex-row-reverse items-center justify-center w-11/12 mx-auto overflow-x-hidden">
    
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "inertia", velocity: 50 }}
          className="flex items-center justify-center text-center md:text-left w-full px-8 py-6 md:h-[41rem] md:w-1/2">
          <div className="max-w-2xl mb-28">

            <p className="mt-4 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum sed arcu non odio euismod lacinia at quis. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. At risus viverra adipiscing at in tellus integer. Lacus luctus accumsan tortor posuere ac. Adipiscing elit duis tristique sollicitudin.</p>

          
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "inertia", velocity: 50 }}
          className="w-full md:w-1/2 mx-auto p-2">
          <div className="w-full h-full mx-auto">
            <Image src="" width={500} height={500} alt="hero image" className="opacity-90 rounded-full border-2 -translate-x-24 md:translate-x-0" />
          </div>
        </motion.div>
      </section>


      <h1 className='text-center text-4xl'>What documents are needed?</h1>
      <section className="flex flex-col md:flex-row items-center justify-center w-11/12 mx-auto overflow-x-hidden">
    
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "inertia", velocity: 50 }}
          className="flex items-center justify-center text-center md:text-left w-full px-8 py-6 md:h-[41rem] md:w-1/2">
          <div className="max-w-2xl mb-28">

            <p className="mt-4 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum sed arcu non odio euismod lacinia at quis. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. At risus viverra adipiscing at in tellus integer. Lacus luctus accumsan tortor posuere ac. Adipiscing elit duis tristique sollicitudin.</p>

          
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "inertia", velocity: 50 }}
          className="w-full md:w-1/2 mx-auto p-2">
          <div className="w-full h-full mx-auto">
            <Image src="" width={500} height={500} alt="hero image" className="opacity-90 rounded-full border-2 -translate-x-24 md:translate-x-0" />
          </div>
        </motion.div>
      </section>

      <h1 className='text-center text-4xl'>We'll make it for you!</h1>
      <section className="flex flex-col md:flex-row-reverse items-center justify-center w-11/12 mx-auto overflow-x-hidden">
    
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "inertia", velocity: 50 }}
          className="flex items-center justify-center text-center md:text-left w-full px-8 py-6 md:h-[41rem] md:w-1/2">
          <div className="max-w-2xl mb-28">

            <p className="mt-4 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum sed arcu non odio euismod lacinia at quis. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. At risus viverra adipiscing at in tellus integer. Lacus luctus accumsan tortor posuere ac. Adipiscing elit duis tristique sollicitudin.</p>
            

 {/* Customized upload button */}
 <label htmlFor="uploadInput" className="cursor-pointer bg-blue-500 space-y-5 fixed text-white py-2 px-4 rounded">
      Upload File
    </label>
    <input
      type="file"
      id="uploadInput"
      className="hidden mt-12"
      
    />


          </div>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "inertia", velocity: 50 }}
          className="w-full md:w-1/2 mx-auto p-2">
          <div className="w-full h-full mx-auto">
            <Image src="" width={500} height={500} alt="hero image" className="opacity-90 rounded-full border-2 -translate-x-24 md:translate-x-0" />
          </div>
        </motion.div>
      </section>


        <Footer/>
    </>
  )
}

export default SubmitIdea