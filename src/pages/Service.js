import { Box, Button, Card, Container, Grid, Typography } from '@mui/material'
import BgBannerHero from './components/BgBannerHero';
import serviceherobg from '../asstes/img/service-bg.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TestimonialSection from './components/TestimonialSection';
import ourUserImg from '../asstes/img/user-ours.png';
import { Link } from 'react-router-dom';
const Service = () => {
  return (
    <Box>
      <BgBannerHero
        imgbgurl={serviceherobg}
        title="Services"
        sub_title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Box sx={{ margin: "50px 0" }}>
        <Container>
          <Box className='labe-title'>Services</Box>
          <Box className='main-section-title'>Our Services</Box>
          <Box className="small-line-title-down"></Box>
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
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Card className='card-body'>
                  <Box className="img-box">
                    <img src={ourUserImg} alt="" className='img-contain' />
                  </Box>
                  <Typography variant='h3' className='main-title'>Bussiness Consulting</Typography>
                  <Typography className='sub-title'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, </Typography>
                  <Box className='icon-box'><ArrowForwardIosIcon className='icon-right' /> </Box>
                </Card>
              </Grid>              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Card className='card-body'>
                  <Box className="img-box">
                    <img src={ourUserImg} alt="" className='img-contain' />
                  </Box>
                  <Typography variant='h3' className='main-title'>Bussiness Consulting</Typography>
                  <Typography className='sub-title'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, </Typography>
                  <Box className='icon-box'><ArrowForwardIosIcon className='icon-right' /> </Box>
                </Card>
              </Grid>              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Card className='card-body'>
                  <Box className="img-box">
                    <img src={ourUserImg} alt="" className='img-contain' />
                  </Box>
                  <Typography variant='h3' className='main-title'>Bussiness Consulting</Typography>
                  <Typography className='sub-title'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, </Typography>
                  <Box className='icon-box'><ArrowForwardIosIcon className='icon-right' /> </Box>
                </Card>
              </Grid>              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Card className='card-body'>
                  <Box className="img-box">
                    <img src={ourUserImg} alt="" className='img-contain' />
                  </Box>
                  <Typography variant='h3' className='main-title'>Bussiness Consulting</Typography>
                  <Typography className='sub-title'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, </Typography>
                  <Box className='icon-box'><ArrowForwardIosIcon className='icon-right' /> </Box>
                </Card>
              </Grid>              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Card className='card-body'>
                  <Box className="img-box">
                    <img src={ourUserImg} alt="" className='img-contain' />
                  </Box>
                  <Typography variant='h3' className='main-title'>Bussiness Consulting</Typography>
                  <Typography className='sub-title'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, </Typography>
                  <Box className='icon-box'><ArrowForwardIosIcon className='icon-right' /> </Box>
                </Card>
              </Grid>              <Grid item lg={4} md={6} sm={6} xs={12}>
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
      </Box>
      <Box sx={{ margin: "50px 0" }}>
        <Box className="service-solution-section">
          <Box className="service-solution-body">
            <Typography className='sub-title'>Get Solutions Fast</Typography>
            <Typography className='main-title'>Need First Class <span className='iner-text'> HR Consultants?</span></Typography>
            <Link> <Button variant="contained" className='service-btn'>Get A QUOTE NOW</Button></Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{ margin: "50px 0" }}>
        <TestimonialSection />
      </Box>
    </Box>
  )
}

export default Service
