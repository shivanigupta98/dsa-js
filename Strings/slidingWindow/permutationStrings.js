//const s1 = "ab", s2 = "eidbaooo";
// Brute Force - TC= O(s1.length * s2.length)
/*
var checkInclusion = function (s1, s2) {
    let freq = {};
    for (let char of s1) {
        freq[char] = (freq[char] || 0) + 1;
    }
    for (let i = 0; i <= s2.length - s1.length; i++) {
        let tempFreq = { ...freq };
        let matched = true;
        for (let j = i; j < i + s1.length; j++) {
            let char = s2[j];
            if (!tempFreq[char]) {
                matched = false;
                break;
            }
            tempFreq[char]--;
        }
        if (matched)
            return true;
    }
    return false;
};
*/

// optimized O(n), where n = s2.length
//2n → O(n)
const s1 = "ab", s2 = "eidboaoo";
var checkInclusion = function (s1, s2) {
    let freq = {};
    for (let char of s1) {
        freq[char] = (freq[char] || 0) + 1;
    }
    let l = 0;
    let count = s1.length;
    for (let r = 0; r < s2.length; r++) {
        let char = s2[r];
        if (freq[char]>0) count--;
        freq[char]--;
        if(count===0){
            return true;
        }
        if((r-l+1)===s1.length){
        freq[s2[l]]++;
        if(freq[s2[l]]>0) count++;
        l++;
        }
        
}
return false;
}

console.log(checkInclusion(s1,s2));