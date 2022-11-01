import React, { useContext } from 'react';
import { AuthContex } from '../../contexs/UserContex';

const Home = () => {
    const { user } = useContext(AuthContex);

    return (
        <div>
            <h3>This is Home</h3>
            {user?.displayName && <span>Welcome {user.email}</span>}
        </div>
    );
};

export default Home;