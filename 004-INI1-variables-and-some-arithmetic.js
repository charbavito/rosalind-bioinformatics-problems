/* 004 - INI1 - Variables and Some Arithmetic

【Problem】

    Given: Two positive integers a and b, each less than 1000.

    Return: The integer corresponding to the square of the hypotenuse of the 
    right triangle whose legs have lengths a and b.
 */

const a = 843
const b = 973

function hypot(a, b){
    return ((a*a) + (b*b))
}

console.log(hypot(a, b))