export default function filterSpeed(value){
    if (value.speed =! 0 && value.speed >= 10 && value.speed <=100){
        return true;
    }
}