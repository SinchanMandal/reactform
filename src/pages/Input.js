

import { useState } from "react";
import ReactDOM from 'react-dom/client';
import { useNavigate } from "react-router-dom";
import index from "./index.css"
function Input() {
  const [name, setName] = useState("");

  const [mail, setMail] = useState("");
  const navigate = useNavigate();

    const Output=()=>{
  navigate('/Output',{state:{
   name:name,
   mail:mail
  }});

  
    }
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The name you entered was: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>


<div className="row">
<div className="form-holder">
<div className="form-content">
<div className="form-items">
<h3>Register Today</h3>
          <p>Fill in the data below.</p>

          <div className="col-md-12">
              <input
                className="form-control"
                type="text"
                value={name}
                placeholder="Full Name"
                required=""
                onChange={(e) => setName(e.target.value)}
              />
              </div>

              <div className="col-md-12">
              <input
                className="form-control"
                type="text"
                value={mail}
                placeholder="Email"
                required=""
                onChange={(e) => setMail(e.target.value)}
              />
              </div>
             
                <>
              <button onClick={Output}>Submit</button>
              </>
             

  </div>
  </div>
  </div>
</div>



      
      
    </form>


  )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
export default Input

              