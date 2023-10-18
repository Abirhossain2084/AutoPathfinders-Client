
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: 'url("https://i.ibb.co/S5rvq3Y/ryan-spencer-c-NEi-PIxp-YI-unsplash.jpg")', opacity: '0.8' }}>
        <div className="hero-content flex-col">
            <div className="text-center ">
                <h1 className="text-5xl text-yellow-500 font-bold">Register now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" required placeholder="Password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Register</button>
                        </div>
                    </form>
                    <p> Already have account? <Link to="/login">
                        <button className="btn btn-link">Login</button>
                    </Link>here! </p>

                   
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;