import doubleTrouble from "./assets/1.double trouble.jpg";
import CrunchyNutty from "./assets/2.crunchy nutty.jpg";
import BerryAwesome from "./assets/3.berry awesome.jpg";
import YogurtSwirl from "./assets/4.yogurt swirl.jpg";
import AvocadoGreenBowl from "./assets/5.avocado green bowl.jpg";
import glowBowl from "./assets/6.glow bowl.jpg";
import { IoCheckmark } from "react-icons/io5";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function Menu() {
  // Framer Motion variants for animation
  const controls = useAnimation();
  // Use the controls to animate elements when the user scrolls
  useEffect(() => {
    // Function to handle scroll events and trigger animations
    const handleScroll = () => {
      const yOffset = window.scrollY;
      const triggerOffset = window.innerHeight / 10;

      if (yOffset > triggerOffset) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 50 }, { immediate: true });
      }
    };
    document.addEventListener("scroll", handleScroll);
    // Remove event listener when the component unmounts to prevent memory leaks
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  return (
    <section
      id="menu"
      className="w-full flex justify-center bg-white h-full text-[#2c3c23]"
    >
      <div className="max-w-screen-xl w-full lg:flex md:p-5 flex-col">
        <div>
          <div className=" flex w-full justify-center text-[2rem] m-2 mb-5">
            <h1>เมนูของเรา</h1>
          </div>
        </div>

        {/* 1 */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 1 * 0.05 }}
          className="w-full lg:h-[35rem] lg:flex p-2"
        >
          <div className="w-full h-full">
            <img
              src={doubleTrouble}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-white w-full h-full p-6">
            <div className=" lg:text-[3rem] md:text-[5rem] text-[2.5rem] font-semibold">
              <h1>Double trouble</h1>
            </div>
            <div className="flex flex-col gap-3 md:gap-5">
              <div className="text-lg font-semibold md:text-[1.5rem]">
                <p>รายการท็อปปิ้ง</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>สตรอว์เบอร์รี่</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>เนยถั่ว</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>ช็อคโกแลตฟัดจ์</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>คาเคานิบส์</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>มะพร้าว</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>ถั่วบด</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1rem] pl-2">
                <p className="border p-2 rounded-full px-5 bg-[#37b537] text-white">
                  260 calories
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2 */}

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 4 * 0.05 }}
          className="w-full lg:h-[35rem] lg:flex p-2"
        >
          <div className="w-full h-full order-1">
            <img
              src={CrunchyNutty}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-white w-full h-full p-6">
            <div className=" lg:text-[3rem] md:text-[5rem] text-[2.5rem] font-semibold">
              <h1>Crunchy nutty</h1>
            </div>
            <div className="flex flex-col gap-3 md:gap-5">
              <div className="text-lg font-semibold md:text-[1.5rem]">
                <p>รายการท็อปปิ้ง</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>อาซาอิ</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>เนยถั่ว</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>กล้วยหอม</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>คาเคานิบส์</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>มะพร้าวผง</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>ถั่วบด</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1rem] pl-2">
                <p className="border p-2 rounded-full px-5 bg-[#37b537] text-white">
                  265 calories
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 7 * 0.05 }}
          className="w-full lg:h-[35rem] lg:flex p-2"
        >
          <div className="w-full h-full">
            <img
              src={BerryAwesome}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-white w-full h-full p-6">
            <div className=" lg:text-[3rem] md:text-[5rem] text-[2.5rem] font-semibold">
              <h1>Berry awesome</h1>
            </div>
            <div className="flex flex-col gap-3 md:gap-5">
              <div className="text-lg font-semibold md:text-[1.5rem]">
                <p>รายการท็อปปิ้ง</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>สตรอว์เบอร์รี่</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>กล้วย</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>เมล็ดฟักทอง</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>คาเคานิบส์</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>มะพร้าวผง</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>เมล็ดเจีย</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1rem] pl-2">
                <p className="border p-2 rounded-full px-5 bg-[#37b537] text-white">
                  260 calories
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 */}
        <div className="w-full lg:h-[35rem] lg:flex p-2">
          <div className="w-full h-full order-1">
            <img
              src={YogurtSwirl}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-white w-full h-full p-6">
            <div className=" lg:text-[3rem] md:text-[5rem] text-[2.5rem] font-semibold">
              <h1>Yogurt swirl</h1>
            </div>
            <div className="flex flex-col gap-3 md:gap-5">
              <div className="text-lg font-semibold md:text-[1.5rem]">
                <p>รายการท็อปปิ้ง</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>อาซาอิ</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>กรีกโยเกิร์ต</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>สตรอว์เบอร์รี่</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>บลูเบอรี่</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>มะม่วง</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>กราโนล่าน้ำผึ้ง</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1rem] pl-2">
                <p className="border p-2 rounded-full px-5 bg-[#37b537] text-white">
                  250 calories
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="w-full lg:h-[35rem] lg:flex p-2">
          <div className="w-full h-full">
            <img
              src={AvocadoGreenBowl}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-white w-full h-full p-6">
            <div className=" lg:text-[3rem] md:text-[5rem] text-[2rem] font-semibold">
              <h1>Avocado green bowl</h1>
            </div>
            <div className="flex flex-col gap-3 md:gap-2">
              <div className="text-lg font-semibold md:text-[1.5rem]">
                <p>รายการท็อปปิ้ง</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>อาซาอิ</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>สตอเบอรี่</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>มะม่วง</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>เมล็ดเซีย</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>มะพร้าวขูด</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>เมล็ดฟักทอง</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>เมล็ดแฟลกซ์</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>กราโนล่า</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1rem] pl-2">
                <p className="border p-2 rounded-full px-5 bg-[#37b537] text-white">
                  245 calories
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="w-full lg:h-[35rem] lg:flex p-2">
          <div className="w-full h-full order-1">
            <img src={glowBowl} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="bg-white w-full h-full p-6">
            <div className=" lg:text-[3rem] md:text-[5rem] text-[2.5rem] font-semibold">
              <h1>Glow bowl</h1>
            </div>
            <div className="flex flex-col gap-3 md:gap-5">
              <div className="text-lg font-semibold md:text-[1.5rem]">
                <p>รายการท็อปปิ้ง</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>อาซาอิ</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>บลูเบอรี่</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>กล้วย</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>เมล็ดแฟลกซ์</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>เมล็ดฟักทอง</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1.6rem]">
                <IoCheckmark color="#008000" />
                <p>โกโก้นิบส์</p>
              </div>
              <div className=" flex items-center gap-3 md:text-[1rem] pl-2">
                <p className="border p-2 rounded-full px-5 bg-[#37b537] text-white">
                  260 calories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;