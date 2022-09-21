export default function filterTimestamp(value){
    var timeNow = new Date();
    var timeValue = new Date(value.timestamp);
    var timeInMs = timeNow.getTime() - timeValue.getTime();
    var twelveMsInHours = 12 * 60 * 60 * 1000;

    if (timeInMs <= twelveMsInHours){
        return true;
    }
    else{
        return false;
    }
}