import React from 'react';
import useData from '../../hooks/useData/useData';
import User from '../User/User';


const Users = () => {
    const users = useData();

    return (
        <div>
            {
                users.map(user=><User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;