import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "../component/footer";
import Header from "../component/header";


const About = () => {
  return (
    <>
      <Header />
      <Box sx={{padding: "2rem 7rem", height:"80vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <Card sx={{ height: "300px", boxShadow: "none" }}>
          <Typography sx={{ fontSize: "40px",  textAlign: "center", fontFamily: "monospace", fontWeight: "900" }}>
            Welcome To Grab The Deals
          </Typography>
          <Typography sx={{ padding: "1rem 3rem", fontFamily: "monospace" }}>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Grab the deals is a Professional Deals Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Deals, with a focus on dependability and Online Best Buy Products Links.. We're working to turn our passion for Deals into a booming online website. We hope you enjoy our Deals as much as we enjoy offering them to you.
          </Typography>
          <Typography sx={{ textAlign: "center", fontFamily: "monospace" }}>
            I will keep posting more important posts on my Website for all of you. Please give your support and love.
          </Typography>
          <Typography sx={{ textAlign: "center", fontWeight: "500", fontFamily: "monospace" }}>
            Thanks For Visiting Our Site
          </Typography>
          <Typography sx={{ textAlign: "center", fontWeight: "800", color: "Green", fontFamily: "monospace" }}>Have a nice day !</Typography>
        </Card>
      </Box>
      <Footer />
    </>
  )
}

export default About;