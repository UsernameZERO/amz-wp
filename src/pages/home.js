import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Card, Typography } from '@mui/material';
import Header from '../component/header';
import Footer from '../component/footer';
import electronics from "../assets/electronics.jpg";
import homeDecor from "../assets/home_decor.jpg";
import autoMobiles from "../assets/automobiles.jpg";
import babyProducts from "../assets/baby_products.jpg";
import books from "../assets/books.jpg";
import fashion from "../assets/fashion.jpg";
import fitness from "../assets/fitness.jpg";
import groceries from "../assets/groceries.jpg";
import pets from "../assets/pets.jpg";
import toys from "../assets/toys.jpg";
import sports from "../assets/sports.jpg";


const Home = () => {
  return (
    <>
      <Header />
      <Box sx={{ width: "100vw" }}>
        <Grid sx={{ margin: "0rem 1rem" }} container spacing={2}>
          <Grid xs={12}>
            <Card sx={{
              height: "500px",
             
            }}>
              <a target="_blank" href= "https://amzn.to/3BJkztm" >
                <img src={electronics} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover", cursor: "pointer"}}></img>
              </a>

              <Typography sx={{textDecoration: "none", color: "black",position: "absolute", fontFamily: "fangsong",textTransform: "uppercase", fontSize: "5rem", left: "50%", top: "15rem", fontWeight: "bold"}}>Electronics</Typography>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card sx={{ height: "400px", }}>
              <a target="_blank" href= "https://amzn.to/3uXbo4E">
              <img src={homeDecor} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img>

              </a>
              <Typography  sx={{position: "absolute", fontFamily: "fangsong",textTransform: "uppercase", pl: "21px", fontSize: "2.7rem", top: "48rem", fontWeight: "bold", cursor: "pointer", zIndex: 1, }}>Home Decor</Typography>
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card sx={{ height: "400px" }}>
            <a target="_blank"  href= "https://amzn.to/3FJZCjg">
               <img src={sports} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img>
            </a>
            <Typography sx={{position: "absolute", fontFamily: "fangsong",textTransform: "uppercase", pl: "12rem", fontSize: "2.7rem", top: "53rem", fontWeight: "bold"}}>Sports</Typography>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card sx={{ height: "400px" }}>
            <a target="_blank" href= "https://amzn.to/3FJZCjg">
              <img src={fitness} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img>
            </a>
              <Typography  sx={{position: "absolute", fontFamily: "fangsong",textTransform: "uppercase", pl: "21px", fontSize: "2.7rem", top: "44rem", fontWeight: "bold"}}>Fitness</Typography>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card sx={{ height: "350px" }}>
            <a target="_blank" href= "https://amzn.to/3hB31sw">
               <img src={babyProducts} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img>
            </a>
            <Typography  sx={{position: "absolute", fontFamily: "fangsong",textTransform: "uppercase", pl: "3rem", fontSize: "2.7rem", top: "77rem", fontWeight: "bold"}}>Baby <br></br>Products</Typography>
            </Card>
          </Grid>
          <Grid xs={9}>
            <Card sx={{ height: "350px" }}>
            <a target="_blank" href= "https://amzn.to/3FCsaem">
               <img src={fashion} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img>
            </a>
            <Typography  sx={{position: "absolute", fontFamily: "fangsong",textTransform: "uppercase", pl: "28rem", fontSize: "2.7rem", top: "73rem",  fontWeight: "bold"}}>Fashion</Typography>
            </Card>
          </Grid>
          <Grid xs={4.5}>
            
            <Card sx={{ height: "585px" }}> 
            <a target="_blank" href= "https://amzn.to/3v5SFDT">
            <img src={toys} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img>
            </a>
            <Typography  sx={{position: "absolute", fontFamily: "fangsong",textTransform: "uppercase", pl: "4rem", fontSize: "2.7rem", top: "98rem",  fontWeight: "bold"}}>Toys</Typography>
            </Card>
          </Grid>
          <Grid xs={7.5}>
            <Grid>
              <Card sx={{ height: "350px" }}> 
              <a target="_blank" href= "https://amzn.to/3YvM1o7">
              <img src={autoMobiles} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img>
              </a>
              <Typography  sx={{position: "absolute", fontFamily: "fangsong",textTransform: "uppercase", pl: "40rem", fontSize: "2.7rem", top: "86rem",  fontWeight: "bold"}}>Auto Mobiles</Typography>
              </Card>
            </Grid>
            <Grid>
              <Card sx={{ height: "213px" }}>
              <a target="_blank" href= "https://amzn.to/3FzRL7z">
                 <img src={groceries} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img>
              </a>
              <Typography  sx={{position: "absolute", fontFamily: "fangsong",textTransform: "uppercase", pl: "5rem", fontSize: "2.7rem", top: "117rem", fontWeight: "bold"}}>Groceries</Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid xs={8.5}>
            <Card sx={{ height: "400px" }}>
            <a target="_blank"  href= "https://amzn.to/3jdsQPO">
               <img src={books} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img>
            </a>
            <Typography  sx={{position: "absolute", fontFamily: "fangsong",textTransform: "uppercase", pl: "24rem", fontSize: "5rem", top: "134rem", fontWeight: "bold"}}>Books</Typography>
            </Card>
          </Grid>
          <Grid xs={3.5}>
            <Card sx={{ height: "400px" }}> 
            <a target="_blank"  href= "https://amzn.to/3hEJwPB">
            <img src={pets} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img>
            </a>
            <Typography sx={{position: "absolute", fontFamily: "fangsong",textTransform: "uppercase",pl: "1rem", fontSize: "5rem", top: "125rem", fontWeight: "bold" }}>Pets</Typography>
            </Card>
          </Grid>
        </Grid>
      </Box >
      <Footer />
    </>

  )
}

export default Home;