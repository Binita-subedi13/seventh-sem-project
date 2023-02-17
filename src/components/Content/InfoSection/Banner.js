import TextSection from "./TextSection";
function Banner() {
  return (
    <div className=" w-full mt-3 ">
      <div className="flex w-10/12  mx-auto  h-full">
        <TextSection/>
        <div className="basis-1/2">
            <img style={{ height: 380 }} className=" w-full" src="/Assets/Photos/event-photo3.jpg" alt="ph" />
        </div>
      </div>
      <div className="flex w-10/12  mx-auto  h-full">
      <div className="basis-1/2">
            <img style={{ height: 380 }} className=" w-full" src="/Assets/Photos/eventimg.jpg" alt="ph" />
        </div>
      <TextSection/>
       
      </div>
      
    </div>
  );
}

export default Banner;
