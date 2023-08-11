

import { useState } from "react";
import ReactDOM from 'react-dom/client';
import { useNavigate } from "react-router-dom";

function Input() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

    const Output=()=>{
  navigate('/Output',{state:{name:name}});
    }
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The name you entered was: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      {/* <input type="submit" /> */}
      <>
      
      <button onClick={Output()}>Submit</button>
      
      </>
      
    </form>


  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
export default Input

              

