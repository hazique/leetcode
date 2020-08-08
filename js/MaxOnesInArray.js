/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxCountOfOnes = 0;

    let count = 0;

    nums.forEach(num => {
        
        if (num == 1)
            count++;

        if (count > maxCountOfOnes)
            maxCountOfOnes = count;
            
        else if ( num == 0 )
            count = 0;
    });

    return maxCountOfOnes;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));