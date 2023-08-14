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
<>
  {/* JQUERY STEP */}
  <div className="wrapper">
    <form action="">
      <div id="wizard">
        {/* SECTION 1 */}
        <h4 />
        <h1>Received Data</h1>
        
        <section>
            <h2>Your Name</h2>
          <div className="form-row">
            {" "}
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
            />{" "}
          </div>
          <h2>Your Email</h2>
          <div className="form-row">
            {" "}
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={mail}
            />{" "}
          </div>
         
        </section>
      </div>
    </form>
  </div>
</>

        )
    }

export default Output