import React from 'react'
import EventInCards from "./components/Content/EventInCards";
import Events from "./components/Content/Events"; 
import Slider from "./components/Content/Slider";
import Banner from "./components/Content/InfoSection/Banner";
import Wave from "./components/Content/Wave";
import Prop from "./components/Prop";


function Homepage() {
  return (
    <div>
      <Slider/>
<Banner/>
<Wave/>
<EventInCards/>
<Events></Events>
{/* <Prop></Prop> */}

    </div>
  )
}

export default Homepage
