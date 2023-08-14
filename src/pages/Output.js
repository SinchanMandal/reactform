import {useLocation } from "react-router-dom";
import "./index1.css"
 function Output() {

    const location = useLocation();
    // console.log(location);
    let name,mail;
    if(location.state){
        name = location.state.name;
        mail=  location.state.mail;

        console.log(name);
        console.log(mail);
    }
   
        return (

           


//             <>
               


// <div className="out_put1">
// {name}
// {mail}
// </div>

       

            
//             </>


<div className="row">
<div className="form-holder">
<div className="form-content">
<div className="form-items">
          <p>Received Data.</p>

          <div className="col-md-12">
              <input
                className="form-control"
                type="text"
                value={name}
                placeholder="Full Name"
                required=""
               
              />
              </div>

              <div className="col-md-12">
              <input
                className="form-control"
                type="text"
                value={mail}
                placeholder="Email"
                required=""
               
              />
              </div>
             
                <>
             
              </>
             

  </div>
  </div>
  </div>
</div>




        )
    }

export default Output