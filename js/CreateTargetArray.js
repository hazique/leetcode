// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let targetArray = [0];
    for (let ind = 0; ind < index.length; ind++){
        const location = index[ind];
        // targetArray[location] = nums[location];
        targetArray.splice(location, 0, nums[location]);
    }
    return targetArray;
};

console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]));