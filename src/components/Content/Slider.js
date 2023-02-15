import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";


function Slider(props) {
  const items = [
    <img style={{height:"600px",width:"100%",paddingTop:"2px"}}  src="/slider.jpg" alt="image" />,
    <img style={{height:"600px",width:"100%"}}  src="/slider.jpg" alt="image" />,
    <img style={{height:"600px",width:"100%"}}  src="/slider.jpg"  alt="image"/>,
    <img style={{height:"600px",width:"100%"}}  src="/slider.jpg" alt="image" />,
  ];

  return (
    <Carousel className="mt-4 rounded-sm">
      {items.map((item, i) => (
        < Item key={i} item={item} style={{height:"400px",width:"100%"}} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return <Paper>{props.item}</Paper>;
}

<Carousel
  next={() => {
    /* Do stuff */
  }}
  prev={() => {
    /* Do other stuff */
  }}
></Carousel>;


export default Slider;
