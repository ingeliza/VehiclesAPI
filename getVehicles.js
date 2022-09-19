
import fetch from "node-fetch";



function filterSpeed(value){
    if (value.speed =! 0 && value.speed >= 10 && value.speed <=100){
        return true;
    }
}

function filterTimestamp(value){
    var timeNow = new Date();
    var timeValue = new Date(value.timestamp);
    var a = new Date("2016-07-19T20:23:01.804Z");
    var timeInMs = timeNow.getTime() - timeValue.getTime();
    var twelveMsInHours = 12 * 60 * 60 * 1000;

    if (timeInMs <= twelveMsInHours){
        return true;
    }


}

function filterUnassigned(value){

}


async function getUnassignedVehicles(){
    let response = await fetch('', 
                                {method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                    //btoa(username:password)
                                    'Authorization': 'Basic ' + btoa('')
                                }});
    let data = await response.json();
    console.log(data.length);
}


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
    console.log(filterData);

    //document.getElementById('data').innerHTML = data;
}

getVehicles();

