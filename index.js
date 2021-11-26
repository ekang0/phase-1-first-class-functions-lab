// Code your solution in this file!
const returnFirstTwoDrivers = (arrayParam) => {
    return arrayParam.slice(0, 2);
};

const returnLastTwoDrivers = (arrayParam) => {
    return arrayParam.slice(-2);
};

/* function selectingDrivers(){
    let newArray;
    newArray[0] = returnFirstTwoDrivers();
    newArray[1] = returnLastTwoDrivers();
    return newArray;
}; */

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(numVal){
    const multFare = () => numVal * numVal;
    return multFare; 
};

const fareMultiplier = function(param) {
    const multFare =  param * 2;
    return multFare;
};

const fareQuintupler = function(param) {
    const quintMult = param * 5;
    return quintMult;
};

function fareDoubler(numVal) {
    const doubleFare = numVal * 2;
    return doubleFare;
};

function fareTripler(numVal) {
    const tripleFare = numVal * 3;
    return tripleFare;
};

function selectDifferentDrivers(array, func) {
    let returnArray = func(array);
    return returnArray;
};