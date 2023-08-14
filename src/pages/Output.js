import {useLocation } from "react-router-dom";

 function Output() {

    const location = useLocation();
    // console.log(location);
    let name;
    if(location.state){
        name = location.state.name;
    }
   
        return (

            <>
               
<div>{name}</div>


            </>
        )
    }

export default Output