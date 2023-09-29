import React from 'react'
import BgBannerHero from './components/BgBannerHero'
import pricingherobg from '../asstes/img/pricingherobg.png'
import Portfoliosection from './components/Portfoliosection'
import { Box } from '@mui/material'
const Portfolio = () => {
  return (
    <>
      <BgBannerHero
        imgbgurl={pricingherobg}
        title="Portfolio"
        sub_title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Box sx={{my:5}}>

      <Portfoliosection/>
      </Box>
    </>
  )
}

export default Portfolio
