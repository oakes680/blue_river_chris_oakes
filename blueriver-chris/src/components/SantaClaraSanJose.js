import React from "react";

const SantaClaraSanJose = ({ zones }) => {
  let filteredZones = zones.filter((zone) => {
    return zone.buildingzone === "Santa Clara/San Jose";
  });

  filteredZones.sort((a, b) => (a.buildingname > b.buildingname ? 1 : -1));

  return (
    <>
      <h1>Santa Clara/San Jose</h1>
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

export default SantaClaraSanJose;
