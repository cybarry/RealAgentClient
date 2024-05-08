import React from "react";
import './Footer.css'

const Footer = () => {
    return(
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">

            {/* Left side */}
            <div className="flexColStart f-left">
                <img src="./1 1.png" width={120} alt="" />

                <span className="secondaryText">
                    our vision is to make   all people <br />
                    the best place they can live
                </span>
            </div>

            {/* Right side */}
            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText">Computer Engineering Dept <br />
                Ahmadu Bello University, Zaria</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About</span>
                </div>
            </div>
                
            </div>
        </section>
    )
}

export default Footer