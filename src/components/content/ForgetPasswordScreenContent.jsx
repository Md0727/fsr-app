import {React, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ForgetPasswordScreenContent = () => {

    const navigate = useNavigate();

    const [inputvales, setInputvales] = useState({
        email : "",
        npassword : "",
        cpassword : ""
    });

    const inputHandler = (e) => {
        setInputvales({...inputvales, [e.target.name] : e.target.value})
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        let get_st_data = JSON.parse(localStorage.getItem("data1"))
        let fillterData = get_st_data.filter((items) =>{
            return inputvales.email === items.email
        })
        if (inputvales.email === "") {
            toast.error("email field is empty!")
        }else if (inputvales.npassword === ""){
            toast.error("New pasword field is empty!")
        }else if (inputvales.cpassword === ""){
            toast.error("Confirm password field is empty!")
        }else if (inputvales.npassword !== inputvales.cpassword){
            toast.error("New pasword and Confirm password is not match !")
        }
        else {
            if (fillterData.length <= 0) {
                toast.error("Your email is not match, please verify email !")
            }else {
                let updateNewPass = fillterData[0].password = inputvales.npassword;
                let updateConfirmPass = fillterData[0].password = inputvales.cpassword;
                let obj = {username : fillterData[0].username, email : fillterData[0].email, password : updateNewPass, cpassword : updateConfirmPass}

                const updateAray = get_st_data.findIndex((obj) => obj.email === fillterData[0].email)

                get_st_data[updateAray] = obj
                localStorage.setItem("data1", JSON.stringify(get_st_data))
                toast.success("Your password is forget successfully");
                navigate('/sign-in')

            }
        }

    } 
    


    return (
        <div className="main-wrraper">
            <div className="container py-0">
                <div className="sign-in-screen">
                    <div className="sign-in-screen-cn">
                        <div className="icon-arrow">
                            <Link to="/sign-in">
                                <i className="fa fa-long-arrow-left" aria-hidden="true" />
                            </Link>
                            <Link to="/sign-in" className="register-cls">Login</Link>
                        </div>
                        <h1>Forget Password</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum perspiciatis, eius nisi,
                        </p>
                    </div>
                    <div className="sign-in-fn">
                        <form action="#" className="sign-in-form">
                            <input type="email" onChange={inputHandler} name="email" className="email-user" placeholder="Email" />
                            <input type="password" onChange={inputHandler} name='npassword' className="username-and-pass" placeholder="New Password" />
                            <input type="password" onChange={inputHandler} name='cpassword' className="username-and-pass" placeholder="Confirm Password" />
                            <div className="forget-btn">
                                <span className="forget-inner-allready">Email is Required</span>
                            </div>
                            <div className="sign-in-button">
                                <button type="submit" onClick={submitHandler} className="sign-in-btn-s">Forget Password</button>
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

export default ForgetPasswordScreenContent;
