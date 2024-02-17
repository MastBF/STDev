import React from 'react'
import ProfilePic from '../images/profile-1.jpg'
import './Left.css'
import Sidebar from '../Sidebar/Sidebar'

function Left() {
  return (
    <div className='left'> 
    <div className='profile-part'>
        <a className='profile'>
            <div className='profile-photo'>
                <img src={ProfilePic} alt="" />
            </div>
            <div className='handle'>
                <h4>Mike Ayi</h4>
                <p className='text-muted'>
                    @miyi
                </p>
            </div>
        </a>
        </div>
        <Sidebar />
        
    </div>

  )
}


export default Left;
