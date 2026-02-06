/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
    nums.sort((a, b) => a - b);
    let r = nums.length - 1;
    
    while(nums[0] * k < nums[r]) {
        r--;
    }

    let res = Infinity;

    for(let l = 0; l < nums.length; l++) {
        while(r + 1 < nums.length && nums[l] * k >= nums[r + 1]) {
            r++;
        }
        res = Math.min(res, l + (nums.length - 1 - r));
    }

    return res;
};
