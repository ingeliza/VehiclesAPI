import fetch from "node-fetch";
import filterSpeed from "./filters/filterBySpeed.js";
import filterTimestamp from "./filters/filterByTimestamp.js";
import filterUnassigned from "./filters/filterByUnassignedId.js";
import "dotenv/config.js"


let response = await fetch(process.env.VEHICLESURL, 
                            {method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Basic ' + Buffer.from(process.env.APIAUTH).toString("base64")
                            }});
let data = await response.json();

let filter1 = data.filter(filterUnassigned);
let filter2 = filter1.filter(filterSpeed);
let filter3 = filter2.filter(filterTimestamp);

console.log(filter3);
