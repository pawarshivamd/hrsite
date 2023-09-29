import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import BgBannerHero from './components/BgBannerHero'
import pricingherobg from '../asstes/img/pricingherobg.png'
import ContatSection from './components/ContatSection'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';
import CheckIcon from '@mui/icons-material/Check';
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

          <Box>
            <Accordion className="faq-card-body">
              <AccordionSummary
                expandIcon={<CircleIcon className='circle-icon' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className="faq-main-title">1. Where is my order? Quisque molestie</Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="faq-ans-body">
                  <Typography className='text-sub'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the </Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Listen to what they say about you</Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Randomised words which.</Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Internet tend to repeat predefined chunks</Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Automate multiple scenarios </Typography>
                  <Typography className="main-text">Do you currently have vacancies?</Typography>
                  <Typography className='text-sub' >When an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five cedfgfnturies, but alsjkjo the leap into electronic typesetting.</Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            {/* 2 */}
            <Accordion className="faq-card-body">
              <AccordionSummary
                expandIcon={<CircleIcon className='circle-icon' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className="faq-main-title">2. How can I return an item purchased online?</Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="faq-ans-body">
                  <Typography className='text-sub'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the </Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Listen to what they say about you</Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Randomised words which.</Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Internet tend to repeat predefined chunks</Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Automate multiple scenarios </Typography>
                  <Typography className="main-text">Do you currently have vacancies?</Typography>
                  <Typography className='text-sub' >When an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five cedfgfnturies, but alsjkjo the leap into electronic typesetting.</Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            {/* 3 */}
            <Accordion className="faq-card-body">
              <AccordionSummary
                expandIcon={<CircleIcon className='circle-icon' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className="faq-main-title">3. Can I cancel or change my order?</Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="faq-ans-body">
                  <Typography className='text-sub'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the </Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Listen to what they say about you</Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Randomised words which.</Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Internet tend to repeat predefined chunks</Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Automate multiple scenarios </Typography>
                  <Typography className="main-text">Do you currently have vacancies?</Typography>
                  <Typography className='text-sub' >When an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five cedfgfnturies, but alsjkjo the leap into electronic typesetting.</Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            {/* 4 */}
            <Accordion className="faq-card-body">
              <AccordionSummary
                expandIcon={<CircleIcon className='circle-icon' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className="faq-main-title">4. I have a promotional or discount code?</Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="faq-ans-body">
                  <Typography className='text-sub'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the </Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Listen to what they say about you</Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Randomised words which.</Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Internet tend to repeat predefined chunks</Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Automate multiple scenarios </Typography>
                  <Typography className="main-text">Do you currently have vacancies?</Typography>
                  <Typography className='text-sub' >When an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five cedfgfnturies, but alsjkjo the leap into electronic typesetting.</Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            {/* 5 */}
            <Accordion className="faq-card-body">
              <AccordionSummary
                expandIcon={<CircleIcon className='circle-icon' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box className="faq-main-title">5. Can I integrate my store with Facebook?</Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box className="faq-ans-body">
                  <Typography className='text-sub'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry's standard dummy text ever since the </Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Listen to what they say about you</Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Randomised words which.</Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Internet tend to repeat predefined chunks</Typography>
                  <Typography className="list-text"><CheckIcon className="check-icon"/> Automate multiple scenarios </Typography>
                  <Typography className="main-text">Do you currently have vacancies?</Typography>
                  <Typography className='text-sub' >When an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five cedfgfnturies, but alsjkjo the leap into electronic typesetting.</Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Contact
