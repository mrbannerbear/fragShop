import { Link } from "react-router-dom";
import NavRoutes from "./NavRoutes";

const Navbar = () => {
    
  return (
    <>
      <nav className="navbar bg-neutral-300 px-12">
        <div className="navbar-start">
          <Link to="/" className="font-semibold text-xl">ParfumTreasures</Link>
        </div>
        <div className="navbar-end">        
            <NavRoutes></NavRoutes>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
