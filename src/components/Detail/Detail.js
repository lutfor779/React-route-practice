import React from 'react';
import "./Detail.css";
import { Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import useData from '../../hooks/useData/useData';
import UserDetails from '../UserDetails/UserDetails';

const Detail = () => {
    const users = useData();
    const { id } = useParams();
    const history = useHistory();
    
    return (
        <div>
            {
                users.map(user => <UserDetails key={user.id}
                    selectedId={id}
                    user={user}></UserDetails>)
            }
            <div className="button">
                <Button onClick={() => history.push("/")}>Home</Button>
                <Button onClick={() => window.history.back()}>Back</Button>
            </div>
        </div>
    );
};

export default Detail;