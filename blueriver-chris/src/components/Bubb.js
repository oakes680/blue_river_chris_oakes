import React from "react";

const Bubb = ({ zones }) => {
  let filteredZones = zones.filter((zone) => {
    return zone.buildingzone === "Bubb / Results Way";
  });

  filteredZones.sort((a, b) => (a.buildingname > b.buildingname ? 1 : -1));

  return (
    <>
      <h1>Bubb / Results Way</h1>
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

export default Bubb;
