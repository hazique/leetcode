var findNumbers = function(nums) {
    // [12,345,2,6,7896]
    let evenItems = 0;
    nums.forEach(num => {
        let numberOfDigits = 0;
        while (Math.floor(num / 10 ** numberOfDigits) > 0)
            numberOfDigits += 1;
        if (numberOfDigits % 2 == 0)
            evenItems += 1;
    });
    return evenItems;
};