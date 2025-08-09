import { FaHome, FaUser } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { MdContactMail } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="relative">
      <nav
        style={{ boxShadow: "0 10px 50px rgba(255, 255, 255, 0.4)" }}
        className="bg-[#173b5f] custom-shadow fixed bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-2xl border-gray-400 border">
        <ul className="text-white text-2xl flex justify-center">
          <li className="transition-all duration-500 p-3 rounded-full hover:bg-blue-400 hover:shadow-2xl">
            <Link href={"#banner"}>
              <FaHome />
            </Link>
          </li>
          <li className="transition-all duration-500 p-3 rounded-full hover:bg-blue-400 hover:shadow-2xl">
            <Link href={"#about"}>
              <FaUser />
            </Link>
          </li>
          <li className="transition-all duration-500 p-3 rounded-full hover:bg-blue-400 hover:shadow-2xl">
            <Link href={"#experience"}>
              <BsBriefcaseFill />
            </Link>
          </li>
          <li className="transition-all duration-500 p-3 rounded-full hover:bg-blue-400 hover:shadow-2xl">
            <Link href={"#projects"}>
              <GoProjectRoadmap />
            </Link>
          </li>
          <li className="transition-all duration-500 p-3 rounded-full hover:bg-blue-400 hover:shadow-2xl">
            <Link href={"#contact"}>
              <MdContactMail />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
