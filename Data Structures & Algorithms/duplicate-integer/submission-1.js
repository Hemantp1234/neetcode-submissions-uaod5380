class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort();
        let n = nums.length;
        let i=0,j=1;
        while(i<n-1 && j<n){
            if(nums[i] != nums[j]) {
                i++;
                j++;
            }
            else {
                return true;
            }
        }
        return false;
    }
}
