import React from "react";
import './Hero.css'
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">

                {/* left side */}
                <div className=" flexColStart hero-left">
                    <div className="hero-title">
                        <div className="circle" />
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "spring"
                            }}
                        >Where Comfort <br />Meets Convenience: <br />  Welcome to Your New Home</motion.h1>
                    </div>

                    <div className="flexColStart hero-desc">
                        <span className="secondaryText">
                            Welcome to our vibrant campus community!
                        </span>
                        <span className="secondaryText">
                            Explore our student accommodations and find your perfect home away from home.
                        </span>
                        <span className="secondaryText">
                            Accomodation made easy
                        </span>
                    </div>

                    <SearchBar/>

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Luxury Products</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Satisfied Customer</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={5} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Award</span>
                        </div>

                    </div>

                </div>

                {/* right side */}
                <div className="flexCenter hero-right">
                    <motion.div
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "spring"
                        }}

                        className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
export default Hero