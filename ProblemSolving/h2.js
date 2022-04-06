let a = [60, 40, 55, 75, 64];

function alternatingSums(a) {
    let aTeam  = 0;
    let bTeam = 0;
    let returnArray = [];
    for (let i in a) {
        if(i % 2 == 0) {
            aTeam += a[i];
        } else {
            bTeam += a[i];
        }
    }
    returnArray.push(aTeam, bTeam);
    return returnArray;
}

console.log(alternatingSums(a));