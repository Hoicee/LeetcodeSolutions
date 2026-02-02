/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const op = {
        "+": (a, b) => a + b,
        "-": (a, b) => b - a,
        "/": (a, b) => Math.trunc(b / a),
        "*": (a, b) => a * b, 
    }

    const stack = [];

    for(const t of tokens)
        if(t in op) stack.push(op[t](stack.pop(), stack.pop()));
        else stack.push(parseInt(t));

    return stack[0] || 0;
};