import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    return (
        <div className="hero min-h-screen bg-white-200" style={{ backgroundImage: 'url("https://i.ibb.co/S5rvq3Y/ryan-spencer-c-NEi-PIxp-YI-unsplash.jpg")', opacity: '0.9' }}>
        <div className="hero-content flex-col">
            <div className="text-center ">
                <h1 className="text-5xl text-yellow-500 font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body  glass">
                    <form >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning bg-white">Login</button>
                        </div>
                    </form>
                    <p> First time here? please <Link
                     to="/register">
                        <button className="btn btn-link">Register</button>
                    </Link> </p>

                    <div className="flex ml-6">
                    
                    <p>
                        
                        <button  className="btn btn-warning  text-blue "><FcGoogle></FcGoogle> Log in with Google</button></p>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;