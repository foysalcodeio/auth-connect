import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

const Login = () => {

    const {signInUser, signInGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then((result)=> {
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .catch((error)=> {
            console.error(error)
        })
    }
    const handleGoogleSignIn = () =>{
        signInGoogle()
        .then((result) =>{
            console.log(result.user);
        })
        .catch((error)=>{
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleLogin}>

                  
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="email" 
                            className="input input-bordered"
                            required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input 
                            type="password" 
                            name="password"
                            placeholder="password" 
                            className="input input-bordered" 
                            autocomplete="current-password"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>

                </form>

                <p className="ml-6">Already Registered? Please 
                    <Link to="/login"> 
                        <button className="btn btn-link">Register</button>
                    </Link>
                </p>
                <div className="flex flex-col items-center">
                    <p className="mb-3 text-white">Social Media Login</p>
                    <p> <button onClick={handleGoogleSignIn} className="btn bg-orange-600 text-white">Google</button></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;