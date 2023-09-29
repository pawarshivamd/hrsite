import { AppBar, Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';
import { theme } from '../../App';
import logo from '../../asstes/logo/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const [showMenu, SetShowMenu] = useState(false);
    const [fixedNavbar, setFixedNavbar] = useState(false); 
    const toggleMenu = () => {
        SetShowMenu(!showMenu);

    };
    const handleNavLinkClick = () => {
        if (showMenu) {
            SetShowMenu(false); 
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {

                setFixedNavbar(true);
            } else {
                setFixedNavbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav>
            <Container>
                <Box className='contact-navbar'>
                    <Typography component='ul' className='phone-section'>
                        <Typography component='li' className='phone-list'><span><LocalPhoneSharpIcon className='icon' sx={{ color: theme.palette.primary.primaryThemegreen }} /></span> +91 81286 83106</Typography>
                        <Typography component='li' className='phone-list'><span><MailIcon className='icon' sx={{ color: theme.palette.primary.primaryThemegreen }} /></span> info@boniksolutions.com</Typography>
                    </Typography>
                    <Box>
                        <FacebookIcon sx={{ mx: 1 }} />
                        <InstagramIcon sx={{ mx: 1 }} />
                        <TwitterIcon sx={{ mx: 1 }} />
                        <LinkedInIcon sx={{ mx: 1 }} />
                    </Box>
                </Box>
            </Container>
            <Box className={`main-navbar ${fixedNavbar ? 'fixed-navbar' : ''}`} >
                <Container>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box>
                            <Box >
                                <img src={logo} alt="logo" />
                            </Box>
                        </Box>
                        <Box className="menubar" onClick={toggleMenu} ><MenuIcon className='menu-icon' /></Box>
                        <Box className={`menun-section ${showMenu ? 'menu-visible' : 'menu-hidden'}`} >
                            <ul className='list-group'>
                                <li className='list-item'>
                                    <NavLink className="list-link" onClick={handleNavLinkClick} to='/'>Home</NavLink>
                                </li>
                                <li className='list-item'>
                                    <NavLink className="list-link" to='/about' onClick={handleNavLinkClick}>About</NavLink>
                                </li>
                                <li className='list-item'>
                                    <NavLink className="list-link" to='/service' onClick={handleNavLinkClick}>Service</NavLink>
                                </li>
                                <li className='list-item'>
                                    <NavLink className="list-link" to='/portfolio' onClick={handleNavLinkClick}>Portfolio</NavLink>
                                </li>
                                <li className='list-item'>
                                    <NavLink className="list-link" to='/blog' onClick={handleNavLinkClick}>Blogs</NavLink>
                                </li>
                                <li className='list-item'>
                                    <NavLink className="list-link" to='/pricing' onClick={handleNavLinkClick}>Pricing</NavLink>
                                </li>
                                <li className='list-item'>
                                    <NavLink className="list-link" to='/contact' onClick={handleNavLinkClick}>Contact</NavLink>
                                </li>
                                <Box className="login-section-ul">
                                    <Button variant="contained" to='/login' className='login-btn'  >Login in</Button>
                                </Box>
                            </ul>
                        </Box>
                        <Box className="login-section">
                            <Button variant="contained" to='/login' className='login-btn'  >Login in</Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </nav>
    );
}


export default Navbar
