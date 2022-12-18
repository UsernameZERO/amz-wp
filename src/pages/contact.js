import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "../component/footer";
import Header from "../component/header";
import ContactMailIcon from '@mui/icons-material/ContactMail';

const ContactUs = () => {

  return (
    <>
      <Header />
      <Box sx={{padding: "2rem 7rem", height:"80vh", display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <Typography  sx= {{fontSize: "24px", fontWeight: "500", textAlign: "center", mt: "1rem", fontFamily: "monospace", fontWeight: "900"}}>Contact Us</Typography>
        <Typography sx ={{textAlign: "center", fontFamily: "monospace"}}>Welcome to Grab The Deals</Typography>
        <Typography  sx ={{textAlign: "center", fontFamily: "monospace"}}>Please email us if you have any queries about the site, advertising, or anything else.</Typography>
        <Box sx= {{display: "flex", justifyContent: "center", padding: "1rem"}}>
        <ContactMailIcon sx={{height: "50px", width: "50px"}}/>
        <a style={{paddingTop: "10px",paddingLeft: "22px",textDecoration: "none", color: "black",fontSize: "20px", fontWeight: "600", cursor: "pointer", fontFamily: "monospace"}} href="mailto:jaswanth.11706196@gmail.com">jaswanth.11706196@gmail.com</a>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default ContactUs;