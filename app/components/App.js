import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) =>
    <div>
        <h1>Currency rates for a particular day</h1>
        { children }
        <footer>
            <Link to="/">Date</Link>
            <Link to="/about">About</Link>
            <Link to="/App1">App1</Link>
        </footer>
    </div>;


App.propTypes = {
    children: PropTypes.object
};

export default App;