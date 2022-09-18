
import fetch from "node-fetch";



async function getVehicles(){
    let response = await fetch('', 
                                {method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                    //btoa(username:password)
                                    'Authorization': 'Basic ' + btoa('USER:PASS')
                                }});
    let data = await response.json();
    console.log(data.length);

    

    //document.getElementById('data').innerHTML = data;
}

getVehicles();

