import React from 'react';
import classes from "./HomeImage.module.css"

function homeImage() {
    return (
        <div>
            <div className={classes["image-container"]}>
                   <br/>
                   <h1 className={classes.text}>Want to buy Cars?</h1>
                   <br/>
                   <h2 className={classes.text}>Participate in Auctions all over the world</h2>
                   <br/>
                   <h1 className={classes.text}>Get your vehicles delivered at your doorstep!</h1>
                   <br></br>
                   <h2>Visit our inventory to find new, used and savage cars</h2>
                   <br></br>
                   </div>
                   
        </div>
    )
}
export default homeImage;