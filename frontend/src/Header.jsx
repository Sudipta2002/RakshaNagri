import React, { useState } from 'react'
import {Link} from "react-router-dom"
const Title = () => {
    return (
      <>
        <Link to="/">
          <img className="h-16 p-1 rounded-full" alt="logo" src="https://thumbs.dreamstime.com/z/holding-hand-logo-community-help-monoline-style-130926990.jpg" />
        </Link>
        <span className='header text-green-500'>Raksha<h1 className='header text-white'>Nagari</h1></span>
      </>
    ); 
  };
   const  Header = () => {
    const [login,setLogin]=useState(true);
    return (
      <div className="flex justify-between bg-blue-100  dark:bg-black shadow-xl">
        <Title />
        <div className="nav-items">
          <ul className='flex p-1 mr-6 mt-6 text-2xl  space-x-6'>
           
            <li>
              <Link className='text-green-500' to="/">Home</Link> 
            </li>
            <li>
              <Link  className='text-green-500' to="/create">Post</Link> 
            </li>
            <li>
              <Link  className='text-green-500' to="/account">My-account</Link> 
            </li>
              <li>
                {login?<Link className='text-green-500' to="/login">
                Login
            </Link>:<Link className='text-green-500' to="/logout">
                Logout
            </Link>}
            
                </li>
          </ul>
        </div> 
      </div>
    );
  };
  export default Header;

