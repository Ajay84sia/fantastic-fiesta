import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarIcon from '@mui/icons-material/Star';
import imggg from '../../assets/imggee.webp'

const CardCloth = ({elem}) => {
  const {id, ProductLink, brand, discount, images,originalprice, offerprice, price, stock, title} = elem
  console.log(elem);
  return (
    <div className="">
      <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={imggg}
              height="140"
              image={images}
            />
            <CardContent align="center">
              <Typography variant="p">
                <strong  className="text-[#A2895A]">{brand}</strong>
              </Typography>
              <Typography gutterBottom variant="p" component="div">
                {title}
              </Typography>
              <Typography variant="p" sx={{background: "green", color: "#fff",padding: "2px 5px", borderRadius: "4px"}} color="text.secondary">
                  <span>3.6</span><StarIcon /> | 2k
              </Typography>
              <Typography>
                  <span><span style={{fontWeight: "600"}}>{price}</span> <del>{originalprice}</del>({discount})</span>
              </Typography>
            </CardContent>
            
          </Card>
    </div>
  )
}

export default CardCloth
