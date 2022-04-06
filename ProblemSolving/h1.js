let inputArray = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];

function allLongestStrings(inputArray) {
    let returnArray = [];
    let count = inputArray[0].length;
    for (let i in inputArray) {
        if (inputArray[i].length > count) {
            count = inputArray[i].length;
            console.log(count);
        }
    }
    for (let i in inputArray) {
        if (inputArray[i].length == count) {
            returnArray.push(inputArray[i]);
        }
    }
    return returnArray;
}

console.log(allLongestStrings(inputArray));