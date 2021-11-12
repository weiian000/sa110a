 export function zip(a1,a2,a3){

    let  array1 = []
    for(let i=0;i<=1;i++)
    {
        array1.push(a1[i],a2[i],a3[i])
    }
    let b = array1.slice(3,7) 
    for(let j=0;j<3;j++)
    {
        array1.pop() 
    }
    let c = []
    c.push(array1,b)

    return c
}
