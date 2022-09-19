import fetch from "node-fetch";

let response = await fetch('', 
                            {method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                //btoa(username:password)
                                'Authorization': 'Basic ' + btoa('')
                            }});
let data = await response.json();

//Create an array that contains unassigned vehicles id
export default function dataToArr(){
    let idArr = [];
    data.forEach(element => {
        idArr.push(element.vehicle_id)
    });

    console.log(idArr);
    return idArr;
}
