import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import './User.css';

const User = (props) => {
    const { title, completed, id } = props.user;
    const history = useHistory();
    const handleDetail = (id) => {
        history.push(`/detail/${id}`)
    }

    return (
        <div className="user container">
            <h4>{title}</h4>
            
            <p>Completed: {completed + ''}</p>
            {
                completed?<h5>Congratulations</h5>:<b>Ooops! Complete soon</b>
            }
            <Button variant="outline-danger ms-3"
                id={id}
                onClick={() => handleDetail(id) }>Detail</Button>
        </div>

    );
};

export default User;