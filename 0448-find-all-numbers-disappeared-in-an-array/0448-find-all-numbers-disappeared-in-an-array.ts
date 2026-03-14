function findDisappearedNumbers(nums: number[]): number[] {

  let arr = Array(nums.length).fill(1);
  for(let i = 0; i < arr.length; i++) {
    let index = nums[i] - 1;
    arr[index] = 0;
  };
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == 1) result.push(i+1);
  }

  return result;
};