import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignInScreenContent = () => {
    const navigate = useNavigate();

    const [inputValues, setInputValues] = useState({
        email : '',
        password : ''
    });


    const inputHandle = (e) => {
        setInputValues({...inputValues, [e.target.name] : e.target.value})
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if(inputValues.email === "" && inputValues.password === "") {
            toast.error('Email Or Password is empty !')
        }else {
            if(inputValues.email === "alam@gmail.com" && inputValues.password === "admin"){
                toast.success("LogIn Successfull.");
                navigate('/')
            }else {
                let get_st_data = JSON.parse(localStorage.getItem('data1'));
                let fillterData = get_st_data.filter((matchItem)=>{
                    return inputValues.email === matchItem.email && inputValues.password === matchItem.password;
                })
                if (fillterData.length <= 0) {
                    toast.error('Email or Password not match !')
                    
                }
                else {
                    toast.success("LogIn Successfull.");
                    navigate('/')
                }
            }

            
        }
    }

    return (
        <div className="main-wrraper">
            <div className="container py-0">
                <div className="sign-in-screen">
                    <div className="sign-in-screen-cn">
                        <div className="icon-arrow">
                            <Link to="/welcome-screen">
                                <i className="fa fa-long-arrow-left" aria-hidden="true" />
                            </Link>
                            <Link to="/sign-up" className="register-cls">Register</Link>
                        </div>
                        <h1>Sign In</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum perspiciatis, eius nisi,
                        </p>
                    </div>
                    <div className="sign-in-fn">
                        <form action="#" className="sign-in-form">
                            <input type="text" onChange={inputHandle}  name='email' className="username-and-pass" placeholder="Username" />
                            <input type="password" onChange={inputHandle} name='password' className="username-and-pass" placeholder="Password" />
                            <div className="forget-btn">
                                <Link to="/forget-password" className="forget-inner">Forget Password</Link>
                            </div>
                            <div className="sign-in-button">
                                <button type="submit" onClick={submitHandler} className="sign-in-btn-s">Sign In</button>
                            </div>
                        </form>
                    </div>
                    <div className="account-verfy">
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

export default SignInScreenContent;
