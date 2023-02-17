function Wave(){
    return(
        <div className="relative"><img src="/Assets/Photos/wave.svg" alt="" />
        
        <div className="bg-lime-900 w-full h-36 mb-16"></div>
        <div className=" absolute top-2/4 text-center  w-full text-white italic">
            <h1 className="text-4xl"> <span className="text-orange-500">"</span>What do we do?<span className="text-orange-500">"</span></h1>
            <p className="w-3/5 mx-auto text-lg pt-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum explicabo accusamus quos animi, repellendus veniam quaerat delectus. Velit mollitia autem at, voluptatem ad magnam quis inventore ex nihil quidem?
            </p>
            <button className="bg-orange-500 text-lg rounded-md mt-5 py-2 px-4 hover:bg-white  hover:text-black transition duration-200">Explore...</button>
          
        </div>
        </div>

    )
}
export default Wave;