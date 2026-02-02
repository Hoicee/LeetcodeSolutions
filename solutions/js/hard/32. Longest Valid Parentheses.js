/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const dp = new Array(s.length).fill(0);
    const stack = [];
    let res = 0;

    for(let i = 0; i < s.length; i++) {
        let curr = 0;
        if(s[i] == ")") {
            if(stack.length == 0) continue;
            curr = i - stack.pop() + 1;
            if(i - curr >= 0) curr += dp[i - curr];
            dp[i] = curr;
        } else stack.push(i);
        
        res = Math.max(res, curr);
    }

    return res;
};