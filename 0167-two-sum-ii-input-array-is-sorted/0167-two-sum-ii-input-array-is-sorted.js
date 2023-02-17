/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
 let start = 0 , end = numbers.length-1
 while(start < end){
     let check  =numbers[start] + numbers[end]
     if(check == target){
         return [start+1 , end+1]
     }
     else if(check < target)
        start++
     else
         end--
 }
    return []
};