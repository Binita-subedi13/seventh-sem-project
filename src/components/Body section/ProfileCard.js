function ProfileCard(props){

    return (
        <div className="bg-slate-300 h-96 basis-1/3 m-auto text-center rounded-xl hover:shadow-lg transition duration-300">
            <div className="h-3/5">
                
                <img src={props.img} alt="profile" />
            </div>
            <div>{props.text}</div>
        </div>
    )
}

export default ProfileCard; 


