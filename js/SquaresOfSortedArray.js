/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(arr) {
    let tempArr = [];

    arr.forEach(item => tempArr.push(item ** 2));

    console.log(tempArr);

    tempArr.sort((a, b) => a - b);
    return tempArr;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));