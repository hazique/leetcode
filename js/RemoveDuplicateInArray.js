/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    for (let index = 0; index < nums.length; index++){
        if (nums[index + 1] == nums[index]) {
            nums.splice(index + 1, 1);
            index--;
        }
    }

    return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));