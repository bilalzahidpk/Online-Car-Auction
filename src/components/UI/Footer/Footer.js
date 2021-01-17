import React from 'react';
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
    <footer className="bottom">
    <div className={["footer-top",classes["container"],classes["footer-main"]].join(" ")}>
        <div className="container">
            <div className="row">
                <div className="col-md-3 footer-about wow" style={{visibility: "visible"}}>
                    <h3>About us</h3>
                    <p>
                    We are a big brand for auctioning cars all around the world
                    </p>
                    <p>© Auto Vault Inc.</p>
                </div>
                <div className="col-md-4 offset-md-1 footer-contact wow" style={{visibility: "visible"}}>
                    <h3>Contact</h3>
                    <p><i className="fas fa-map-marker-alt"></i> Building No. 7, Port Qasim Karachi</p>
                    <p><i className="fas fa-phone"></i> +92-34651153</p>
                    <p><i className="fas fa-envelope"></i> <a href="mailto:hello@domain.com">support@autovault.com</a></p>
                </div>
                <div className={["col-md-4 footer-links wow",classes["links-container"]].join(" ")} style={{visibility: "visible"}}>
                    <div className="row">
                        <div className="col">
                            <h3>Links</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                         <p><Link className={classes["link"]} to="/">Home</Link></p>
                         <p><Link className={classes["link"]} to="/">Blog</Link></p>
                         <p><Link className={classes["link"]} to="/">About</Link></p>
                        </div>
                         
                      
                      <div className="col-md-6">
                        <p><Link className={classes["link"]} to="/">Contact</Link></p>
                        <p><Link className={classes["link"]} to="/">Support</Link></p>
                        <p><Link className={classes["link"]} to="/">T&C</Link></p>
                       </div>   
                           
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
        <div className="container ">
            <div className="row justify-content-center">
            <div className="py-2">
                        <a href="https://www.facebook.com/"><i className="fab fa-facebook fa-2x text-primary mx-3"></i></a>
                        <a href="https://www.google.com/"><i className="fab fa-google-plus fa-2x text-danger mx-3"></i></a>
                        <a href="https://www.twitter.com/"><i className="fab fa-twitter fa-2x text-info mx-3"></i></a>
                        <a href="https://www.youtube.com/"><i className="fab fa-youtube fa-2x text-danger mx-3"></i></a>
                    </div>
               </div>
        </div>
    </div>
    </div>
    
</footer>
        )
}
export default Footer;