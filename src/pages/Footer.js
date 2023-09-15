import { Box, Button, Container, Grid } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../asstes/logo/logo.svg'
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='footer-section'>
            <Container>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Box>
                        <Box >
                            <img src={logo} alt="logo" />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <FacebookIcon sx={{ mx: 1 }} className='icon-footer' />
                        <InstagramIcon sx={{ mx: 1 }} className='icon-footer' />
                        <TwitterIcon sx={{ mx: 1 }} className='icon-footer' />
                        <LinkedInIcon sx={{ mx: 1 }} className='icon-footer' />
                    </Box>
                </Box>
                <hr className='line' />
                <Grid container spacing={3}>
                    <Grid item lg={7} md={7} sm={6} xs={12} >
                        <Grid container>
                            <Grid item lg={4} md={3} sm={6} sx={12}>
                                <ul className='list-group'>
                                    <li className='title-link'>Quick Links</li>
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
                                        <NavLink className="list-link" to='/pricing'>Pricing</NavLink>
                                    </li>

                                </ul>
                            </Grid>
                            <Grid item lg={3} md={3} sm={6} sx={12}>
                                <ul className='list-group'>
                                    <li className='title-link'>Help & Support</li>
                                    <li className='list-item'>
                                        <NavLink className="list-link" to='/'>FAQ</NavLink>
                                    </li>
                                    <li className='list-item'>
                                        <NavLink className="list-link" to='/blog'>Blog</NavLink>
                                    </li>
                                    <li className='list-item'>
                                        <NavLink className="list-link" to='/contact'>Contact</NavLink>
                                    </li>

                                    <li className='list-item'>
                                        <NavLink className="list-link" to='/'>Support</NavLink>
                                    </li>

                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item  lgOffset={1} lg={4} md={5} sm={6} xs={12} >
                        <Box  className="sub-section-body">

                            <Box className="title-sub">Subscribe to our Newsletter</Box>
                            <Box className="sub-section" component="from">
                                <input type='text' className='input-body' />
                                <Button variant='contained' className='btn' type='submit'>Subscribe </Button>
                            </Box>
                            <Box sx={{ display: "flex" , justifyContent:"space-between"}}>
                                <Box className="call-us-section">
                                    <Box>Call us</Box>
                                    <Box>+91 81286 83106 </Box>
                                </Box>
                                <Box className="call-us-section">
                                    <Box>email us</Box>
                                    <Box>info@boniksolutions.com </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer
