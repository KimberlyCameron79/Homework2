import React from 'react'

import './SideBar.css'
// import { SidebarData } from "../../data/Data"; 
import {Icon}from "@iconify/react" 


const SideBar = (content1) => {
   // const [selected,setSelected]= useState(0)


    return (
      <>
     <div id="content1">
     
         
       
        {/*menu*/}
        <div className="menu">
            <div className="menuItem">
                  <div>
                     <Icon icon="uil:estate" />
                  </div>
                  <span>Dashboard</span>
               </div>
               </div>
            <div className="menuItem">
                  <div>
                     <Icon icon="bi:clipboard-check-fill" />
                  </div>
                  <span>Orders</span>
                  </div>
            <div className="menuItem">
                  <div>
                     <Icon icon="fa-solid:users" />
                  </div>
                  <span>Customers</span>
                  </div>
            <div className="menuItem">
                  <div>
                     <Icon icon="fontisto:shopping-package" />
                  </div>
                  <span>Products</span>
            <div className="menuItem">
                  <div>
                     <Icon icon="ant-design:area-chart-outlined" />
                  </div>
                  <span>Analytics</span>

            <div className="menuItem">
                  <div>
                     <Icon icon="uil:signout" />
                  </div>
                  <span>Sign Out</span> 
                  </div>  
                            
               <span></span>


            </div>
        </div>
        </div>
        
        </>  
    )
    
 
  
};

export default SideBar