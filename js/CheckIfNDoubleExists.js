/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let flag = false;
    for (let index = 0; index < arr.length; index++) {
       
        if (arr[index] != 0) {
            if (arr[index] % 2 == 0) {// setup condition for negative even number
                flag = arr.includes(arr[index] * 2);
                if (!flag)
                    flag = arr.includes(arr[index] / 2);
            } 
            else 
                flag = arr.includes(arr[index] * 2);
        }

        else {
            flag = arr.includes(0, index + 1);
        }

        if (flag)
                break;
        else continue;
    }

    return flag;
};

/* alternative solution using Set

var checkIfExist = function(arr) {
    const history = new Set();
    let i = arr.length - 1
    while (i >= 0){
        if(history.has(arr[i] * 2) || history.has(arr[i] / 2))
            return true
        history.add(arr[i])
        i--;
    }
    return false;
}; */

// console.log(checkIfExist([-2,0,10,-19,4,6,-8]));
console.log(checkIfExist([0,0]));