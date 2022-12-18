import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Card } from '@mui/material';
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
              height: "500px"
            }}>
              <img src={electronics} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card sx={{ height: "400px" }}>
              <img src={homeDecor} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img>
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card sx={{ height: "400px" }}> <img src={sports} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img></Card>
          </Grid>
          <Grid xs={3}>
            <Card sx={{ height: "400px" }}>
              <img src={fitness} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card sx={{ height: "350px" }}> <img src={babyProducts} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img></Card>
          </Grid>
          <Grid xs={9}>
            <Card sx={{ height: "350px" }}> <img src={fashion} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img></Card>
          </Grid>
          <Grid xs={4.5}>
            <Card sx={{ height: "585px" }}> <img src={toys} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img></Card>
          </Grid>
          <Grid xs={7.5}>
            <Grid>
              <Card sx={{ height: "350px" }}> <img src={autoMobiles} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img></Card>
            </Grid>
            <Grid>
              <Card sx={{ height: "213px" }}> <img src={groceries} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img></Card>
            </Grid>
          </Grid>
          <Grid xs={8.5}>
            <Card sx={{ height: "400px" }}> <img src={books} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img></Card>
          </Grid>
          <Grid xs={3.5}>
            <Card sx={{ height: "400px" }}> <img src={pets} style={{ width: "-webkit-fill-available", height: "100%", objectFit: "cover" }}></img></Card>
          </Grid>
        </Grid>
      </Box >
      <Footer />
    </>

  )
}

export default Home;