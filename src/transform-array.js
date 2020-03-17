module.exports = function transform(arr) { 
    if(!Array.isArray(arr))
        throw Error;
    if(arr.length === 0)
        return arr;
    let res = [];
    let len = arr.length;
    for(let i=0; i<len; i++){
        if(arr[i] === "--discard-next") {
            i++;
            continue;
        }
        if(arr[i] === "--discard-prev"){
            if(i>0)
                res.pop();
            continue;
        }
        if(arr[i] === "--double-next") {
            if(i < len-1)
                res.push(arr[i+1]);
            continue;
        }
        if(arr[i] === "--double-prev") {
            if(i !== 0)
                res.push(arr[i-1]);
            continue;
        }
        else res.push(arr[i]);
    }
    return res;
};
