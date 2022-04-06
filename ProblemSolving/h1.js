let inputArray = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];

/* Cách 1 */

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

/* Cách 2 (em nộp muộn thêm thôi ạ, không chấm điểm cũng được ạ) */

function allLongestStrings2(inputArray) {
    let returnArray = inputArray;
    for (let i in inputArray) {
        for (let j = returnArray.length - 1; j >= 0; j--) {
            if(returnArray[i].length < returnArray[j].length) {
                returnArray.splice(i,1);
            }
        }
    }
    return returnArray;
}

console.log(allLongestStrings2(inputArray));
