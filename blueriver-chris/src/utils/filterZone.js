
export default function filterZones(zones, target){
    let filteredZones = zones.filter((zone) => {
        return zone.buildingzone === target;
      });
    
     return  filteredZones.sort((a, b) => (a.buildingname > b.buildingname ? 1 : -1));
}



