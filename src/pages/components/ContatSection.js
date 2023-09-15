
import TextField from '@mui/material/TextField';
import React from 'react'
import contatg from "../../asstes/img/contact-g.png"
import { Box, Container, Typography, Grid, Button, ThemeProvider, Card, CardActions, CardContent, Divider, ImageList, ImageListItem, ListSubheader, ImageListItemBar, IconButton, withTheme } from '@mui/material';


const ContatSection = () => {
    return (
        <Box className="contact-section-body" >
            <Container maxWidth="xl">

                <Grid container>
                    <Grid item lg={7} md={6} sm={6} xs={12}>
                        <Box className="contat-left-body">
                            <Typography variant='h4' className='title-contact'>Contact</Typography>
                            <Typography variant='h5' className='request-text'>Request A Free Consulting</Typography>
                            <Typography variant='body2' className='sub-title'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, </Typography>
                            <Box variant="from">
                                <Grid container spacing={2}>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <input id="outlined-basic" fullWidth className='input-text' placeholder='full name *' />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>

                                        <input id="outlined-basic" fullWidth className='input-text' placeholder='Email *' type='email' />
                                    </Grid>
                                </Grid>

                                <input id="outlined-basic" fullWidth className='input-text' placeholder='Subject *' />
                                <textarea id="outlined-basic" fullWidth className='input-text' multiline rows={4} placeholder='Your Message *' />
                                <Button variant="contained" type='submit' className='submit-button'>Submit Now</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={5} md={6} sm={6} xs={12}>
                        <Box sx={{ height: "600px", maxWidth: "450px", position: "relative", top: "0px" }}>
                            <img src={contatg} height="100%" width="100%" />
                        </Box>
                    </Grid>

                </Grid>

            </Container>
        </Box>

    )
}

export default ContatSection
