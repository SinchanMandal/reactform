import {useLocation } from "react-router-dom";

 function Output() {

    const location = useLocation();
    // console.log(location);
   
        return (

            <>
               
<div>{location.state.name}</div>


            </>
        )
    }

export default Output