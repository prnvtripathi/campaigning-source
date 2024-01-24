import { motion } from "framer-motion";
import BlurBox from "./BlurBox";
import { Satisfy } from "next/font/google";
import HomeAbout from "./HomeAbout";

const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Component() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "inertia", velocity: 50 }}
        className="w-full h-[42rem] py-12 md:py-24 lg:py-32 bg-bg flex justify-center items-center"
      >
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1>
                <span
                  className={`absolute text-white text-lg -rotate-45 -left-[34rem] right-0 ${satisfy.className}`}
                >
                  Welcome to {` `}
                </span>

                <span className="text-3xl font-bold tracking-tighter sm:text-6xl">
                  Campaigning Source
                </span>
              </h1>
              <p className="text-xs mx-auto max-w-[700px] text-gray-500 md:text-xl ">
                Your one-stop solution for political promotion and business
                development. We help you navigate the political landscape and
                grow your business.
              </p>
            </div>
          </div>
          <BlurBox />
        </div>
      </motion.section>

      <HomeAbout />
    </>
  );
}
