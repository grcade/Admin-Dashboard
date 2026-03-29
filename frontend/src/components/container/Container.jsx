import { Outlet } from "react-router";
import { Header, Sidebar } from "../index";
import { useState } from "react";



const Container = () => {

const [sidebar, setSidebar] = useState(true);

    return (
      <div className="flex min-h-screen ">
        <Sidebar sidebar={sidebar} />
        <div className="flex-1 sm:ml-64">

            <Header setSidebar={setSidebar} sidebar={sidebar} />


          <div className="mt-16 p-4 overflow-hidden">
            <Outlet />
          </div>


        </div>
      </div>
    )
  }



export default Container;
