import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <div className="links">
                <Link to="/" className="pr-1">Home</Link>
                <Link to="/online" className="px-1">Online</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;