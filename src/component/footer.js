import { Box } from "@mui/system"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Grid from '@mui/material/Unstable_Grid2';
import { Card, Typography } from "@mui/material";


const Footer = () => {
  return (
    <>
      <Box sx={{ height: "130px", width: "100vw", display: "flex", background:"black" }}>
        <Box sx={{ display: "flex", margin: "2rem" }}>
          <AddShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, height: "3rem", width: "3rem", color:"white" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              color: 'white',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              paddingLeft: "1rem",
              paddingTop: "5px",
              fontSize: "24px",
              "&:hover": {color: "green"}
            }}
          >
            Grab The Deals
          </Typography>

        </Box>
        <Box sx={{ mt: "2.3rem" }}>
          <Typography component="a"
            href="/about-us" sx={{textDecoration: 'none', fontSize: "23px", mb: "20px",fontFamily: 'monospace',
              color: 'white', "&:hover": {color: "green"} }}>
            About Us
          </Typography>
          <Typography component="a"
            href="/privacy-policy" sx={{paddingLeft: "3rem",textDecoration: 'none',fontSize: "23px", mb: "20px", fontFamily: 'monospace',
              color: 'white', "&:hover": {color: "green"} }}>
            Privacy Policy
          </Typography>
          <Typography component="a"
            href="/contact-us"   sx={{paddingLeft: "3rem", textDecoration: 'none',fontSize: "23px", mb: "20px", fontFamily: 'monospace',
              color: 'white',"&:hover": {color: "green"} }}>
            Contact Us
          </Typography>
        </Box>

      </Box>
    </>
  )
}

export default Footer;