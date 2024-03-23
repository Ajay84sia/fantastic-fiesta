import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Checkbox,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const Bar = () => {
  const [genderIconChange, setGenderIconChange] = useState(true);
  const [categoryIconChange, setCategoryIconChange] = useState(true);
  const [priceIconChange, setPriceIconChange] = useState(false)

  const toggleGender = () => {
    setGenderIconChange(!genderIconChange);
  };

  const toggleCategory = () => {
    setCategoryIconChange(!categoryIconChange);
  };

  const togglePrice = () => {
     setPriceIconChange(!priceIconChange)
  }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Refine By</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* GENDER */}
          <div>{genderIconChange ? (<Button onClick={toggleGender}><RemoveIcon /> Gender</Button>) : (<Button onClick={toggleGender}><AddIcon /> Gender</Button>)}</div>

          {genderIconChange && (
            <>
              <Typography>
                <Checkbox /> Male
              </Typography>
              <Typography>
                <Checkbox /> Female
              </Typography>
            </>
          )}
          {/* CATEGORY */}
          <div>{categoryIconChange ? (<Button onClick={toggleCategory}><RemoveIcon /> Category</Button>) : (<Button onClick={toggleCategory}><AddIcon /> Category</Button>)}</div>

          {categoryIconChange && (
            <>
              <Typography>
                <Checkbox /> Category 1
              </Typography>
              <Typography>
                <Checkbox /> Category 2
              </Typography>
            </>
          )}

          {/* PRICE */}
          <div>{priceIconChange ? (<Button onClick={togglePrice}><RemoveIcon /> Price</Button>) : (<Button onClick={togglePrice}><AddIcon /> Price</Button>)}</div>
             
          {priceIconChange && (
            <>
              <Typography>
                <Checkbox /> Below Rs.500
              </Typography>
              <Typography>
                <Checkbox /> Rs.500 to Rs.1000
              </Typography>
              <Typography>
                <Checkbox /> Rs.1001 to Rs.1500
              </Typography>
              <Typography>
                <Checkbox /> Rs.1501 to Rs.2000
              </Typography>
              <Typography>
                <Checkbox /> Rs.2001 to Rs.2500
              </Typography>
            </>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Bar;
