import React from "react";

const SunnyvaleWest = ({ zones }) => {
  let filteredZones = zones.filter((zone) => {
    return zone.buildingzone === "Sunnyvale West";
  });

  filteredZones.sort((a, b) => (a.buildingname > b.buildingname ? 1 : -1));

  return (
    <>
      <h3>Sunnyvale West</h3>
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

export default SunnyvaleWest;
