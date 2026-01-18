const s = " ";
//output = 3

// Brute force

var longestSubstring = (s)=>{
let maxLen =0;
for(let i =0;i<s.length;i++){
    let str ="";
    for(let j=i;j<s.length;j++){
        if(!str.includes(s[j])){
        str = s.substring(i,j+1);
        maxLen = Math.max(str.length, maxLen);
        }
    else{
        break;
    }
    }
}
return maxLen;
}

console.log(longestSubstring(s));


// optimized
/*
var longestSubstring = (s) => {
    let set = new Set();
    let l = 0;
    let maxLen=0;
    for (let r = 0; r < s.length; r++) {
        while(set.has(s[r]) && l<r){
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        maxLen = Math.max(maxLen, r-l+1);
    }
    return maxLen;
}

console.log(longestSubstring(s));
*/