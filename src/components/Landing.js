import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <Link to="/dashboard">Go to dashboard</Link>
        </div>
    )
}

export default Landing;