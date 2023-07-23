import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SignUpScreenContent = () => {

    const navigate = useNavigate();

    const [inputValues, setInputValues] = useState({
        username : '',
        email : '',
        password : '',
        cpassword : ''
    });

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setInputValues({ ...inputValues, [name] : value})
    }

    const submitHandle = (e) => {
        e.preventDefault();
        if(inputValues.username === ''){
            alert('your name is empty')
        }else if(inputValues.email === ''){
            alert('your email is empty')
        }else if(inputValues.password === ''){
            alert('your password is empty')
        }else if(inputValues.cpassword === ''){
            alert('your cpassword is empty')
        }else if(inputValues.password !== inputValues.cpassword){
            alert('password is not match')
        }else {
            let data = JSON.parse((localStorage.getItem("data1")));
            if(data !== null) {
                let exitsValue = data.findIndex((obj) => {
                    return obj.email === inputValues.email;
                });
            
                if(exitsValue < 0){
                    let ye_appke_localStorage_new_value_add_karta_hai = [...data, inputValues]
                    localStorage.setItem("data1", JSON.stringify(ye_appke_localStorage_new_value_add_karta_hai))
                    toast.success('your data is save.');
                    navigate('/sign-in')
                    
                }else {
                    toast.error('your email is already exits.')
                }
            }else {
                toast.error('your data is not save.')
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
                            <Link to="/sign-in" className="register-cls">Login</Link>
                        </div>
                        <h1>Sign Up</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum perspiciatis, eius nisi,
                        </p>
                    </div>
                    <div className="sign-in-fn">
                        <form className="sign-in-form" onSubmit={submitHandle} method='post'>
                            <input onChange={handleOnChange} type="text" name='username' className="username-and-pass" placeholder="Username" />
                            <input onChange={handleOnChange} type="email" name='email' className="email-user" placeholder="Email" />
                            <input onChange={handleOnChange} type="password" name='password' className="username-and-pass" placeholder="Password" />
                            <input onChange={handleOnChange} type="password" name='cpassword' className="username-and-pass" placeholder="Confirm Password" />
                            <div className="forget-btn">
                                <span className="forget-inner-allready">Already have an account</span>
                            </div>
                            <div className="sign-in-button">
                                <button type="submit" className="sign-in-btn-s">Sign Up</button>
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

export default SignUpScreenContent;
