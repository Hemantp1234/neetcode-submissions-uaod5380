class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a, b) => a - b);
        let left = 0, right = 1;
        let n = nums.length;

        while(left < n-1 && right < n) {
            if(nums[left] == nums[right]){
                return true;
            }
            left++;
            right++;
        }
        return false;
    }
}
