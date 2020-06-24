import React from "react";

const OtherBayArea = ({ zones }) => {
  let filteredZones = zones.filter((zone) => {
    return zone.buildingzone === "Other Bay Area";
  });

  filteredZones.sort((a, b) => (a.buildingname > b.buildingname ? 1 : -1));

  return (
    <>
      <h3>Other Bay Area</h3>
      <div className="buildings">
      {filteredZones.map((building) => {
        if (building.black === 1) {
          return (
            <a href="https://applefacilities.review.blueriver.com">
              {building.buildingname}
            </a>
          );
        } else {
          return <p>{building.buildingname}</p>;
        }
      })}
      </div>
    </>
  );
};

export default OtherBayArea;
