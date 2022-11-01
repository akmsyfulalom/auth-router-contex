import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../contexs/UserContex';

const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContex);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log('register user', user);
            })
            .catch(error => {
                console.error('Error:', error)
            })
        console.log(name, email, password)


    }
    const handleGoogleSignIn = () => {
        googleSignIn(result => {
            const user = result.user;
            console.log(user)
        })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />

                            </div>
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover"> Already have an account</Link>
                            </label>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;