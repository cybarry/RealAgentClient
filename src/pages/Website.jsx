import React from "react";
import Hero from "../component/Hero/Hero"
import Companies from "../component/Companies/Companies";
import Residencies from "../component/Residencies/Residencies";
import Value from "../component/Value/Value";
import Contact from "../component/Contact/Contact";
import GetStarted from "../component/GetStarted/GetStarted";

const Website = () => {
    return (
        <div className="App">
            <div>
                <div className="white-gradient" />
                <Hero />
            </div>
            <div>
                <Companies />
                <Residencies />
                <Value />
                <Contact />
                <GetStarted />
            </div>

        </div>
    )
}

export default Website