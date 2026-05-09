class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let map = new Map();

        for(let n of nums) {
            let count = map.get(n) || 0;
            map.set(n,count+1);
        }

        let sortedArray = Array.from(map.entries()).sort((a,b) => b[1]-a[1]);

        return sortedArray.slice(0, k).map(pair => pair[0]);
    }
}
