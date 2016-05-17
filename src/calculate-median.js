function calculate_median(arr) {
    var evenArray = buildEvenArray(arr);

    var sortedEvenArray = sortEvenArray(evenArray);

    return buildMedian(sortedEvenArray);
}

function buildEvenArray(array) {
    var evenArray = [];

    for(var i = 0;i < array.length;i++){
        if((i + 1) % 2 === 0){
            evenArray.push(array[i]);
        }
    }

    return evenArray;
}

function sortEvenArray(evenArray) {
    return evenArray.sort(function(a,b) {
        return (a - b);
    });
}

function buildMedian(sortedEvenArray) {
    var median;
    var midPosition = parseInt((sortedEvenArray.length - 1)/2);

    if(isOddOfArrayLength(sortedEvenArray)){
        median = sortedEvenArray[midPosition];
    }
    else{
        median = (sortedEvenArray[midPosition] + sortedEvenArray[midPosition+1])/2;
    }

    return median;
}

function isOddOfArrayLength(array) {
    if(array.length % 2 === 1){
        return true;
    }
    else{
        return false;
    }
}

module.exports = calculate_median;
