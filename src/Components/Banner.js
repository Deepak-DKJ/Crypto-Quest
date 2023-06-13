import { Container, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({

    banner: {
        backgroundImage: "url(https://wallpaperaccess.com/full/1267580.jpg)",
    },
    bannerContent: {
      height: 648,
        display: "flex",
        flexDirection:"column",
        paddingTop: 25,
        justifyContent:"space-around",
    },
    tagline: {
        display:"flex",
        height:"40%",
        flexDirection:"column",
        justifyContent:"center",
        textAlign:"center",
    },
}))
const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
            <Typography variant="h2"
            style={{
                fontWeight:"bold",
                marginBottom:15,
                fontFamily:"Montserrat",
            }}>
              Crypto Quest
            </Typography>

            <Typography variant="subtitle1"
            style={{
                color:"#00FF00",
                textTransform:"capitalize",
                fontFamily:"Montserrat"
            }}>
                Unveiling the Power of Digital Money: Explore your favourite Cryptocurrency.
            </Typography>
        </div>
        <Carousel/>
      </Container>
    </div>
  )
}

export default Banner
