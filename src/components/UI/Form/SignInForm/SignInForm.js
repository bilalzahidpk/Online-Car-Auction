import React from 'react';
import classes from "./SignInForm.module.css";

function SignInForm() {
    return (
        <div className={[classes["container"],"card"].join(" ")}>
        <div className="card-body mx-auto" style={{maxWidth: "400px"}}>
        <div className={classes["icon"]}><i className="fas fa-lock fa-2x"></i></div>  
        <h2 className="card-title mt-3 text-center">Login</h2>          
            <form>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                 </div>
                <input name="" className="form-control" placeholder="Username" type="text"/>
            </div> 
            
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                </div>
                <input className="form-control" placeholder="Password" type="password"/>
            </div> 
                                     
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
            </div>      
            <p className="text-center">New User? <a href="">Sign Up</a> </p>
            <p className="text-center"><a>Forgot password?</a></p>                                                                 
        </form>
        </div>
        </div>
    );
}

export default SignInForm;