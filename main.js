// Strings & Arrays only

//---------November 8
// KATA 1 8kyu
const removeChar = str => str.substring(1, str.length - 1);
console.log(removeChar('eloquent'));
console.log(removeChar('ooopsss'));
console.log(removeChar('country'));

// KATA 2 7kyu
const maskify = numstr => numstr.slice(0, -4).replace(/./g, '#') + numstr.slice(-4);
console.log(maskify('4556364607935616'));
console.log(maskify('64607935616'));
console.log(maskify('1'));
console.log(maskify(''));

// KATA 3 6kyu
const isPanagram = str => str.match((/([a-z])(?!.*\1)/gi) || []).length === 26;
console.log(isPanagram("The quick brown fox jumps over the lazy dog"));
console.log(isPanagram("The brown fox jumps over the lazy dog"));

//---------November 9
// KATA 1 8kyu
const neutralisation = (str1, str2) => str1.split('').map((char, index) => (char !== str2[index] ? '0' : char)).join('');
console.log(neutralisation("+-+", "+--"));

// KATA 2 7kyu
const SubstringTest = (str1, str2) => {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  let res = ''
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2.substring(i, 2)) > -1) 
    return true
  }
  return false
} 
console.log(SubstringTest('Something', 'Fun'));
console.log(SubstringTest('Something', 'Home'));

// KATA 3 7kyu
const nicknameGenerator = str => {
  if (str.length > 3) {
    return (str[2].match(/[aeiou]/gi)) ? str.slice(0, 4) : str.slice(0,3)
  }
  return `Error: Name too short`
};
console.log(nicknameGenerator("Robert"));
console.log(nicknameGenerator("Jennifer"));
console.log(nicknameGenerator("Kimberly"));
console.log(nicknameGenerator("Annette"));
console.log(nicknameGenerator("Kay"));

// //---------November 10
// KATA 1 6kyu
const duplicateEncode = word => {
  return word
    .toLowerCase()
    .split('')
    .map((char, i, w) => w.indexOf(char) == w.lastIndexOf(char) ? '(' : ')' )
    .join('')  
} 
console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success')); 
console.log(duplicateEncode('(( @'));

// KATA 2 6kyu
const duplicateCount = str => {
  let arr = str.toLowerCase().split('')
  return arr.filter((val, i, arr) => arr.indexOf(val) !== i && arr.lastIndexOf(val) === i).length    
};
console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Robert"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));

// KATA 3 8kyu
const numberToString = num => num.toString();
console.log(numberToString(123));

// //---------November 13
// www.codewars.com
// KATA 1 7kyu
String.prototype.toJadenCase = function() {
  return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));

// KATA 2 8kyu
// const noSpace = str => str.split(' ').join('')
// or
const noSpace = s => s.replace(/\s/g, '')
    
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB'));
console.log(noSpace2('8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB'));

// KATA 3 6kyu
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) return [i, j];
      }
    }
};

console.log(twoSum([1,2,3], 4));

// //---------November 
