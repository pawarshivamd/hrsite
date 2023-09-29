import { Box, Container, Rating, Typography, Grid } from '@mui/material'
import { Autoplay, Pagination,} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import userimg from '../../asstes/img/user-ours.png'
import { theme } from '../../App';

const TestimonialSection = () => {
    return (
        <Box className="testimonial-section">
            <Box className="testimonial-body">
                <Typography variant='h4' className='main-title'>Client Testimonial</Typography>
                {/* <input type="range" min="1" max="100" value="30" className="testi-title-down-slider" /> */}
                    <Box className=" leftsite-set-line small-line-title-down"></Box>
                <Typography component='p' className='sub-title'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, </Typography>
            </Box>
            <Box className="testimonial-bg-box">
                <Container maxWidth="sm">
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
                        className="mySwiper2"
                        style={{ "--swiper-pagination-color": theme.palette.primary.primaryThemegreen, }}
                    >
                        <SwiperSlide className='swiper-slide'  >
                            <Grid container  alignItems='center' className='testimonial-main-box'>
                                <Grid item lg={3} md={3} sm={3} xs={12}>
                                    <Box className="img-box">
                                        <Typography component='img' src={userimg} className='img'></Typography>
                                    </Box>
                                    <Typography variant='h4' className='user-title'>Michelle A.</Typography>
                                    <Typography variant='h6' className='user-work-title' >Digital Marketer</Typography>
                                </Grid>
                                <Grid item lg={9} md={9} sm={9} xs={12}>
                                    <Box className="testimonial-containt-body">
                                        <Typography variant='h5' className='main-title'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, </Typography>
                                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                    </Box>
                                </Grid>
                            </Grid>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'  >
                            <Grid container  alignItems='center' className='testimonial-main-box'>
                                <Grid item lg={3} md={3} sm={3} xs={12}>
                                    <Box className="img-box">
                                        <Typography component='img' src={userimg} className='img'></Typography>
                                    </Box>
                                    <Typography variant='h4' className='user-title'>Michelle A.</Typography>
                                    <Typography variant='h6' className='user-work-title' >Digital Marketer</Typography>
                                </Grid>
                                <Grid item lg={9} md={9} sm={9} xs={12}>
                                    <Box className="testimonial-containt-body">
                                        <Typography variant='h5' className='main-title'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, </Typography>
                                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                    </Box>
                                </Grid>
                            </Grid>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-slide'  >
                            <Grid container  alignItems='center' className='testimonial-main-box'>
                                <Grid item lg={3} md={3} sm={3} xs={12}>
                                    <Box className="img-box">
                                        <Typography component='img' src={userimg} className='img'></Typography>
                                    </Box>
                                    <Typography variant='h4' className='user-title'>Michelle A.</Typography>
                                    <Typography variant='h6' className='user-work-title' >Digital Marketer</Typography>
                                </Grid>
                                <Grid item lg={9} md={9} sm={9} xs={12}>
                                    <Box className="testimonial-containt-body">
                                        <Typography variant='h5' className='main-title'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, </Typography>
                                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                    </Box>
                                </Grid>
                            </Grid>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </Box>
        </Box>
    )
}

export default TestimonialSection
