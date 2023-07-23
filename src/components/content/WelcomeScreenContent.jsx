import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeScreenContent = () => {
    return (
        <div className="main-wrraper">
            <div className="container py-0">
                <div className="welcome-screeen">
                    <Link className="logo-image" to="/">
                        <img src="assets/images/logo/logo.png" alt="logo" className="logo-img" />
                    </Link>
                    <div className="welcome-box">
                        <h1>Welcome</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum perspiciatis, eius nisi,
                        </p>
                        <div className="btn-login-and-sign">
                            <Link to="/sign-in" className="login-btnds">Sign In</Link>
                            <Link to="/sign-up" className="login-btnds-Up">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default WelcomeScreenContent;
