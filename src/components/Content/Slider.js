import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";


function Slider(props) {
  const items = [
    <img style={{height:"600px",width:"100%",paddingTop:"2px"}}  src="/Assets/Photos/eventimg.jpg" alt="slider1" />,
    <img style={{height:"600px",width:"100%"}}  src="/Assets/Photos/event-photo2.jpg" alt="slider2" />,
    <img style={{height:"600px",width:"100%"}}  src="/Assets/Photos/event-photo3.jpg"  alt="slider3"/>,
    <img style={{height:"600px",width:"100%"}}  src="/Assets/Photos/slider.jpg" alt="slider4" />,
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
