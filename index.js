// // Code your solution in this file!
// function distanceFromHqInBlocks (someValue){
//     if (someValue > 42){
//         return someValue - 42;

//     }else {
//         return 42 - someValue
//     }
// }
// function distanceFromHqInFeet (someValue){
//     return distanceFromHqInBlocks(someValue) + 264; 
// }
// function distanceTravelledInFeet (start, destination){
//     if (destination > start){
//         return (destination - start) + 264
//     }
//     else {
//         return (start - destination) + 264
//     }
// }function calculatesFarePrice(start, destination){
//     let distance = (distanceTravelledInFeet (start, destination));

//     if (distance <= 400 ) {
//         return 0;
//     }
//     else if ( distance > 400 && distance <= 2000){
//         return( distance - 400 ) +0.02;
//     }
//     else if (distance > 2500 && distance <= 2500){
//         return 25;

//     }
//     else {
//         return "cannot travel that far";
//     }

        
    
// }

function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation >= 43) {
        return pickupLocation - 42
    }else{
        return 42 - pickupLocation
    }

}


function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) *264
}


function distanceTravelledInFeet(block1, block2) {
    if (block2 > block1) {
        return (block2 - block1) * 264
    } else{
        return (block1 - block2) * 264
    }
}

function calculatesFarePrice(block1, block2) {
    let distance = distanceTravelledInFeet(block1, block2)

    if (distance <= 400) {
        return 0
    } else if(distance > 400 && distance < 2000) {
        return (distance -400) * 0.02
    }else if(distance >=2000 && distance < 2500) {
        return 25
    }else {
       return 'cannot travel that far'
    }
}

















































































































































