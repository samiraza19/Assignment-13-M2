import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaRegChartBar,
    FaAlignLeft,
    FaUser,
    FaPencilAlt,
    FaCloudMeatball,
    FaCalendarAlt,
    FaWallet,
    FaRocketchat
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/orderlist",
            name:"Order List",
            icon:<FaAlignLeft />
        },
        {
            path:"/orderdetails",
            name:"Order Details",
            icon:<FaRegChartBar/>
        },
        {
            path:"/costumer",
            name:"Costumer",
            icon:<FaUser />
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/reviews",
            name:"Reviews",
            icon:<FaPencilAlt />
        },
        {
            path:"/foods",
            name:"Foods",
            icon:<FaCloudMeatball />
        },
        {
            path:"/fooddetails",
            name:"Food Details",
            icon:<FaRegChartBar/>
        },
        {
            path:"/costumerdetails",
            name:"Costumer Details",
            icon:<FaUser />
        },
        {
            path:"/calender",
            name:"Calender",
            icon:<FaCalendarAlt />
        },
        {
            path:"/chat",
            name:"Chat",
            icon:<FaRocketchat />
        },
        {
            path:"/wallet",
            name:"Wallet",
            icon:<FaWallet />
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">G.B's</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;