import React from 'react';
import Event from "./Event";
import eventimg from '../Assets/Photos/eventImg.jpg';
import eventimg1 from '../Assets/Photos/event-photo2.jpg';
import eventimg2 from '../Assets/Photos/event-photo3.jpg';

function Content(){

    const eventImages = [
        {image:{eventimg},
         text:'For Good Cause',
         description:'This event is conducted by caredByFund in order to collect donation for the good purposes'
        },
        {image:{eventimg1},
         text:'Help the needy',
         description:'This event is conducted by caredByFund in order to collect donation for the good purposes'
        },
        {image:{eventimg2},
         text:'One forward step',
         description:'This event is conducted by caredByFund in order to collect donation for the good purposes'
        },
    
      ] 
    return (
        <div className=" w-10/12 m-auto flex flex-row mt-10 gap-20">
            <Event img={eventImages[0].image} text={eventImages[0].text}></Event>
            <Event img={eventImages[1].image} text={eventImages[1].text}/>
            <Event img={eventImages[2].image} text={eventImages[2].text}/>
        </div>
    )
}

export default Content;