let s = "cabwefgewcwaefgcf", t = "cae";
// Brute Force
/*
var minWindow = function (s, t) {
    let res = "";
    let minLen = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let str = s.substring(i, j + 1);
            if (verifyString(str, t)) {
                if (minLen > (j - i + 1)) {
                    res = str;
                    minLen = (j - i + 1);
                }
                break;
            }
        }
    }
    return res;
}
    var verifyString = (str, t) => {
    let freq = {};
    for (let val of str) {
        freq[val] = (freq[val] || 0) + 1;
    }
    for (let val of t) {
        if (!freq[val]) return false;
        freq[val]--;
    }
    return true;
}
*/
// optimized TC - O(m+n)
var minWindow = function (s, t) {
    if (t.length > s.length) return "";

    let freq = {};
    for (let char of t) {
        freq[char] = (freq[char] || 0) + 1;
    }
    let count = t.length;
    let l = 0;
    let result ="";
    let minLen = Number.MAX_SAFE_INTEGER;
    for (let r = 0; r < s.length; r++) {
        if(freq[s[r]]>0) count--;
        freq[s[r]]--;
        while(count===0){
            if((r-l+1)<minLen){
                minLen = r-l+1;
                result = s.substring(l, r+1);
            }
            freq[s[l]]++;
            if(freq[s[l]]>0) count++;
            l++;
        }
    }
    return result;
}


console.log(minWindow(s, t));