export default function filterSpeed(value){
    let speed = value.speed;
    if (speed =! 0 && speed >= 10 && speed <=100){
        return true;
    }
}