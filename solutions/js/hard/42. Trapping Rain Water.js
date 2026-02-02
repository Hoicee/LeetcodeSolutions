/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let [l, r] = [0, height.length - 1]
    let [maxL, maxR] = [height[l], height[r]];
    let res = 0;
    
    while(l < r) {
        if(maxL < maxR) {
            l += 1;
            maxL = Math.max(maxL, height[l]);
            res += maxL - height[l];
        } else {
            r -= 1;
            maxR = Math.max(maxR, height[r]);
            res += maxR - height[r];
        }
    }

    return res;
};