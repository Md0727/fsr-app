import React from 'react';
import { Link } from 'react-router-dom';

const ProfileUpdateScreenContent = () => {
    return (
        <div className="main-wrraper">
            <div className="container py-0">
                <div className="sign-in-screen">
                    <div className="sign-in-screen-cn">
                        <div className="icon-arrow">
                            <Link to="/welcome-screen">
                                <i className="fa fa-long-arrow-left" aria-hidden="true" />
                            </Link>
                            <Link to="/sign-in" className="register-cls">Login</Link>
                        </div>
                        <h1>Profile Update</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum perspiciatis, eius nisi,
                        </p>
                    </div>
                    <div className="sign-in-fn">
                        <form action="#" className="sign-in-form">
                            <input type="text" className="username-and-pass" placeholder="First Name" />
                            <input type="text" className="username-and-pass" placeholder="Last Name" />
                            <input type="email" className="email-user" placeholder="Email" />
                            <input type="tel" className="username-and-pass" placeholder="Contact Number" />
                            <input type="file" className="username-and-pass" />
                            <div className="forget-btn">
                                <span className="forget-inner-allready">Already have an account</span>
                            </div>
                            <div className="sign-in-button">
                                <button type="submit" className="sign-in-btn-s">Profile Update</button>
                            </div>
                        </form>
                    </div>
                    <div className="account-verfy-sin-up">
                        <Link className="contiune-with" to="/">
                            <img src="assets/images/icon/google.jpg" alt="google" className="google-icon" />
                            <span className="with-google-titile">Contiune with Google</span>
                            <i className="fa fa-long-arrow-right" aria-hidden="true" />
                        </Link>
                        <Link className="contiune-with" to="/">
                            <img src="assets/images/icon/facebook.jpg" alt="google" className="google-icon" />
                            <span className="with-google-titile">Contiune with Facebook</span>
                            <i className="fa fa-long-arrow-right" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileUpdateScreenContent;
