import React from "react";
import SideMenu from "../side-menu";

const Dashboard = () => {
  return (
    <main className=" w-full max-w-8xl mx-auto">
      <div className="flex space-x-4 h-screen ...">
        <SideMenu/>
      <div className="container pt-6"  id="content-wrapper">
      <h1 className="">Dashboard Page</h1>
      </div>
      </div>
    </main>
  )
}

export default Dashboard