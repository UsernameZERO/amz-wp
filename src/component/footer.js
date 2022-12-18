import { Box } from "@mui/system"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Grid from '@mui/material/Unstable_Grid2';
import { Card, Typography } from "@mui/material";


const Footer = () => {
  return (
    <>
      <Box sx={{ height: "230px", width: "100vw", display: "flex" }}>
        <Box sx={{ display: "flex", margin: "5rem" }}>
          <AddShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, height: "3rem", width: "3rem" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              paddingLeft: "1rem",
              paddingTop: "5px",
              fontSize: "24px"
            }}
          >
            Grab The Deals
          </Typography>

        </Box>
        <Box sx={{ mt: "4rem" }}>
          <Typography sx={{ fontSize: "23px", mb: "20px" }}>
            About Us
          </Typography>
          {/* <Typography sx={{ fontSize: "18px" }}>
            Grab the deals Is a Products Review Website Where You Can Get Best Products Comparison And Reviews...
          </Typography> */}
          <Typography sx={{ fontSize: "23px", mb: "20px" }}>
            Privacy Policy
          </Typography>
          <Typography sx={{ fontSize: "23px", mb: "20px" }}>
            Contact Us
          </Typography>
        </Box>

      </Box>
    </>
  )
}

export default Footer;