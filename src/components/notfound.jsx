import React from 'react';
import './css/tablestyle.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{textAlign: "center", marginTop: 30}}>
            <h1>Oops!</h1>
            <h1> Page Not Found</h1>
            <Link to='/'  style={{textAlign: "center"}}><button class="btn btn-primary" type="submit">Home Page</button></Link>
        </div>
    );
};

export default NotFound;