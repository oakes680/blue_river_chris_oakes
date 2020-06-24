import React from "react";

const SunnyValeEast = ({ zones }) => {
  let filteredZones = zones.filter((zone) => {
    return zone.buildingzone === "Sunnyvale East";
  });

  filteredZones.sort((a, b) => (a.buildingname > b.buildingname ? 1 : -1));

  return (
    <>
      <h1>Sunnyvale East</h1>
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
    </>
  );
};

export default SunnyValeEast;
