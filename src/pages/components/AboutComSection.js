import { Box, Container, Grid, Typography } from '@mui/material'
import aboutimg from '../../asstes/img/aboutimg.png'
import TodayIcon from '@mui/icons-material/Today';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import imgaboutbg from '../../asstes/img/bg-about.svg'

const AboutComSection = () => {
  return (
    <Typography component="div" className='about-section' sx={{ background: `url(${imgaboutbg}) `, backgroundRepeat: "no-repeat", backgroundSize: "cover", position: "relative", mb: 5 }}>
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
                <TodayIcon  className='icon' />
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
                <CodeOffIcon  className='icon' />
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
  )
}

export default AboutComSection
