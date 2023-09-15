import { AppBar, Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';
import { theme } from '../../App';
import logo from '../../asstes/logo/logo.svg'
import styled from 'styled-components';
const Navbar = () => {
    const ListGroup = styled.ul`
    display: flex;
    flex-wrap:wrap;
    .list-item {
      margin-inline: 10px;

      .list-link {
        color: ${({ theme }) => theme.palette.primary.white};
        position: relative;
        font-size: 17px;
        font-weight:600;
        &::after {
          content: "";
          position: absolute;
          background: ${({ theme }) => theme.palette.primary.primaryThemegreen};
          height: 2px;
          width: 0;
          left: 0;
          bottom: -10px;
          transition: 0.3s;
        }

        &:hover {
          color: ${({ theme }) => theme.palette.primary.primaryThemegreen};
        }

        &.active {
          color: ${({ theme }) => theme.palette.primary.primaryThemegreen};
          &::after{
            width:100%;
          }
        }

        &:hover::after {
          width: 100%;
        }
      }
    }
  `;


    return (
        <nav>
            <Container>
                <Typography component='div' className='contact-navbar'>
                    <Typography component='ul' className='phone-section'>
                        <Typography component='li' className='phone-list'><span><LocalPhoneSharpIcon className='icon' sx={{ color: theme.palette.primary.primaryThemegreen }} /></span> +91 81286 83106</Typography>
                        <Typography component='li' className='phone-list'><span><MailIcon className='icon' sx={{ color: theme.palette.primary.primaryThemegreen }} /></span> info@boniksolutions.com</Typography>
                    </Typography>
                    <Typography component='div'>
                        <FacebookIcon sx={{ mx: 1 }} />
                        <InstagramIcon sx={{ mx: 1 }} />
                        <TwitterIcon sx={{ mx: 1 }} />
                        <LinkedInIcon sx={{ mx: 1 }} />
                    </Typography>
                </Typography>
            </Container>
            <Typography sx={{ background: theme.palette.primary.main }} className='main-navbar'>
                <Container>
                    <Typography component='div' sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography component='div'>
                            <Box >
                                <img src={logo} alt="logo" />
                            </Box>
                        </Typography>
                        <ListGroup style={{ display: "flex" }} className='list-group'>
                            <li className='list-item'>
                                <NavLink className="list-link" to='/'>Home</NavLink>
                            </li>
                            <li className='list-item'>
                                <NavLink className="list-link" to='/about'>About</NavLink>
                            </li>
                            <li className='list-item'>
                                <NavLink className="list-link" to='/service'>Service</NavLink>
                            </li>
                            <li className='list-item'>
                                <NavLink className="list-link" to='/portfolio'>Portfolio</NavLink>
                            </li>
                            <li className='list-item'>
                                <NavLink className="list-link" to='/blog'>Blogs</NavLink>
                            </li>
                            <li className='list-item'>
                                <NavLink className="list-link" to='/pricing'>Pricing</NavLink>
                            </li>
                            <li className='list-item'>
                                <NavLink className="list-link" to='/contact'>Contact</NavLink>
                            </li>
                        </ListGroup>
                        <Typography component='div'>
                            <Button variant="contained" to='/login' className='login-btn'  >Login in</Button>
                        </Typography>
                    </Typography>
                </Container>
            </Typography>
        </nav>
    )
}


export default Navbar
