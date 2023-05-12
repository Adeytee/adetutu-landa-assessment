import React from "react";
import SideMenu from "../side-menu";

const Learning = () => {
    return (
      <main className=" w-full max-w-8xl mx-auto font-sans ...">
      <div className="flex space-x-4 h-screen ...">
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
      </div>
      </div>
    </main>
    )
  }
  
  export default Learning