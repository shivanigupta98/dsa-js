let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
//output - 49
// Brute Force - O(n2)
/*
function maxArea(height) {
    let max = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let res = Math.min(height[i], height[j]) * (j - i);
            max = Math.max(res, max);
        }
    }
    return max;
}
*/
// Tc - O(n)
function maxArea(height){
let l =0;
let r = height.length-1;
let max =0;
while(l<r){
    let area = (r-l)*(Math.min(height[l],height[r]));
    max = Math.max(max, area);
    if(height[l]<height[r]){
        l++;
    }
    else{
        r--;
    }
}
return max;
}

console.log(maxArea(height));