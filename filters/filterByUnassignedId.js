import dataToArr from "../getUnassignedVehicles.js";

let arr = dataToArr();

export default function filterUnassigned(value){
    var currentId = value.vehicle_id;
    
    if (arr.indexOf(currentId) === -1){
         return true;
    }
}
