const arr = [1, 2, 3, 4, 3, 1, 2, 5, 6, 7, 5, 6, 8, 7];
const countElement = arr.reduce(function(count,arrItem){
    if(arrItem in count)
        count[arrItem]++;
    else{
        count[arrItem]=1;
    }
    return count;
}, {});
console.log(countElement);