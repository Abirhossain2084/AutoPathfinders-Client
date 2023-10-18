import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {

    
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('User logged out successfully'))
            .catch(error => console.error(error))
    }

    const navLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>

            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/addproduct">Add Product</NavLink></li>
            <li><NavLink to="/mycart">My Cart</NavLink></li>

          
        </>
    );

    return (
        <div className="navbar bg-purple-950">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' ><a className="btn btn-warning bg-purple-700 border-0 text-white normal-case font-bold text-sm lg:text-3xl">AutoPathfinders</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end  ">

                <div className="form-control  ">
                    {user ? (
                        <>
                           
                            <div className="w-10 ml-4 rounded-full bg-black">
                                {user && (
                                    <img src={user.photoURL} alt="User Avatar" className="w-10 h-10 rounded-full" />
                                    
                                )}
                            </div>
                            <span className="ml-4">Welcome, {user.displayName}</span>
                            <span className="ml-4">Email: {user.email}</span>
                            
                            <a 
                            
                            onClick={handleLogOut} className="btn btn-sm btn-warning w-44 ml-4">Sign Out</a>
                        </>
                    ) : (
                        <Link to='/login'><button className="btn btn-warning">Log in</button></Link>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;
