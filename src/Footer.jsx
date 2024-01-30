import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TbBrandShopee } from "react-icons/tb";

function Footer() {
  return (
    <section className="w-full flex justify-center bg-white h-full text-white">
      <div className=" w-full bg-[#7a8b6f] md:h-[15rem] h-[10rem] flex flex-col justify-center items-center">
        <p>สั่งซื้อสินค้าได้ที่</p>
        <div className=" flex gap-3 mt-6">
          <RiFacebookCircleLine size={30} />
          <FaInstagram size={30} />
          <TbBrandShopee size={30} />
        </div>
        <div className=" mt-3 p-2 text-[11px]">
          <p>
            เว็บไซต์นี้จัดทำขึ้นเพื่อการศึกษาและจำลองการทำกิจการในรายวิชา BCG
            เท่านั้น
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
