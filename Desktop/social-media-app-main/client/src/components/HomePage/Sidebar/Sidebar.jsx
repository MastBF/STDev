import React from 'react'
import './Sidebar.css'
import { FaHome } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { IoBookmarks } from "react-icons/io5";
import { IoIosAnalytics } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";


function Sidebar() {
  return (
    <div className='sidebar'>
        <a href="" className='menu-item active'>
            <FaHome /> 
            <span><i className='Side-buttons'></i></span> <h3>Home</h3>
            </a>
            <a href="" className='menu-item'>
            <MdExplore />
            <span><i className='Side-buttons'></i></span> <h3>Explore</h3>
            </a>
            <a href="" className='menu-item'>
            <IoIosNotifications />
            <span><i className='Side-buttons'></i></span> <h3>Notifications</h3>
            </a>
            <a href="" className='menu-item'>
            <AiFillMessage />
            <span><i className='Side-buttons'></i></span> <h3>Messagse</h3>
            </a>
            <a href="" className=' menu-item'>
            <IoBookmarks />
            <span><i className='Side-buttons'></i></span> <h3>Bookmarks</h3>
            </a>
            <a href="" className='menu-item'>
            <IoIosAnalytics />
            <span><i className='Side-buttons'></i></span> <h3>Analytycs</h3>
            </a>
            <a href="" className='menu-item'>
            <MdOutlineSettings />
            <span><i className='Side-buttons'></i></span> <h3>Settings</h3>
            </a>
            
    </div>
  )
}

export default Sidebar;