import { Box, Card, Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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
      category: "Wordpress " ,
    },
]

var num = 0;
while(num <= 10){
  console.log(num);
  num++;
}
const Portfoliosection = () => {
    const [workitem, setworkitem] = useState(WorkApi);
    const [activeLink, setActiveLink] = useState("All");
    const filteritem = (cate) => {
      if(cate === 'All'){
        setworkitem(WorkApi)
      }else{
        const updetdata = WorkApi.filter((curEle) => {
          return curEle.category === cate;
        })
        setworkitem(updetdata)
      }
      setActiveLink(cate);
    }
  return (
        <Container>
          <Box className='labe-title'>Works</Box>
          <Box className='main-section-title'>Our Portfolio</Box>
          <Box className="small-line-title-down"></Box>
          <Box className="sub-section-title">All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</Box>
          <Box className='portfolio-link-group' >
            <Link className={`portfolio-link ${activeLink === 'All' ? 'active' : ''}`} onClick={() => filteritem('All')}>All</Link>
            <Link className={`portfolio-link ${activeLink === 'Development' ? 'active' : ''}`} onClick={() => filteritem('Development')} >Development</Link>
            <Link className={`portfolio-link ${activeLink === 'ui/ux' ? 'active' : ''}`} onClick={() => filteritem('ui/ux')}>UI/UX</Link>
            <Link className={`portfolio-link ${activeLink === 'Branding' ? 'active' : ''}`} onClick={() => filteritem('Branding')}>Branding</Link>
            <Link className={`portfolio-link ${activeLink === 'SEO' ? 'active' : ''}`} onClick={() => filteritem('SEO')}>SEO</Link>
            <Link className={`portfolio-link ${activeLink === 'Wordpress' ? 'active' : ''}`} onClick={() => filteritem('Wordpress')}>Wordpress</Link>
          </Box>

          <Grid container spacing={3} sx={{ mt: 5 }}>
            {workitem.map((curEle, index) => {
              const { imgwork } = curEle;
              return (
                <Grid item lg={4} md={6} sm={6} xs={12} key={`${index}`}>
                  <Card sx={{ height: "350px" }}>
                    <img src={imgwork} alt="" width="100%" height="100%" loading='sadf' />
                  </Card>
                </Grid>
              )
            })}

          </Grid>
        </Container>
  )
}

export default Portfoliosection
