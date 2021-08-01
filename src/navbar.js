import { linkSync } from "fs";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className=" nav navbar nav-bar navbar-light  navbar-expand-md ">
          
           <a href="/"
           className="navbar-brand"
           >Iyanu Blog</a>

          <button 
            className="navbar-toggler"
            type="button"
			data-toggle="collapse"
			data-target="#toggleMobileMenu"
			aria-controls="#toggleMobileMenu"
			aria-expanded="false"
			aria-label="Toggle navigation">
				<span className="oi oi-menu">
                    <i className="navbar-toggler-icon"></i></span>
			</button>

            <div 
            className="collapse navbar-collapse " 
            id="toggleMobileMenu">

				<ul
                 className="navbar-nav ml-auto  ">
                    <li
                     className="nav-item">
                        <Link to="/" 
                        className="nav-link">Home</Link>
                    </li>

                    <li 
                    className="nav-item">
                        <Link to="/create" 
                        className="nav-link"
                        >New Blog</Link>
                    </li>
                </ul>
            </div>
        </nav>


     );
}
 
export default Navbar;