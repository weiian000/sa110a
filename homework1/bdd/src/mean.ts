

export function mean(list:any[]){
    var len = list.length
    var total = 0
    for(let i=0;i<len;i++)
    {           
        total += list[i]
    }
    
    
    return total/len
}
console.log("mean([4,2,8,6]) = ",mean([4,2,8,6]))