import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css"
const Home = () => {
  return (
    <>
    <div className="nav_class">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/Input">
     Input
    </a>
    
    
  </div>
</nav>
</div>
    </>
  )
};

export default Home;