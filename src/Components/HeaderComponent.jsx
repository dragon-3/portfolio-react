import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import '../Navbar.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>



function HeaderComponent() {

    const [toggleMenu, setToggleMenu] = useState(false)

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return() => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

        return (
            <div >

                <nav>
                    {(toggleMenu || screenWidth > 500) && (
                        <div className="list">
                        <Link to="/" style={{textDecoration: 'none'}}><a className="items">Home</a></Link>              
                        <Link to="/blog" style={{textDecoration: 'none'}}><a className="items">Blog</a></Link>
                        <Link to="/resume" style={{textDecoration: 'none'}}><a className="items">Resume</a></Link>
                        </div>
                    )}
                    <button onClick={toggleNav} className="btn">Menu</button>
                
                </nav>
                
                

                
                
            </div>
            
        )
}

export default HeaderComponent