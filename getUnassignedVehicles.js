import fetch from "node-fetch";
import "dotenv/config.js"

let response = await fetch(process.env.URLAPI2, 
                            {method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                //btoa(username:password)
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
