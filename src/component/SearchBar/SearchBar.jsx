import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const SearchBar = () => {
    return (
        <div className=" flexCenter search-bar">
            <HiLocationMarker color="#1f3e72" size={40} />
            <input type="text" />
            <button className="button" >Search</button>

        </div>
    )
}

export default SearchBar