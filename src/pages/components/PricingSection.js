import { Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const PricingSection = () => {
  return (
    <Box>
      <Container>
        <Box className='labe-title'>Pricing</Box>
        <Box className='main-section-title'>See Pricing Plans </Box>
        <Box className="small-line-title-down"></Box>
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
    </Box>
  )
}

export default PricingSection
