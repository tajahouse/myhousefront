import React from 'react';
import Link from 'antd/es/typography/Link';
import '../styles/Header.css';
const Header = () =>{
    return(
        <div className='header'>
          <span className='nav_bar'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </span>
        </div>

    )
}

export default Header;