// www.codewars.com
// KATA 1 8kyu
const removeChar = str => str.substring(1, str.length - 1);

console.log(removeChar('eloquent'));
console.log(removeChar('ooopsss'));
console.log(removeChar('country'));

// KATA 2 7kyu
const maskify = numstr => numstr.slice(0, -4).replace(/./g, '#') + numstr.slice(-4)

console.log(maskify('4556364607935616'));
console.log(maskify('64607935616'));
console.log(maskify('1'));
console.log(maskify(''));



// KATA 3 6kyu
const isPanagram = str => str.match((/([a-z])(?!.*\1)/gi) || []).length === 26;

console.log(isPanagram("The quick brown fox jumps over the lazy dog"));
console.log(isPanagram("The brown fox jumps over the lazy dog"));




