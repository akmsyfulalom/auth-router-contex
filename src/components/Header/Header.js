

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../contexs/UserContex';



const Header = () => {
    const { user, logOut } = useContext(AuthContex)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>

            <div className="navbar bg-primary text-primary-content justify-around">
                <div>
                    <Link className="mr-20 ml-10 normal-case text-2xl" to='/'>Awesome Auth </Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                    {user?.email && <span>{user.email}</span>}
                </div>
                {
                    user?.email ?
                        <div>
                            <button onClick={handleLogOut} className="btn btn-sm bg-indigo-600 border-0 text-white ">Log Out</button>
                        </div>
                        :
                        <div>
                            <Link to="/login" className="btn btn-sm bg-indigo-600 border-0 text-white ">Log In</Link>
                        </div>
                }
            </div>

        </div>
    );
};

export default Header;