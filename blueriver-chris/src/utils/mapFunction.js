import React from 'react'

export default function mapFunction(zones){

   return zones.map((building, id) => {
        if (building.black === 0) {
          return (
            <a key={id} href="https://applefacilities.review.blueriver.com">
              {building.buildingname}
            </a>
          );
        } else {
          return <p key={id}>{building.buildingname}</p>;
        }
      })
}

