import fetch from "node-fetch";
import "dotenv/config.js"

let response = await fetch(process.env.UNASSIGNEDURL, 
                            {method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Basic ' + Buffer.from(process.env.APIAUTH).toString("base64")
                            }});
let data = await response.json();

//Create an array that contains unassigned vehicles id
export default function dataToArr(){
    let idArr = [];

    data.forEach(element => {
        idArr.push(element.vehicle_id);
    });

    return idArr;
}
