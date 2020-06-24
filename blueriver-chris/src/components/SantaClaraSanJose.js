import React from "react";
//import filter function and map function from utils
import filterZones from "../utils/filterZone";
import mapFunction from "../utils/mapFunction"

const SantaClaraSanJose = ({ zones }) => {
    // filter data for all building zones titled Apple Park

    let filteredZones = filterZones(zones, "Santa Clara/San Jose");

    return (
        <>
            <h3>{filteredZones.length < 1 ? 'Loading' : filteredZones[0].buildingzone}</h3>
            <div className="buildings">
                {mapFunction(filteredZones)}
            </div>
        </>
    );
};

export default SantaClaraSanJose;
