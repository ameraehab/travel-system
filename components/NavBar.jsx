import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

export const NavBar = () => {
  return (
  <nav className="flex justify-between items-center max-w-screen-xl mx-auto px-4  py-5 relative z-30">
      <Link href="/">
<Image src="/hilink-logo.svg" alt="Logo" width={74} height={29} />

</Link>
<ul className=" hidden h-full gap-12 lg:flex">
{NAV_LINKS.map((link)=>(
  <Link href={link.href} key={link.key} className="text-base text-gray-600 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold ">
{    link.lable} 
 </Link>
))
}

 </ul>
 <div className=" lg:flex justify-between items-center hidden">
<Button 
type="button"
title="Login"
icon="/user.svg"
variant="btn_dark_green"

/>
 </div>
</nav>
  )
}

export default NavBar;