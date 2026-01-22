let obj = [{id : 1 } , {id : 2} , {id : 3}, {id :1}]; 
// output - [{id : 1 } , {id : 2} , {id : 3}]

// Brute force
/*
function removeDuplicates(obj){
    let res = [];
    for(let i=0;i<obj.length;i++){
        let isDuplicate = false;
        for(let j=0;j<res.length;j++){
            if(obj[i].id===res[j].id){
                isDuplicate=true;
                break;
            }
        }
        if(!isDuplicate){
            res.push(obj[i]);
        }
    }
    return res;
}
*/
// Optimized Using Set
function removeDuplicates(obj){
let set = new Set();
let res = [];
for(let val of obj){
    if(!set.has(val.id)){
        set.add(val.id);
        res.push(val);
    }
}
return res;

}
console.log(removeDuplicates(obj));

// using map 
const res = [...new Map(obj.map(item=>[item.id, item])).values()];
console.log(res);

// using reduce
const result = obj.reduce((acc, curr)=>{
    if(!acc.some(item=>curr.id===item.id)){
        acc.push(curr);
    }
    return acc;
},[])
console.log(result);