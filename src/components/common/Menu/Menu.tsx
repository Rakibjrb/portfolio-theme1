import { FaHome, FaUser } from 'react-icons/fa';
import { GoProjectRoadmap } from "react-icons/go";
import { MdContactMail } from 'react-icons/md';
import { BsBriefcaseFill } from 'react-icons/bs';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className="min-h-screen z-50 fixed left-1 lg:left-5 top-[40%]">
      <nav className="p-2 rounded-2xl border-white border nav-design">
        <ul className="text-white text-2xl">
          <li className="transition-all duration-500 p-3 rounded-full hover:bg-blue-400 hover:shadow-2xl"><Link href={"#banner"}><FaHome /></Link></li>
          <li className="transition-all duration-500 p-3 rounded-full hover:bg-blue-400 hover:shadow-2xl"><Link href={"#about"}><FaUser /></Link></li>
          <li className="transition-all duration-500 p-3 rounded-full hover:bg-blue-400 hover:shadow-2xl"><Link href={"#experience"}><BsBriefcaseFill /></Link></li>
          <li className="transition-all duration-500 p-3 rounded-full hover:bg-blue-400 hover:shadow-2xl"><Link href={"#projects"}><GoProjectRoadmap /></Link></li>
          <li className="transition-all duration-500 p-3 rounded-full hover:bg-blue-400 hover:shadow-2xl"><Link href={"#contact"}><MdContactMail /></Link></li>
        </ul>
      </nav>
    </div>
  )
}
