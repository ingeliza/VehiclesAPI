import fetch from "node-fetch";
import filterSpeed from "./filters/filterBySpeed.js";
import filterTimestamp from "./filters/filterByTimestamp.js";
import filterUnassigned from "./filters/filterByUnassignedId.js";
import "dotenv/config.js"

async function getVehicles(){
    let response = await fetch(process.env.URLAPI1, 
                                {method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                    //btoa(username:password)
                                    'Authorization': 'Basic ' + btoa(process.env.USERNAMEAPI +':'+ process.env.PASSWORDAPI)
                                }});
    let data = await response.json();
    //console.log(data.length);

    let filter1 = data.filter(filterUnassigned);
    let filter2 = filter1.filter(filterSpeed);
    let filter3 = filter2.filter(filterTimestamp);
    //console.log(filter1.length);
    //console.log(filter2.length);
    console.log(filter3);

    //document.getElementById('data').innerHTML = filterdata;
}

getVehicles();