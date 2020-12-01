import React from 'react';
import classes from "./SignUpForm.module.css";

function SignUpForm() {
    return (
        
<div className={[classes["container"],"card"].join(" ")}>
<div className="card-body mx-auto" style={{maxWidth: "400px"}}>
<div className={classes["icon"]}><i className="fas fa-lock fa-2x"></i></div>
	<h2 className="card-title mt-3 text-center">Create Account</h2>
<h6 className={classes["register-text"]}>Register a free account to start bidding cars</h6>

	<p>
		<a href="" className={["btn btn-block",classes["btn-twitter"]].join(" ")}> <i className="fab fa-twitter"></i>   Login via Twitter</a>
		<a href="" className={["btn btn-block",classes["btn-facebook"]].join(" ")}> <i className="fab fa-facebook-f"></i>   Login via facebook</a>
	</p>
	<p className={classes["divider-text"]}>
        <span className="bg-light">OR</span>
    </p>
	<form>
	<div className="form-group input-group">
		<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
		 </div>
        <input name="" className="form-control" placeholder="Full name" type="text"/>
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
		 </div>
        <input name="" className="form-control" placeholder="Email address" type="email"/>
    </div> 
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
		</div>
		<select class="custom-select" style={{maxWidth: "120px"}}>
		    <option selected="">+92</option>
		    <option value="1">+1</option>
		    <option value="2">+44</option>
		    <option value="3">+81</option>
		    <option value="4">+971</option>
		    <option value="5">+104</option>
		</select>
    	<input name="" class="form-control" placeholder="Phone number" type="text"/>
    </div>

    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-building"></i> </span>
		</div>
		<select className="form-control">
			<option selected=""> Select Consumer Type</option>
			<option>Individual</option>
			<option>Business</option>
		</select>
	</div>
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input className="form-control" placeholder="Create password" type="password"/>
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input className="form-control" placeholder="Repeat password" type="password"/>
    </div>                                      
    <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
    </div>      
    <p className="text-center">Have an account? <a href="">Log In</a> </p>                                                                 
</form>
</div>
</div> 
    )
}

export default SignUpForm;