import React from 'react';

const UserDetails = (props) => {
    const { selectedId, user } = props;
    const { userId, title, id, completed } = user;
    // console.log(selectedId, id)
    return (
        <div>
            {
                parseInt(selectedId) === id && <div>
                    <h1>{title}</h1>
                    <p>UserId: {userId}</p>
                    <p>Completed: { completed+'' }</p>
                </div>
            }
        </div>
    );
};

export default UserDetails;