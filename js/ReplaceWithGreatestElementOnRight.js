/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {

    const N = arr.length;
    let max = null;

    for (let i = 0; i < N; i++) {

        if (i == N - 1) {
            arr[i] = -1;
        }

        else {
            max = Math.max(...arr.slice(i + 1));
            arr[i] = max;
        }

    }

    return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));