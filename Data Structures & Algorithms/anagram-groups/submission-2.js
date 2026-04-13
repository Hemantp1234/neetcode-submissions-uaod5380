class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res={}

        for(let s of strs) {
           let sortedS = s.split('').sort().join('');

           res[sortedS] ??= [];
           res[sortedS].push(s);
        }

        return Object.values(res);
    }
}
