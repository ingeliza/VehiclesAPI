
import fetch from "node-fetch";



function filterSpeed(value){
    if (value.speed =! 0 && value.speed >= 10 && value.speed <=100){

    }
}

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

    let filterData = data.filter(filterSpeed);
    console.log(filterData);

    //document.getElementById('data').innerHTML = data;
}

getVehicles();

