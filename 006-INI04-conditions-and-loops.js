/* 006 - INI4 - Conditions and Loops

【Problem】

    Given: Two positive integers a and b (a<b<10000).

    Return: The sum of all odd integers from a through b, inclusively.

    Sample Dataset: 100 200

    Sample Output:7500
*/

const min = 100
const max = 200

function sumOdd(min, max){
    try{
        if(!(min < max)){
            throw new ReferenceError('The second argument must be less than the first')
        }else if(!(max < 10000)){
            throw new ReferenceError('The second argument must be less than the 10000')
        }else{
            var sum = 0
            while(!(min === max)){
                if(min % 2 !== 0){
                    sum += min
                }
                min += 1
            }
            return sum
        }
    }catch(error){
        console.log("Error!", error)
    }
    
}

console.log(sumOdd(4957, 8976))