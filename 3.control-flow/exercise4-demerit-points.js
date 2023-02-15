
// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(130);

function checkSpeed(speed){  
    const speedLimit = 70
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint)
    console.log('Ok');
    else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
            console.log ('Licence suspended');
        else
            console.log('Points', points);
    }      
}