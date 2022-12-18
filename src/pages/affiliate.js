import { Box, Typography } from "@mui/material";
import Footer from "../component/footer";
import Header from "../component/header";


const Affiliate = () => {

  return (
    <>
      <Header />
      <Box sx={{padding: "2rem 7rem", height:"80vh"}}>
      <Typography  sx= {{fontSize: "24px", fontWeight: "500", textAlign: "center", mt: "1rem", fontFamily: "monospace", fontWeight: "900"}}>Affiliate Disclosure</Typography>
      <Typography sx= {{fontWeight: "700", fontFamily: "monospace", margin: "1rem 0rem"}}>What Are Affiliate Links?</Typography>
      <Typography sx= {{ fontFamily: "monospace"}}>Purchases are made on external affiliate company websites: when a viewer click on an affiliate link located on URL to purchase an item, the buyer buys this item from the seller directly (not from URL).</Typography>
      <Typography sx= {{fontWeight: "700", fontFamily: "monospace", margin: "1rem 0rem"}}>How does Grab The Deals earn money?</Typography>
      <Typography sx= {{ fontFamily: "monospace"}}>Amazon & other companies pay a small percentage of commission or other compensation for helping to bring customers to their website.</Typography>
      <Typography sx= {{fontWeight: "700", fontFamily: "monospace", margin: "1rem 0rem"}}>Does Price Change in Affiliate Link?</Typography>
      <Typography sx= {{ fontFamily: "monospace"}}>Prices are exactly the same for viewers whether their purchase is through an affiliate link or a non-affiliate link.</Typography>
      <Typography sx= {{fontWeight: "700", fontFamily: "monospace", margin: "1rem 0rem"}}>How do we protect your information?</Typography>
      <Typography sx= {{ fontFamily: "monospace"}}>We do not use vulnerability scanning and/or scanning to PCI standards. We only provide articles and information. We never ask for credit card numbers. We do not use Malware Scanning. We do not use an SSL certificate
        <Typography sx= {{ fontFamily: "monospace", mt: "10px"}}>
        <strong>Price Disclaimer:</strong> “Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on [relevant Amazon Site(s), as applicable] at the time of purchase will apply to the purchase of this product.”
        </Typography>
        </Typography>
      </Box>
      <Footer />
    </>
  )
}

export default Affiliate;