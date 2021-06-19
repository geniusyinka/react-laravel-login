import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';


function Login(porps) {
    const [state, setState] = useState({
        email: "demo@user.com",
        password: "1234567890",
        loading: false
    })

   const onChangeHandle = (e) =>{
        const { name, value } = e.target;
        setState({
            [name] : value
        });
    }

   const onSubmitHandle = (e) =>{
        e.preventDefault();

            axios.post('http://127.0.0.1:8000/login', $(e.target).serialize())
            .then(response => {
                if (response.data.message == "success") {
                    setState({
                        loading: true
                    });
                    //save api token
                    //to do
                   window.location = "/dashboard";
                   console.log('it worked!')
                }
            })
            // .catch((error) => {
            //     this.setState({
            //         loading: false
            //     });
                //console.log('error o, omo!')
        //         if (error.response.data.status == 'validation-error') {
        //             var errorArray = error.response.data.message;
        //             $.each( errorArray, function( key, errors ) {
        //                 $.each( errors, function( key, errorMessage ) {
        //                     Helpers.showSznNotification({
        //                         type : 'error',
        //                         message : errorMessage
        //                     });
        //                 });
        //             });
        //         } else if (error.response.data.status == 'error') {
        //             Helpers.showSznNotification({
        //                 type : 'error',
        //                 message : error.response.data.message
        //             });
        //         } 
                
        //     });
        // } else {
        //     this.validator.showMessages();
        // }

    }


    return (
        <div>
            <div className="auth-form container sm mt-80 mb-10 ">
            {/* <img src="/assets/images/Home.png" className="login-bg opacity-70 absolute" alt="" /> */}
                <h1 className="text-center text-4xl font-bold">Welcome Back!</h1>
                <div className="loginform ">
                    <form  onSubmit={onSubmitHandle}>
                        <label htmlFor="email" className="block mt-4 text-gray-700 text-sm font-bold mb-2" >Email</label>
                        <input type="email" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={state.email}
                            name="email"
                            onChange={onChangeHandle}
                        />
                        <label htmlFor="password" className="block mt-4 text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={state.password}
                            name="password"
                            onChange={onChangeHandle}
                        />
                        <button name="submit" 
                            className="bg-mygreen hover:bg-mygreen text-white w-full mt-5 font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">Sign In</button>
                        <div className="flex justify-between">
                        <p className="">Forgot Password?</p> <p>New here? <Link to='/signup'><b>Sign up!</b></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

 