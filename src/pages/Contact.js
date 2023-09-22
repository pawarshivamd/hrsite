import { Box, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import BgBannerHero from './components/BgBannerHero'
import pricingherobg from '../asstes/img/pricingherobg.png'
import ContatSection from './components/ContatSection'

const Contact = () => {
  return (
    <Box>
      <BgBannerHero
        imgbgurl={pricingherobg}
        title="Contact us"
        sub_title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <ContatSection />

      <Box sx={{ mt: 5 }}>
        <Container>
          <Box className='labe-title'>Grow</Box>
          <Box className='main-section-title'>We’re Global and Growing </Box>
          <Box className="small-line-title-down"></Box>
          <Box className="sub-section-title">Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built</Box>
          <Box className="" sx={{ my: 5 }}>
            <Grid container spacing={3} >
              <Grid item  lg={4} md={4} sm={6} xs={12}>
                <Card className='grow-card-box'>
                  <Box className="office-box">Main Office</Box>
                  <Box className="round-box pink">USA</Box>
                  <Typography className='main-title'>United States</Typography>
                  <Typography className='sub-title'>55/123 Norman Street, Sydney NSW 20</Typography>
                </Card>
              </Grid>
              <Grid item  lg={4} md={4} sm={6} xs={12}>
                <Card className='grow-card-box'>
                  <Box className="office-box-visibility">Main Office</Box>
                  <Box className="round-box blue">AUS</Box>
                  <Typography className='main-title'>Australia</Typography>
                  <Typography className='sub-title'>55/123 Norman Street, Sydney NSW 20</Typography>
                </Card>
              </Grid>
              <Grid item  lg={4} md={4} sm={6} xs={12}>
                <Card className='grow-card-box'>
                  <Box className="office-box-visibility">Main Office</Box>
                  <Box className="round-box green">UK</Box>
                  <Typography className='main-title'>United Kingdom</Typography>
                  <Typography className='sub-title'>55/123 Norman Street, Sydney NSW 20</Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box className="faq-section">
        <Container maxWidth="md">
          <Box className="faq-title">Frequently Asked Questions</Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Contact
