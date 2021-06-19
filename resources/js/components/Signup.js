import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';


function Signup(props) {
    const [state, setState] = useState({
        // firstname: '',
        name: '',
        email: '',
        password: '',
        // password_confirmation: '',
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
        
        // if (this.validator.allValid()) {
        //     this.setState({
        //         loading: true
        //     });
            
            axios.post('/signup', $(e.target).serialize())
            .then(response => {
                setState({
                    loading: false
                });
                // if (response.data.status == 'validation-error') {
                //     var errorArray = response.data.message;
                //     $.each( errorArray, function( key, errors ) {
                //         $.each( errors, function( key, errorMessage ) {
                //             Helpers.showSznNotification({
                //                 type : 'error',
                //                 message : errorMessage
                //             });
                //         });
                //     });
                // } else if (response.data.status == 'error') {
                //         Helpers.showSznNotification({
                //             type : 'error',
                //             message : response.data.message
                //         });
                // } else if (response.data.status == 'success') {
                    
                //    window.location = "/home";
                // }

                if (response.data.message == 'success') {
                    
                   window.location = "/dashboard";
                }
            })
            // .catch((error) => {
            //     this.setState({
            //         loading: false
            //     });
            //     if (error.response.data.status == 'validation-error') {
            //         var errorArray = error.response.data.message;
            //         $.each( errorArray, function( key, errors ) {
            //             $.each( errors, function( key, errorMessage ) {
            //                 Helpers.showSznNotification({
            //                     type : 'error',
            //                     message : errorMessage
            //                 });
            //             });
            //         });
            //     } else if (error.response.data.status == 'error') {
            //         Helpers.showSznNotification({
            //             type : 'error',
            //             message : error.response.data.message
            //         });
            //     } 
                
            // });
        // } else {
        //     this.validator.showMessages();
        // }

    }

    return (
        <div>
            <div className="auth-form container sm mt-80 mb-20 ">
            {/* <img src="/assets/images/Home.png" className="login-bg opacity-70 absolute" alt="" /> */}
                <h1 className="text-center text-4xl font-bold">Join Us</h1>
                <p className="text-center mt-3">
                    Create an account and begin keeping <br />
                    track of all of your crypto investments
                </p>
                <div className="loginform ">
                    <form  onSubmit={onSubmitHandle}>
                        <label htmlFor="name" className="block mt-4 text-gray-700 text-sm font-bold mb-2">Full Name</label>
                        <input type="name" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={state.name}
                            name="name"
                            onChange={onChangeHandle} 
                        />
                        <label htmlFor="email" className="block mt-4 text-gray-700 text-sm font-bold mb-2">Email</label>
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
                        <button name="submit" className="bg-mygreen hover:bg-mygreen text-white w-full mt-5 font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">Sign Up</button>
                        <div className="flex justify-between">
                        <p>Have an account? <Link to='/login'><b>Login!</b></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;

 