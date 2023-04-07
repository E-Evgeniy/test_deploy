import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function PlacesList() {
    return (
        <div> REACT</div>
    )
}

// Add some javascript to replace the div where = 'places-list-container'
// with com=ntent render above

const placesList = ReactDOM.createRoot(document.getElementById("app"));
placesList.render(<PlacesList />);