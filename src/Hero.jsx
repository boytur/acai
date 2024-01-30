import { motion } from "framer-motion";
import heroImg from "./assets/hero img.webp";
import { Link } from "react-scroll";
import { GoArrowUpRight } from "react-icons/go";
import { CiDeliveryTruck } from "react-icons/ci";
import "../src/App.css";

function Hero() {
  const variantsLeft = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const variantsRight = {
    hidden: { opacity: 0, x: 100, rotate: -20 },
    visible: { opacity: 1, x: 0, rotate: 0 },
  };
  const variantsButtom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section
        id="hero"
        className="hero w-full h-full flex justify-center bg-white"
      >
        <div className="max-w-screen-xl w-full lg:flex md:p-5">
          {/* Img */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variantsRight}
            transition={{ duration: 1 }}
            className="w-full flex justify-center lg:order-last"
          >
            <img
              className="w-full max-w-[35rem] p-6 object-contain"
              src={heroImg}
              alt=""
            />
          </motion.div>
          {/* Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variantsLeft}
            transition={{ duration: 1 }}
            className="w-full flex flex-col justify-center items-center order-2 lg:p-20 p-2 text-left"
          >
            <div className="w-full">
              <h1 className="lg:text-[5rem] text-[4rem] text-center lg:text-left font-semibold">
                ACAI BOWL
              </h1>
            </div>
            <div className="p-2">
              <p>
                acai bowl is Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ipsum inventore beatae autem illum expedita modi tempora
                explicabo.
              </p>
            </div>
            <div className="lg:flex justify-between w-full mt-2 gap-4">
              <Link
                to="menu"
                className="w-full h-[3rem] m-1 bg-[#7a8b6f] rounded-full text-white lg:hover:scale-105 cursor-pointer flex items-center justify-center shadow-lg"
              >
                เมนู
              </Link>
              <button className="w-full h-[3rem] flex justify-center items-center gap-1 m-1 hover:scale-105 border border-black rounded-full shadow-md mt-5 lg:mt-1">
                <p>ติดต่อเรา</p>
                <GoArrowUpRight />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <div className=" w-full bg-[#e6ddd6] h-[10rem] flex justify-center items-center">
        <div className=" flex justify-between md:w-[30rem] w-[20rem]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variantsButtom}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-[#7a8b6f]"
          >
            <CiDeliveryTruck size={50} color="#7a8b6f" />
            <p>จัดส่งรวดเร็ว</p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variantsButtom}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-[#7a8b6f]"
          >
            <CiDeliveryTruck size={50} color="#7a8b6f" />
            <p>คิดไม่ออก</p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variantsButtom}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-[#7a8b6f]"
          >
            <CiDeliveryTruck size={50} color="#7a8b6f" />
            <p>คิดไม่ออก</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
