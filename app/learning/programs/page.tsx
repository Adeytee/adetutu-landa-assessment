import React from "react";
import SideMenu from "@/app/side-menu";
import Image from "next/image";
import img from "/public/images/computer-science.png"
import img1 from "/public/images/arrow.png"


const Programs = () => {
    return (
      <main className=" w-full max-w-8xl mx-auto font-sans">
      <div className="flex space-x-4 h-screen">
        <SideMenu/>
      <div className="container"  id="content-wrapper">
        <nav className="">
         <div className="pl-6 pt-8">
          <h1 className=""> Learning</h1>
         </div>
         <div className="mt-5 pl-0 ml-0 text-left">
            <div className="border border-bottom pl-0 ml-0"></div>
          </div>
        </nav>
        <div className="pt-8 pl-6">
          <ul className="flex space-x-4 pt-5">
            <li className="pr-6 pt-6">
              <a className=" active" href="/learning/programs">Programs & Degrees</a>
            </li>
            <li className="pl-6 pt-6">
              <a className="" href="/learning/courses">Short Courses</a>
            </li>
        </ul>
        </div>
        <div className=" pt-6">
        <div className="flex pt-6 pl-6 grid grid-cols-3 gap-4" id="program" >
            <div className="col-span-2">
                 <input type="text" className="form-input rounded text-black w-full" placeholder="Search for Programs..."/>
            </div>
            <div className="filter pl-4 contrast-200">
                 <input type="search" className="form-input rounded text-black w-px"  placeholder="F"/>
            </div>
        </div>
        </div>
        <div className="pt-10">
         <div className="grid grid-rows-3 grid-flow-col pl-6 pt-8">
          <div className="boxes row-span-3 col-span-3">
            <div className="flex pt-5 ml-4">
                <Image
                  src={img}
                  alt=""
                  width={60}
                  height={60}
                />
                <div className="pl-4">
                    <p className="text-blue-600">University of Lagos</p>
                    <p className="text-black-600">Bachelor of Science (Bsc) in Computer Science</p>
                </div>
                <div className="flex">
                <div className="grid grid-cols-8 font-sans pt-6" >
                    <p className="col-end-8 text-xs text-yellow-800 ongoing">Ongoing</p>
                    <Image
                    src={img1}
                    alt=""
                    width={5}
                    height={5}
                    className="pt-1 ml-4"
                    />
                </div>
                </div>
            </div>
          </div>
         </div>
         <div className="grid grid-rows-3 grid-flow-col pl-6 pt-8">
          <div className="boxes row-span-3 col-span-2">
            <div className="flex pt-5 ml-4">
                <Image
                  src={img}
                  alt=""
                  width={60}
                  height={60}
                  className=""
                />
                <div className="pl-4">
                    <p className="text-blue-600">University of Abuja</p>
                    <p className="text-black-600">Bachelor of Science (Bsc) in Computer Science</p>
                </div>
                <div className="flex">
                <div className="grid grid-cols-6 font-sans pt-6" >
                    <p className="col-end-6 text-xs text-green-800">Completed</p>
                </div>
                </div>
            </div>
          </div>
         </div>
         <div className="grid grid-rows-3 grid-flow-col pl-6 pt-8">
          <div className="boxes row-span-3 col-span-2">
            <div className="flex pt-5 ml-4">
                <Image
                  src={img}
                  alt=""
                  width={60}
                  height={60}
                  className=""
                />
                <div className="pl-4">
                    <p className="text-blue-600">University of Lagos</p>
                    <p className="text-black-600">Bachelor of Science (Bsc) in Computer Science</p>
                </div>
                <div className="flex">
                <div className="grid grid-cols-6 font-sans pt-6" >
                    <p className="col-end-6 text-xs text-green-800">Suspended</p>
                </div>
                </div>
            </div>
          </div>
         </div>
        </div>
      </div>
      </div>
    </main>
    )
  }
  
  export default Programs