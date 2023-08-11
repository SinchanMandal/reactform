import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        This is home
      </div>

      <Outlet />
    </>
  )
};

export default Home;