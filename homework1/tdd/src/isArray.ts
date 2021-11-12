//_.isArray([1, 2, 3]);
// => true
 
//_.isArray(document.body.children);
// => false
 
export function isArray(list:any[]){
    return Array.isArray(list)
}
console.log("isArray([1,2,3] ",isArray([1,2,3]))
//console.log("isArray(abc)", isArray("abc"))