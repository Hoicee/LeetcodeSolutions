/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} dist
 * @return {number}
 */
var minimumCost = function(nums, k, dist) {
    const using = new MaxPriorityQueue((o) => o[0]);
    const usingSet = new Set();
    const available = new MinPriorityQueue((o) => o[0]); 

    let res = Infinity;

    let curr = 0;

    k--;

    for(let r = 1; r < nums.length; r++) {
        available.enqueue([nums[r], r]);
        if(r - dist > 1) {
            const deleteIdx = r - dist - 1;
            if(usingSet.has(deleteIdx)) {
                curr -= nums[deleteIdx];
                usingSet.delete(deleteIdx);
            }
        }

        while(r - k >= 0 && usingSet.size < k) {
            const [availNum, availIdx] = available.dequeue();
            if(availIdx < r - dist) continue;
            using.enqueue([availNum, availIdx]);
            usingSet.add(availIdx);
            curr += availNum;
        }

        while(available.size() > 0 && using.size() > 0 && available.front()[0] < using.front()[0]) {
            if(using.front()[1] < r - dist) {
                using.dequeue();
                continue;
            };
            if(available.front()[1] < r - dist) {
                available.dequeue();
                continue;
            }

            const [oldNum, oldIdx] = using.dequeue();
            const [newNum, newIdx] = available.dequeue();

            available.enqueue([oldNum, oldIdx]);
            using.enqueue([newNum, newIdx]);
            curr -= oldNum;
            curr += newNum;
            usingSet.delete(oldIdx);
            usingSet.add(newIdx);
        }

        if(usingSet.size == k) {
            res = Math.min(res, curr);
        }
    }

    return nums[0] + res;
};