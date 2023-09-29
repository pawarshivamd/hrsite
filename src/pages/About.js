import { Box, Card, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import BgBannerHero from './components/BgBannerHero'
import aboutherobg from '../asstes/img/abutoherobg.png'
import AboutComSection from './components/AboutComSection'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
const valueworkApi = [
  {
    id: "0",
    imgurl: require("../asstes/img/innovation.svg").default,
    title: "Innovation",
    subTitle: "Building an enterprisedoesn't need nightmare or cost your thousands Felix is purpose built.",
  },
  {
    id: "1",
    imgurl: require("../asstes/img/Growth.svg").default,
    title: "Growth",
    subTitle: "Building an enterprisedoesn't need nightmare or cost your thousands Felix is purpose built.",
  },
  {
    id: "2",
    imgurl: require("../asstes/img/owner.svg").default,
    title: "Ownership",
    subTitle: "Building an enterprisedoesn't need nightmare or cost your thousands Felix is purpose built.",
  },
  {
    id: "3",
    imgurl: require("../asstes/img/Team Work.svg").default,
    title: "Team Work",
    subTitle: "Building an enterprisedoesn't need nightmare or cost your thousands Felix is purpose built.",
  },
  {
    id: "4",
    imgurl: require("../asstes/img/Commitment.svg").default,
    title: "Commitment",
    subTitle: "Building an enterprisedoesn't need nightmare or cost your thousands Felix is purpose built.",
  },
  {
    id: "5",
    imgurl: require("../asstes/img/positivity.svg").default,
    title: "Positivity",
    subTitle: "Building an enterprisedoesn't need nightmare or cost your thousands Felix is purpose built.",
  },
]
const About = () => {
  const [valueapi, setvalueapi] = useState(valueworkApi);
  const [counterOn, setcounterOn] = useState(false);
  return (
    <Box>
      <BgBannerHero
        imgbgurl={aboutherobg}
        title="About us"
        sub_title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Box sx={{ mt: 5 }} >

        <AboutComSection />
      </Box>
      <Box className="counter-body-section">
        <Container>
          <Typography className='main-title'>Businesses all over the world trust <br /> Buffer to build their brand</Typography>
          <ScrollTrigger onEnter={() => setcounterOn(true)} onExit={() => setcounterOn(false)}>
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-around", mt: 5 }} >
              <Box>
                <Typography className='counter-num-text' ><span> {counterOn && <CountUp start={0} end={100} duration={2} delay={0}> </CountUp>}</span> years</Typography>
                <Typography className='sub-title-num' >In Business</Typography>
              </Box>
              <Box>
                <Typography className='counter-num-text' ><span>{counterOn && <CountUp start={0} end={7500} duration={2} delay={0}> </CountUp>}+</span></Typography>
                <Typography className='sub-title-num' >Customers</Typography>
              </Box>
              <Box>
                <Typography className='counter-num-text' ><span>{counterOn && <CountUp start={0} end={100} duration={2} delay={0}> </CountUp>}k+</span></Typography>
                <Typography className='sub-title-num' >Monthly Blog Readers</Typography>
              </Box>
              <Box>
                <Typography className='counter-num-text' ><span>{counterOn && <CountUp start={0} end={7} duration={2} delay={0}> </CountUp>}m+</span></Typography>
                <Typography className='sub-title-num' >Social Followers</Typography>
              </Box>
            </Box>
          </ScrollTrigger>

        </Container>
      </Box>
      <Box className="our-mission-section">
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12} >
              <Box className="our-missson-left-body">
                <Typography className="our-title">Our Mission</Typography>
                <Box className="small-line"></Box>
                <Typography className='sub-title' >Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built for ease of use and completxability to create.</Typography>
                <Box className='list-group-box'>
                  <Typography className='list-item'><CheckCircleOutlineIcon className='icon' /> Posting to social media, blogs, and messengers</Typography>
                  <Typography className='list-item'><CheckCircleOutlineIcon className='icon' /> Working with images and videos</Typography>
                  <Typography className='list-item'><CheckCircleOutlineIcon className='icon' /> The Future of Writing Blog Articles</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} >
              <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <Box className="img-box">
                    <img src={require("../asstes/img/aboutgird1.jpg")} alt="" width="100%" />
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <Box className="img-box">
                    <img src={require("../asstes/img/aboutgird2.jpg")} alt="" width="100%" />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container>
          <Box className='labe-title'>Value</Box>
          <Box className='main-section-title'>Our values </Box>
          <Box className="small-line-title-down"></Box>
          <Box sx={{ my: 5 }}>
            <Grid container spacing={3}>
              {valueapi.map((curEle, i) => {
                const { imgurl, title, subTitle } = curEle;
                return (
                  <Grid item lg={4} md={4} sm={6} xs={12} key={`${i}`}>
                    <Card className='value-card'>
                      <Box className='img-box' >
                        <img src={imgurl} className='img' alt='' />
                      </Box>
                      <Typography className='main-title'>{title}</Typography>
                      <Typography className='sub-title' > {subTitle}</Typography>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container>
          <Box className='labe-title'>Team</Box>
          <Box className='main-section-title'>Creative minds </Box>
          <Box className="small-line-title-down"></Box>
          <Box className="sub-section-title">All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</Box>
          <Box sx={{ margin: "50px  0px" }}>
            <Grid container spacing={3}>
              <Grid item lg={4} md={4} sm={6} xs={12} className='team-blog-card' >
                <Box className="img-box">
                  <img src={require("../asstes/img/team1user.png")} alt="" className='img' />
                  <Box className="contain-body">
                    <Typography className='title'>Michelle A.</Typography>
                    <Typography className='sub-title'>Web designer</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12} className='team-blog-card' >
                <Box className="img-box">
                  <img src={require("../asstes/img/team2user.png")} alt="" className='img' />
                  <Box className="contain-body">
                    <Typography className='title'>Michelle A.</Typography>
                    <Typography className='sub-title'>Web designer</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12} className='team-blog-card' >
                <Box className="img-box">
                  <img src={require("../asstes/img/team3user.png")} alt="" className='img' />
                  <Box className="contain-body">
                    <Typography className='title'>Michelle A.</Typography>
                    <Typography className='sub-title'>Web designer</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default About
