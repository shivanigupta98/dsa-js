const  s = "egg", t = "add";

var isIsomorphic = function(s, t) {
    let mapS = {};
    let mapT = {};

    for (let i = 0; i < s.length; i++) {
            if (mapS[s[i]] !== mapT[t[i]]) {
            return false;
        }
        mapS[s[i]] = i;
        mapT[t[i]] = i;
    }
console.log(mapS);
console.log(mapT);
    return true;
};

console.log(isIsomorphic(s,t));