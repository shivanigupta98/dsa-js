let s = ["h","e","l","l","o"];
//Output - ["o","l","l","e","h"]

// Brute Force SC- O(n)
/*
var reverseString = function(s) {
    let res = [];
    for(let i=s.length-1;i>=0;i--){
        res.push(s[i]);
    }
    return res;
};
*/
var reverseString = function(s){
let l =0;
let r=s.length-1;
while(l<=r){
    let temp = s[l];
    s[l]= s[r];
    s[r] = temp;
    l++;
    r--;
}
return s;
}
console.log(reverseString(s));
