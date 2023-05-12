import React from "react";
import Image from "next/image";
import img1 from "/public/images/landa.jpg"
import img2 from "/public/images/dash-icon.jpg"
import img3 from "/public/images/learning.png"
import Link from "next/link";

const SideMenu = () => {
    return (
    <div className=" w-80">
        <div id="sidebar" className="h-screen container pr-0">
          <ul className="px-3">
                <li className="">
                    <Image 
                    width={100}
                    height={100}
                    src={img1}
                    alt="" 
                    className="px-4 pt-6" />
                </li>
            <Link href="/dashboard" className="">
                <li className="pt-10 px-4 flex mt-4"> 
                <span className="pr-4">
                    <Image 
                    width={20}
                    height={30}
                    src={img2}
                    alt=""/>
                </span>
                   Dashboard
                </li>
            </Link>
             <Link href="/learning">
             <li className="pt-10 px-4 flex "> <span className="pr-4">
                    <Image 
                    width={25}
                    height={42}
                    src={img3}
                    alt=""/>
                </span>
                    Learning
                </li>
             </Link>
          </ul>
        </div>
    </div>
    )
}

export default SideMenu