/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    const len = arr.length;

    for (let curr = 0; curr < len; curr++){
        if (arr[curr] == 0) {
            
            for (let j = len - 1; j > curr + 1; j--){
                arr[j] = arr[j - 1];
            }        

            arr[curr + 1] = 0;
            curr++;
        }
       ;
    }
  
    arr.length = len;
};


console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
