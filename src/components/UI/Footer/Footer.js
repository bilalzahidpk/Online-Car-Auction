import React from 'react';
import classes from "./Footer.module.css";

function Footer() {
    return (
        <div className="footer h-25" style={{backgroundColor : "white"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center text-md-left ">
                    
                    <div className={[classes["container"],"py-0"].join(" ")}>
                        <h3 className="my-4 "><span className="mx-2 font-italic text-black ">Auto Vault</span></h3>

                            <a className={classes["link"]} href="#">Home</a>
                           
                            <a className={classes["link"]} href="#">Blog</a>
                           
                            <a className={classes["link"]} href="#">About</a>
                          
                            <a className={classes["link"]} href="#">Contact</a>
                            
                            <a className={classes["link"]} href="#">Support</a>

                            <a className={classes["link"]} href="#">Terms & Conditions</a>
                            
                            

                            
                        <p className="text-light py-4 mb-4">&copy;2019 Auto Vault Pvt. Ltd.</p>
                    </div>
                </div>
                
                <div className="col-md-4  text-center text-md-left ">
                    <div className="py-2 my-4">
                        <div>
                            <p className=""> <i className="fa fa-map-marker mx-2 "></i>Building No. 7, Port Qasim   Karachi</p>
                        </div>

                        <div> 
                            <p><i className="fa fa-phone  mx-2 "></i> +92 21-34651153</p>
                        </div>
                        <div>
                            <p><i className="fa fa-envelope  mx-2"></i><a href="mailto:support@eduonix.com">support@autovault.com</a></p>
                        </div>  
                    </div>  
                </div>
                
                <div className="col-md-4  my-4 text-center text-md-left">
                    <span className=" font-weight-bold ">About the Company</span>
					<p className={[classes["description"],"my-2"].join(" ")} >We are a big brand for auctioning cars all around the world</p>
                    <div className="py-2">
                        <a href="#"><i className="fab fa-facebook fa-2x text-primary mx-3"></i></a>
                        <a href="#"><i className="fab fa-google-plus fa-2x text-danger mx-3"></i></a>
                        <a href="#"><i className="fab fa-twitter fa-2x text-info mx-3"></i></a>
                        <a href="#"><i className="fab fa-youtube fa-2x text-danger mx-3"></i></a>
                    </div>
                </div>
            </div>  
        </div>
     </div>
        )
}
export default Footer;