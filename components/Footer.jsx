import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaInstagram,
  FaChevronUp,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    // <footer className=" bg-gradient-to-r from-cyan-400 to-sky-300 text-center rounded-md text-black py-6">
    //     <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-12 pt-2">
    //         <Link href='/'>
    //             <Image src="/logo.png" alt="logo" width={200} height={200} />
    //         </Link>
    //         <div className="mt-4 md:mt-0">
    //             <div className="text-center flex flex-col md:flex-row gap-3 justify-evenly mb-4 md:mb-0">
    //                 <div className="hover:underline"><Link href="/">Home</Link></div>
    //                 <div className="hover:underline"><Link href="/contact">Influencers</Link></div>
    //                 <div className="hover:underline"><Link href="/about">About Us</Link></div>
    //                 <div className="hover:underline"><Link href="/contact">Contact</Link></div>
    //                 <div className="hover:underline"><Link href="https://myfameguru.com/">Social Media Boost</Link></div>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="flex flex-col md:flex-row justify-center items-center md:items-end">
    //         <div className="flex items-center text-2xl gap-4 mt-2 px-2">
    //             <Link target="_blank" href="https://www.instagram.com/campaigningsource/" className="transition hover:text-purple-500"><FaInstagram /></Link>
    //             <Link target="_blank" href="https://www.linkedin.com/company/100733755/" className="transition hover:text-blue-600"><FaLinkedin /></Link>
    //         </div>
    //     </div>
    //     <p className="py-4 select-none">© {year} Campaigning Source</p>
    // </footer>

    <footer className="bg-transparent bg-gradient-to-t from-blue-500/10 to-slate-950/10">
      <div className="mx-auto relative max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <Link
            href="#"
            class="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600 sm:p-3 lg:p-4"
          >
            <span className="sr-only">Back to top</span>
            <FaChevronUp />
          </Link>
        </div>

        <div className="lg:flex lg:justify-between">
          <div className="flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Link href="/">
              <Image
                src="/logo-white.png"
                alt="logo"
                width={200}
                height={200}
              />
            </Link>
          </div>

          <div className="lg:text-right">
            <p className="mx-auto mt-6 max-w-md text-center lg:text-left leading-relaxed text-gray-500 dark:text-gray-400">
              Your one-stop solution for political promotion and business
              development. We help you navigate the political landscape and grow
              your business.
            </p>

            <ul className="mt-12 flex flex-wrap justify-center lg:justify-end gap-6 md:gap-8 lg:gap-12">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Swags
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ul className="mt-12 flex justify-center lg:justify-end gap-6 md:gap-8">
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/campaigningsource/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>
          </li>
          <li>
            <Link
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              <span className="sr-only">Twitter</span>
              <FaXTwitter className="h-6 w-6" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/company/100733755/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-6 w-6" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
