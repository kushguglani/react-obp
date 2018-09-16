import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Media from "react-media";

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="navbarContainer clearfix">
                <ul className="navLinks ">
                    <li>
                        <Link to="/">BANKING</Link>
                    </li>
                    <li>
                        <Link to="/">ENERGY</Link>
                    </li>
                    <li>
                        <Link className="active" to="/dashboard">TELCO</Link>
                    </li>
                </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;