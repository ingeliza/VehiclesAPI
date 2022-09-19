import getUnassignedVehicles from "../getUnassignedVehicles.js"


var idArr = Array.from(getUnassignedVehicles());


export default function filterUnassigned(value){
    var currentId = value.vehicle_id;

    if (idArr.indexOf(currentId) === -1){
         return true;
    }
}