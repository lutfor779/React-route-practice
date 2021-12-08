import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    return (
        <div>
            <h1>Not Found</h1>
            <Button onClick={()=>history.push("/")}>Home</Button>
        </div>
    );
};

export default NotFound;