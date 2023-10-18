import React from 'react';
import path from '../src/user.png';
import {
     BsHexagon, BsGrid1X2Fill, BsFillArchiveFill, BsPercent, BsPeopleFill,
BsXCircleFill, BsCashCoin, BsHeadset
}
    from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand text-white'>
                    <BsHexagon className='icon_header' /> DASHBOARD
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}><BsXCircleFill className='icon' /></span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillArchiveFill className='icon' /> Products
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeopleFill className='icon' /> Customers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsCashCoin className='icon' /> Income
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPercent className='icon' /> Promote
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsHeadset className='icon' /> Help
                    </a>
                </li>
            </ul>
            <div className='sidebar-user'>
                <div className="user-img">
                    <img src={path} alt=""  className='img-fluid'/>
                </div>
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>
                        <span>Praveen<br /> Junior Developer</span>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar