import fetch from "node-fetch";
//import filterUnassigned from "./filters/filterByUnassignedId.js"
import filterSpeed from "./filters/filterBySpeed.js"
import filterTimestamp from "./filters/filterByTimestamp.js"

async function getVehicles(){
    let response = await fetch('', 
                                {method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                    //btoa(username:password)
                                    'Authorization': 'Basic ' + btoa('')
                                }});
    let data = await response.json();
    console.log(data.length);

    let filterData = data.filter(filterSpeed);
    console.log(filterData.length);

    //document.getElementById('data').innerHTML = filterdata;
}

getVehicles();