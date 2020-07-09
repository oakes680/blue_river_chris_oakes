import React from "react";
//import filter function and map function from utils
import filterZones from "../utils/filterZone";
import mapFunction from "../utils/mapFunction"


const SunnyValeEast = ({ zones }) => {
    // filter data for all building zones titled Apple Park

    let filteredZones = filterZones(zones, "Sunnyvale East");

    return (
        <>
            <h3>{filteredZones.length < 1 ? 'Loading' : filteredZones[0].buildingzone}</h3>
            <div className="buildings">
                {mapFunction(filteredZones)}
            </div>
        </>
    );
};

export default SunnyValeEast;
