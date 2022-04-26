// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if (someValue>42) return someValue-42;
    else return 42-someValue
}


function distanceFromHqInFeet(someValue){
    return 264*(distanceFromHqInBlocks(someValue))
}


function distanceTravelledInFeet(start, destination){
    if (destination>start) return (destination-start)*264;
    else return (start-destination)*264;
}


function calculatesFarePrice(start, destination){
   let distance = distanceTravelledInFeet(start, destination);
    if (distance >= 2500){
        return 'cannot travel that far'
    }
    else if (distance >= 2000 && distance < 2500){
        return 25;
    }
    else if (distance >= 400 && distance < 2000){
        return (distance-400)*0.02;
    }
    else return 0;
}