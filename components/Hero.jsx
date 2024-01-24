import { motion } from "framer-motion";
import { Satisfy } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Component() {
  return (
    <>
      <section className="md:flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "inertia", velocity: 50 }}
          className="flex items-center justify-center w-full px-6 py-8 md:h-[41rem] md:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-300 md:text-4xl">Make your startup a<br /><span className={`text-primaryText font-bold md:text-5xl ${satisfy.className}`}>Brand</span></h2>

            <p className="mt-4 text-sm text-gray-500 md:text-base">Your one-stop solution for political promotion and business development. We help you navigate the political landscape and grow your business.</p>

            <div className="flex flex-col mt-6 space-y-3 md:space-y-0 md:flex-row">
              <Link href="/services" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-primaryText/50 rounded-md hover:bg-primaryText/70">Get Started</Link>
              <Link href="/about" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md md:mx-4 hover:bg-gray-300">Learn More</Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "inertia", velocity: 50 }}
          className="w-full h-64 md:w-1/2 md:h-auto">
          <div className="w-full h-full">
            <Image src="/hero.jpg" width={1000} height={1000} className="opacity-60" />
          </div>
        </motion.div>
      </section>
    </>
  );
}
