import React from 'react'

function Prop() {
  return (
    <div className='flex gap-10'>
        <div className='w-1/3'>
        {items.map((i)=>{
            return(
                <img src={i.img} alt="firstone" />
            )
           

        })}
        </div>
        
    {/* <div className='w-30%'>
      one
    </div>
    <div className='w-30%'>
      one
    </div>
    <div>
      one
    </div> */}
    </div>
  )
}
const items = [
    {
      img: "/Assets/Photos/event-photo2.jpg",
      title: "Donate for a cause",
      description:
        "Excepteur ut nulla officia amet ex officia aute occaecat veniam sit sint ea nisi tempor. Occaecat Lorem do mollit consectetur sint proident. Sit pariatur irure ipsum culpa Lorem tempor.",
    },
    {
      img: "/Assets/Photos/children.jpeg",
      title: "Donate for a cause",
      description:
        "Excepteur ut nulla officia amet ex officia aute occaecat veniam sit sint ea nisi tempor. Occaecat Lorem do mollit consectetur sint proident. Sit pariatur irure ipsum culpa Lorem tempor.",
    },
    {
      img: "/Assets/Photos/children.jpeg",
      title: "Donate for a cause",
      description:
        "Excepteur ut nulla officia amet ex officia aute occaecat veniam sit sint ea nisi tempor. Occaecat Lorem do mollit consectetur sint proident. Sit pariatur irure ipsum culpa Lorem tempor.",
    },
  ];

export default Prop;
