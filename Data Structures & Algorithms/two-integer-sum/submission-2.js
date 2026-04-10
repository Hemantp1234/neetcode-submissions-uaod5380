class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        
       let A = [];
       let n = nums.length;

       for(let i=0; i<n;i++) {
        A.push([nums[i],i]);
       }

       A.sort((a,b) => a[0] - b[0]);

       let i =0, j = n-1;

       while(i<j) {
        let curr = A[i][0] + A[j][0];
        if(curr == target) {
            return [Math.min(A[i][1], A[j][1]), Math.max(A[i][1], A[j][1])];
        }

        else if( curr < target){
             i++;
        }
        else{
            j--;
        }
       }
    }
}
