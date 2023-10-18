import React from 'react'
import { BsSearch, BsJustify, BsHandThumbsUp } from 'react-icons/bs';

function Header({ OpenSidebar }) {
    return (
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar} />
            </div>
            <div className='header-left'>
                <h1>Hello Varun <BsHandThumbsUp className='icon' /></h1>
            </div>
            <div className='header-right'>
                <BsSearch className='icon' /><input type="search" placeholder='search...' visibility="hidden" />
            </div>
        </header>
    )
}

export default Header