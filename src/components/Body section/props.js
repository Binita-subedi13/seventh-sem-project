/* 
import eventimg from '../Assets/Photos/eventImg.jpg';
import eventimg1 from '../Assets/Photos/event-photo2.jpg';
import eventimg2 from '../Assets/Photos/event-photo3.jpg';
const eventImages = [
    {image:eventimg,
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

  ] */


  const eventImages = ()=>{
    return (
        <view>
            <ImageDetails 
            imageSpurce={require('../Assets/Photos/eventImg.jpg')}
            title="For Good Cause"
            description="This event is conducted by caredByFund in order to collect donation for the good purposes"
            />
            <ImageDetails 
            imageSpurce={require('../Assets/Photos/event-photo2.jpg')}
            title="Help the needy"
            description="This event is conducted by caredByFund in order to collect donation for the good purposes"
            />
            <ImageDetails 
            imageSpurce={require('../Assets/Photos/event-photo3.jpg')}
            title="One forward step"
            description="This event is conducted by caredByFund in order to collect donation for the good purposes"
            />
        </view>
    )
  }