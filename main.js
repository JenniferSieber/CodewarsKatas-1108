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


