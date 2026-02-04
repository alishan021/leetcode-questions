function nextGreaterElement(nums1: number[], nums2: number[]): number[] {

    let ans: number[] = [];

    for(let i = 0; i < nums1.length; i++) {
        let j = nums2.indexOf(nums1[i]) + 1;
        let val = -1;
        for( j; j < nums2.length; j++) {
            if(nums2[j] > nums1[i]) {
                val = nums2[j];
                break;
            }
        }
        ans.push(val);
    }

    return ans;
};