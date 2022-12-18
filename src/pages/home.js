import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Card } from '@mui/material';
import Header from '../component/header';
import Footer from '../component/footer';

const Home = () => {
  return (
    <>
      <Header />
      <Box sx={{ background: "yellow", width: "100vw" }}>
        <Grid sx={{ margin: "0rem 1rem" }} container spacing={2}>
          <Grid xs={4}>
            <Card sx={{ backgroundColor: "Black", height: "30vh", borderRadius: "20px" }}></Card>
          </Grid>
          <Grid xs={4}>
            <Card sx={{ backgroundColor: "Black", height: "30vh", borderRadius: "20px" }}></Card>
          </Grid>
          <Grid xs={4}>
            <Card sx={{ backgroundColor: "Black", height: "30vh", borderRadius: "20px" }}></Card>
          </Grid>
          <Grid xs={12}>
            <Card sx={{ backgroundColor: "Black", height: "40vh", borderRadius: "20px" }}></Card>
          </Grid>
          <Grid xs={2}>
            <Card sx={{ backgroundColor: "Black", height: "40vh", borderRadius: "20px" }}></Card>
          </Grid>
          <Grid xs={10}>
            <Card sx={{ backgroundColor: "Black", height: "40vh", borderRadius: "20px" }}></Card>
          </Grid>
          <Grid xs={3}>
            <Card sx={{ backgroundColor: "Black", height: "30vh", borderRadius: "20px" }}></Card>
          </Grid>
          <Grid xs={6}>
            <Card sx={{ backgroundColor: "Black", height: "30vh", borderRadius: "20px" }}></Card>
          </Grid>
          <Grid xs={3}>
            <Card sx={{ backgroundColor: "Black", height: "30vh", borderRadius: "20px" }}></Card>
          </Grid>
          <Grid xs={5}>
            <Card sx={{ backgroundColor: "Black", height: "30vh", borderRadius: "20px" }}></Card>
          </Grid>
          <Grid xs={7}>
            <Card sx={{ backgroundColor: "Black", height: "30vh", borderRadius: "20px" }}></Card>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>

  )
}

export default Home;