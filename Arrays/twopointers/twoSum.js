let nums = [2,7,11,15], target = 9;
// output - [0,1]

// Brute Force - O(n2)
/*
function TwoSum(nums, target){
    for(let i=0;i<nums.length-1;i++){
        for(let j =i+1;j< nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i, j];
            }
        }
    }
    return -1;
}
*/
// TC - O(n), SC- O(n)
function TwoSum(nums, target){
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [i, map.get(target-nums[i])];
        }
        map.set(nums[i],i);
    }
    return -1;
}
console.log(TwoSum(nums, target))