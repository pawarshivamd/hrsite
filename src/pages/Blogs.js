import { Box, Container, Typography, Grid, Card } from '@mui/material'
import React, { useState } from 'react'
import BgBannerHero from './components/BgBannerHero'
import blogherobg from '../asstes/img/blogbg.jpg'
import { Link } from 'react-router-dom'
const recentblogapi = [
  {
    id: "1",
    blogimg: require("../asstes/img/reacentblog.svg").default,
    img_alt: "blog",
    date: "December 05, 2021",
    time: "3 min read",
    mainTitle: "Detailed insights for your social media",
    subTitle: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
    Viewlink: "View More",
  },
  {
    id: "2",
    blogimg: require("../asstes/img/reacentblog2.svg").default,
    img_alt: "blog",
    date: "December 05, 2021",
    time: "3 min read",
    mainTitle: "Detailed insights for your social media",
    subTitle: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
    Viewlink: "View More",
  },
  {
    id: "3",
    blogimg: require("../asstes/img/reacentblog.svg").default,
    img_alt: "blog",
    date: "December 05, 2021",
    time: "3 min read",
    mainTitle: "Detailed insights for your social media",
    subTitle: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
    Viewlink: "View More",
  },
  {
    id: "4",
    blogimg: require("../asstes/img/reacentblog.svg").default,
    img_alt: "blog",
    date: "December 05, 2021",
    time: "3 min read",
    mainTitle: "Detailed insights for your social media",
    subTitle: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
    Viewlink: "View More",
  },
  {
    id: "5",
    blogimg: require("../asstes/img/reacentblog.svg").default,
    img_alt: "blog",
    date: "December 05, 2021",
    time: "3 min read",
    mainTitle: "Detailed insights for your social media",
    subTitle: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
    Viewlink: "View More",
  },
  {
    id: "6",
    blogimg: require("../asstes/img/reacentblog.svg").default,
    img_alt: "blog",
    date: "December 05, 2021",
    time: "3 min read",
    mainTitle: "Detailed insights for your social media",
    subTitle: "Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the standard dummy.",
    Viewlink: "View More",
  },
]

const Blogs = () => {
  const [recenBlog, setrecentBlog] = useState(recentblogapi);
  return (
    <Box>
      <BgBannerHero
        imgbgurl={blogherobg}
        title="Blog"
        sub_title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Box sx={{ mt: 5 }}>
        <Container>
          <Box className='labe-title'>Blog</Box>
          <Box className='main-section-title'>Popular Artical </Box>
          <Box className="small-line-title-down"></Box>
          <Box className="sub-section-title">Popular articals are selected based on the numbers of readers</Box>
          <Box className="" sx={{ my: 5 }}>
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box className="blog-content">
                  <Box className="blog-text">
                    The basic of making the correct saas in <br /> industry.
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box className="blog-content blog-img-two">
                  <Box className="blog-text-two">
                    <Typography className='main-title'>The basic of making the correct saas in industry.</Typography>
                    <Typography className='sub-title'>The basic of making the correct saas in industry.</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box className="blog-content blog-img-three">
                  <Box className="blog-text">
                    The basic of making the correct saas in <br /> industry.
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="" sx={{ my: 5 }}>
            <Box className='labe-title'>Blog</Box>
            <Box className='main-section-title'>Recent Artical </Box>
            <Box className="small-line-title-down"></Box>
            <Box className="sub-section-title">Popular articals are selected based on the numbers of readers</Box>
            <Box className="" sx={{ my: 5 }}>
              <Grid container spacing={2}>
                {recenBlog.map((cureEle, index) => {
                  const { blogimg, img_alt, date, time, mainTitle, subTitle, Viewlink } = cureEle;
                  return (

                    <Grid item lg={4} md={4} sm={6} xs={12} key={`${index}`}>
                      <Card className='blog-card'>
                        <Link>
                          <Box className="img-box">
                            <img src={blogimg} alt={img_alt} />
                          </Box>
                        </Link>
                        <Box className="body-contain">
                          <Box className="date-time-section">
                            <Typography className="date-title">{date}</Typography>
                            <Typography className="time-title">{time}</Typography>
                          </Box>
                          <hr />
                          <Link className='main-title'>{mainTitle}</Link>
                          <Typography className='sub-title'>{subTitle}</Typography>
                          <Link className='link-text'>{Viewlink}</Link>
                        </Box>
                      </Card>
                    </Grid>
                  )
                })}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Blogs
