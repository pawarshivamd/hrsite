import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Box, Container, Typography, Grid, Button, ThemeProvider, Card, CardActions, CardContent, Divider, ImageList, ImageListItem, ListSubheader, ImageListItemBar, IconButton, withTheme } from '@mui/material';
import imgbg from '../asstes/img/hero/bg1.svg'
import { theme } from '../App';
import aboutimg from '../asstes/img/aboutimg.png'
import TodayIcon from '@mui/icons-material/Today';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import imgaboutbg from '../asstes/img/bg-about.svg'
import ourUserImg from '../asstes/img/user-ours.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, NavLink } from 'react-router-dom';
import TestimonialSection from './components/TestimonialSection';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import blog1 from "../asstes/img/blog1.png"
import StarIcon from '@mui/icons-material/Star';
import ForumIcon from '@mui/icons-material/Forum';
import ContatSection from './components/ContatSection';

const WorkApi = [
  {
    id: "0",
    imgwork: "https://avatars.mds.yandex.net/i?id=c03990a4c61e4c6af6b29f82f3dc7955bcc9a628-9848534-images-thumbs&n=13",
    category: "Development",
  },
  {
    id: "1",
    imgwork: "https://avatars.mds.yandex.net/get-altay/927916/2a000001882ddaedc6f7efde8a26ef0bc7f8/XXL_height",
    category: "ui/ux",
  },
  {
    id: "2",
    imgwork: "http://ic.pics.livejournal.com/zm_sochi/17660719/997581/997581_original.jpg",
    category: "Development",
  },
  {
    id: "3",
    imgwork: "https://avatars.mds.yandex.net/get-altay/6302373/2a000001806157581fabdf219e721cf3c5ad/XXL_height",
    category: "Branding",
  },
  {
    id: "4",
    imgwork: "https://www.occrp.org/images/sochi.jpeg",
    category: "SEO",
  },
  {
    id: "5",
    imgwork: "https://avatars.mds.yandex.net/get-altay/1592431/2a00000176ab7875a20ce65b67cecef8bee6/XXXL",
    category: "Branding ",
  },
  {
    id: "6",
    imgwork: "https://cdn.wallpapersafari.com/13/42/p5IsNb.jpg",
    category: "SEO",
  },
  {
    id: "7",
    imgwork: "https://storage.myseldon.com/news-pict-3c/3C710E76E0B047795BC1EF033B445A90",
    category: "Wordpress",
  },
  {
    id: "8",
    imgwork: "https://i.pinimg.com/originals/31/bd/2c/31bd2cbacb08bf6f58449eb0f875be30.jpg",
    category: "Wordpress",
  },

]

const Home = () => {
  const [workitem, setworkitem] = useState(WorkApi);

  const filteritem = (cate) => {
    const updetdata = WorkApi.filter((curEle) => {
      return curEle.category === cate;

    })
    setworkitem(updetdata)
  }
  return (

    <ThemeProvider theme={theme}>
      <Swiper

        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper hero-slider"
        style={{ "--swiper-pagination-color": theme.palette.primary.primaryThemegreen, }}
      >
        <SwiperSlide className='swiper-slide' style={{ backgroundImage: `url(${imgbg})` }} >
          <Grid container className='hero-body'>
            <Grid item lg={6} mg={8} sm={12} >
              <Typography variant='h1' className='main-text' color={theme.palette.primary.textSecondry} >Everything you need to scale a global team</Typography>
              <p className='sub-text'>Deel helps thousands of companies expand globally with unmatched speed and flexibility. It's global hiring, HR and payroll in just one system.</p>
              <Button variant="contained" size='large' style={{ backgroundColor: theme.palette.primary.primaryThemegreen, marginTop: "15px" }}>Started</Button>
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide' style={{ backgroundImage: `url(${imgbg})` }} >
          <Grid container className='hero-body'>
            <Grid item lg={6} mg={8} sm={12} >
              <Typography variant='h1' className='main-text' color={theme.palette.primary.textSecondry} >Everything you need to scale a global team</Typography>
              <p className='sub-text'>Deel helps thousands of companies expand globally with unmatched speed and flexibility. It's global hiring, HR and payroll in just one system.</p>
              <Button variant="contained" size='large' style={{ backgroundColor: theme.palette.primary.primaryThemegreen, marginTop: "15px" }}>Started</Button>
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide' style={{ backgroundImage: `url(${imgbg})` }} >
          <Grid container className='hero-body'>
            <Grid item lg={6} mg={8} sm={12} >
              <Typography variant='h1' className='main-text' color={theme.palette.primary.textSecondry} >Everything you need to scale a global team</Typography>
              <p className='sub-text'>Deel helps thousands of companies expand globally with unmatched speed and flexibility. It's global hiring, HR and payroll in just one system.</p>
              <Button variant="contained" size='large' style={{ backgroundColor: theme.palette.primary.primaryThemegreen, marginTop: "15px" }}>Started</Button>
            </Grid>
          </Grid>
        </SwiperSlide>
      </Swiper>
      <Typography component="div" className='about-section' sx={{ background: `url(${imgaboutbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", position: "relative", mb: 5 }}>
        <Container maxWidth="lg" border="1px solid red">
        <Grid container >
          <Grid item lg={6} md={6} sm={12} xs={12} >
              <Box  className="img-box">
                <img src={aboutimg} alt="" width="100%" height="100%" sx={{position:"absolute"}} />
              </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography className='about-contain-body'>
              <Typography component="p" className='about-text'><span className='line'></span> About Company</Typography>
              <Typography variant="h3" className='main-title'>More Than <span className='number-count'>15+</span> Years,we Provide Bussiness Solutions
              </Typography>
              <Typography className='sub-title'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.</Typography>

              {/* about prea body 1 */}

              <Typography component="div" sx={{ display: "flex" }} className='about-pera-body'>
                <Typography component="div" className='icon-body'>

                  <Typography component="div" className='icon-circle'>
                    <TodayIcon sx={{ color: theme.palette.primary.primaryThemegreen }} className='icon' />
                  </Typography>
                </Typography>
                <Typography>
                  <Typography variant='h4' className='main-title'>
                    Smart Bussiness Solutions
                  </Typography>
                  <Typography variant='p' className='sub-title'>
                    Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                  </Typography>
                </Typography>
              </Typography>
              {/* about prea body 2 */}

              <Typography component="div" sx={{ display: "flex" }} className='about-pera-body'>
                <Typography component="div" className='icon-body'>
                  <Typography component="div" className='icon-circle' >
                    <CodeOffIcon sx={{ color: theme.palette.primary.primaryThemegreen }} className='icon' />
                  </Typography>
                </Typography>
                <Typography>
                  <Typography variant='h4' className='main-title'>
                    Smart Bussiness Solutions
                  </Typography>
                  <Typography variant='p' className='sub-title'>
                    Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                  </Typography>
                </Typography>
              </Typography>
            </Typography>
          </Grid>
        </Grid>
        </Container>
      </Typography>

      <Typography component="div" sx={{ my: 5 }}>
        <Container>
          <Box className='labe-title'>Services</Box>
          <Box className='main-section-title'>Our Services</Box>
          <input type="range" min="1" max="100" value="30" class="main-title-down-slider" id="myRange" />
          <Box className="sub-section-title">All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</Box>
          <Box className="our-service-section">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Card className='card-body'>
                  <Box className="img-box">
                    <img src={ourUserImg} alt="" className='img-contain' />
                  </Box>
                  <Typography variant='h3' className='main-title'>Bussiness Consulting</Typography>
                  <Typography className='sub-title'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, </Typography>
                  <Box className='icon-box'><ArrowForwardIosIcon className='icon-right' /> </Box>
                </Card>
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Card className='card-body'>
                  <Box className="img-box">
                    <img src={ourUserImg} alt="" className='img-contain' />
                  </Box>
                  <Typography variant='h3' className='main-title'>Bussiness Consulting</Typography>
                  <Typography className='sub-title'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, </Typography>
                  <Box className='icon-box'><ArrowForwardIosIcon className='icon-right' /> </Box>
                </Card>
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Card className='card-body'>
                  <Box className="img-box">
                    <img src={ourUserImg} alt="" className='img-contain' />
                  </Box>
                  <Typography variant='h3' className='main-title'>Bussiness Consulting</Typography>
                  <Typography className='sub-title'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, </Typography>
                  <Box className='icon-box'><ArrowForwardIosIcon className='icon-right' /> </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Typography>
      <Typography component='div' sx={{ my: 5 }}>
        <Container>
          <Box className='labe-title'>Works</Box>
          <Box className='main-section-title'>Our Portfolio</Box>
          <input type="range" min="1" max="100" value="30" class="main-title-down-slider" id="myRange" />
          <Box className="sub-section-title">All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</Box>
          <Box className='portfolio-link-group' >
            <Link className='portfolio-link active' onClick={() => setworkitem(WorkApi)}>All</Link>
            <Link className='portfolio-link' onClick={() => filteritem('Development')} >Development</Link>
            <Link className='portfolio-link' onClick={() => filteritem('ui/ux')}>UI/UX</Link>
            <Link className='portfolio-link' onClick={() => filteritem('Branding')}>Branding</Link>
            <Link className='portfolio-link' onClick={() => filteritem('SEO')}>SEO</Link>
            <Link className='portfolio-link' onClick={() => filteritem('Wordpress')}>Wordpress</Link>
          </Box>

          <Grid container spacing={3} sx={{ mt: 5 }}>
            {workitem.map((curEle, index) => {
              const { imgwork } = curEle;
              return (
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Card sx={{ height: "350px" }}>
                    <img src={imgwork} alt="" width="100%" height="100%" loading='sadf' />
                  </Card>
                </Grid>
              )
            })}

          </Grid>
        </Container>
      </Typography>
      <TestimonialSection />
      <Typography component="div" sx={{ my: 5 }}>
        <Container>
          <Box className='labe-title'>Pricing</Box>
          <Box className='main-section-title'>See Pricing Plans </Box>
          <input type="range" min="1" max="100" value="30" class="main-title-down-slider" id="myRange" />
          <Box className="sub-section-title">All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</Box>

          <Box className="pricing-plans-section ">
            <Grid container spacing={2}>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Card className='card-body'>
                  <Box className="main-head" >Basic</Box>
                  <CardContent>
                    <Box className="price-nunmber">$22</Box>
                    <Typography className='month-name'>Monthly</Typography>
                    <Divider className='divider' />
                    <Typography className='title-list' component="p">Social Media Marketing</Typography>
                    <Typography className='title-list' component="p">3.100 Keywords</Typography>
                    <Typography className='title-list' component="p">One Way Link Building</Typography>
                    <Typography className='title-list' component="p">10 Free Optimization</Typography>
                    <Typography className='title-list' component="p">5 Press Releases</Typography>
                  </CardContent>
                  <CardActions className='btn-section'>
                    <Button variant="outlined" className='btn' startIcon={<ShoppingCartOutlinedIcon className='shoping-icon' />}>
                      Order Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Card className='card-body'>
                  <Box className="main-head" >Standard</Box>
                  <CardContent>
                    <Box className="price-nunmber">$32</Box>
                    <Typography className='month-name'>Monthly</Typography>
                    <Divider className='divider' />
                    <Typography className='title-list' component="p">Social Media Marketing</Typography>
                    <Typography className='title-list' component="p">3.100 Keywords</Typography>
                    <Typography className='title-list' component="p">One Way Link Building</Typography>
                    <Typography className='title-list' component="p">10 Free Optimization</Typography>
                    <Typography className='title-list' component="p">5 Press Releases</Typography>
                  </CardContent>
                  <CardActions className='btn-section'>
                    <Button variant="outlined" className='btn' startIcon={<ShoppingCartOutlinedIcon className='shoping-icon' />}>
                      Order Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Card className='card-body'>
                  <Box className="main-head" >Premium</Box>
                  <CardContent>
                    <Box className="price-nunmber">$52</Box>
                    <Typography className='month-name'>Monthly</Typography>
                    <Divider className='divider' />
                    <Typography className='title-list' component="p">Social Media Marketing</Typography>
                    <Typography className='title-list' component="p">3.100 Keywords</Typography>
                    <Typography className='title-list' component="p">One Way Link Building</Typography>
                    <Typography className='title-list' component="p">10 Free Optimization</Typography>
                    <Typography className='title-list' component="p">5 Press Releases</Typography>
                  </CardContent>
                  <CardActions className='btn-section'>
                    <Button variant="outlined" className='btn' startIcon={<ShoppingCartOutlinedIcon className='shoping-icon' />}>
                      Order Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Card className='card-body'>
                  <Box className="main-head" >Professional</Box>
                  <CardContent>
                    <Box className="price-nunmber">$72</Box>
                    <Typography className='month-name'>Monthly</Typography>
                    <Divider className='divider' />
                    <Typography className='title-list' component="p">Social Media Marketing</Typography>
                    <Typography className='title-list' component="p">3.100 Keywords</Typography>
                    <Typography className='title-list' component="p">One Way Link Building</Typography>
                    <Typography className='title-list' component="p">10 Free Optimization</Typography>
                    <Typography className='title-list' component="p">5 Press Releases</Typography>
                  </CardContent>
                  <CardActions className='btn-section'>
                    <Button variant="outlined" className='btn' startIcon={<ShoppingCartOutlinedIcon className='shoping-icon' />}>
                      Order Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Typography>
      <Typography component="div" sx={{ my: 5 }}>
        <Container>
          <Box className='labe-title'>Blog</Box>
          <Box className='main-section-title'>Letest Articales </Box>
          <input type="range" min="1" max="100" value="30" class="main-title-down-slider" id="myRange" />
          <Box className="sub-section-title">All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</Box>
          <Grid container spacing={4} className='blog-section'>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box sx={{ height: "400px" }} className="img-section">
                <img
                  src={blog1}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className='blog-img'
                />
                <Box className="blog-contain-body">
                  <Typography className='title-pre'>All the lorem Ipsum generators on the Internet tend to repeat predefined.</Typography>
                  <hr className='line' />
                  <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <Box className='user-section'>
                      <img src={ourUserImg} alt="" className='user-img' />
                      <Typography className='user-name'>Desiree O'Keefe</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <ForumIcon sx={{ marginRight: "5px" }} /> 44 Comments
                    </Box>
                    <Box className="start-section"><StarIcon sx={{ marginRight: "5px" }} /> 60</Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box sx={{ height: "400px" }} className="img-section">
                <img
                  src={blog1}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className='blog-img'
                />
                <Box className="blog-contain-body">
                  <Typography className='title-pre'>All the lorem Ipsum generators on the Internet tend to repeat predefined.</Typography>
                  <hr className='line' />
                  <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <Box className='user-section'>
                      <img src={ourUserImg} alt="" className='user-img' />
                      <Typography className='user-name'>Desiree O'Keefe</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <ForumIcon sx={{ marginRight: "5px" }} /> 44 Comments
                    </Box>
                    <Box className="start-section"><StarIcon sx={{ marginRight: "5px" }} /> 60</Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box sx={{ height: "400px" }} className="img-section">
                <img
                  src={blog1}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className='blog-img'
                />
                <Box className="blog-contain-body">
                  <Typography className='title-pre'>All the lorem Ipsum generators on the Internet tend to repeat predefined.</Typography>
                  <hr className='line' />
                  <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <Box className='user-section'>
                      <img src={ourUserImg} alt="" className='user-img' />
                      <Typography className='user-name'>Desiree O'Keefe</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <ForumIcon sx={{ marginRight: "5px" }} /> 44 Comments
                    </Box>
                    <Box className="start-section"><StarIcon sx={{ marginRight: "5px" }} /> 60</Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Typography>
      <ContatSection />

    </ThemeProvider>
  )
}

export default Home
