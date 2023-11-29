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
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let res = '';
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2.substring(i, 2)) > -1); 
    return true;
  }
  return false;
} 
console.log(SubstringTest('Something', 'Fun'));
console.log(SubstringTest('Something', 'Home'));

// KATA 3 7kyu
const nicknameGenerator = str => {
  if (str.length > 3) {
    return (str[2].match(/[aeiou]/gi)) ? str.slice(0, 4) : str.slice(0,3);
  }
  return `Error: Name too short;`
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
    .join('');  
} 
console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success')); 
console.log(duplicateEncode('(( @'));

// KATA 2 6kyu
const duplicateCount = str => {
  let arr = str.toLowerCase().split('');
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
const noSpace = s => s.replace(/\s/g, '');
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

// //---------November 14
// KATA 1 6kyu
const solve = s => {
  const alphabet = ' abcdefghijklmnopqrstuvwxyz';
  const arr = s.split(/[aeiou]/g);
  let res = arr.map(el => el.split('').reduce((ttl,cv) => ttl + alphabet.indexOf(cv),0))
  return Math.max(...res);
}
console.log(solve('zodiacs')); //26
console.log(solve('khrushchev')); // 38
console.log(solve('twelfthstree')); // 103

// KATA 2 7kyu
const sortIt = (list, n) => {
  return list
    .split(', ')
    .sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        let charA = a[n-1];
        let charB = b[n-1];
        if (charA > charB) { return 1}
        else if (charA < charB) { return - 1}
        else if (charA === charB) { return a > b ? 1 : -1;}     
      }).join(', ');
}   
console.log(sortIt('bid, zag', 2));

// KATA 3 7kyu
const arrayMash = (a1, a2) => {
  let mash = [];
  a1.forEach((el, i) => {
    mash.push(el, a2[i]);
  })
  return mash;
};
console.log(arrayMash([1,2,3], ['a', 'b', 'c']));

// //---------November 15
// www.codewars.com
// KATA 1 7kyu
const solution = (s, ending) => s.endsWith(ending);
console.log(solution('abcde', 'cde')); 
console.log(solution('abcde', 'abc')); 
console.log(solution('abc', 'bc')); 
console.log(solution('abc', 'd')); 

// KATA 2 7kyu
const booleanToString = (boo) => boo.toString(); 
console.log(booleanToString(true));
console.log(booleanToString(false));

// KATA 3 8kyu
const areYouPlayingBanjo = (name) => (name[0].match(/[r]/gi)) ?`${name} plays banjo` : `${name} does not play banjo`;
console.log(areYouPlayingBanjo('Robert'));
console.log(areYouPlayingBanjo('rob'));
console.log(areYouPlayingBanjo('Bob'));

 //---------November 16
// KATA 1 6kyu
function stringParse(string){
  if(string + "" !== string) return "Please enter a valid string";
  return string.replace(/(.)\1(\1+)/g, "$1$1[$2]");
}
console.log(stringParse('aaaabbcdefffffffg')); 

// KATA 2 6kyu
const alphabetized = s => {
  let str = s.replace(/[^a-zA-Z]/g, '')
  return str
    .replace(/[^a-zA-Z]/g, '')
    .split('')
    .sort((a, b) => (a.toUpperCase() === b.toUpperCase()) ? (str.indexOf(a) - str.indexOf(b)) : a.localeCompare(b))
    .join('');
}
console.log(alphabetized("The Holy Bible"));

// KATA 3 7kyu
const alphaSeq = (str) => {
  let arr = str.toLowerCase().split('').sort();
  let result = arr.map((char) => {
    let val = char.charCodeAt(0) - 96;
    return char.toUpperCase() + char.repeat(val - 1);
  })
  return result.join(',');
};
console.log(alphaSeq('ZpglnRxqenU'));

//---------November 17
// KATA 1 6kyu
function inArray(a1, a2){
  const allSubstringsPresent = a1.every(substring => a2.some(str => str.includes(substring)));
  return allSubstringsPresent ? a1.slice().sort() : [];
}
console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"], ["lively", "alive", "harp", "sharp", "armstrong"] )); //["arp", "live", "strong"]
console.log(inArray(["tarp", "mice", "bull"],["lively", "alive", "harp", "sharp", "armstrong"] )); // [] 

// KATA 2 8kyu
const twoSort = arr => {
  let sortedArr = arr.sort();
  return sortedArr[0].split('').join('***');
}
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]));
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones", "Are"]));

// KATA 3 8kyu
const well = arr => {
  let count = 0;
  arr.forEach(idea => idea === 'good' ? count++ : count);
  return count > 2 ? 'I smell a series!' : count === 0 ? 'Fail!' : 'Publish!';
};
console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));

//---------November 20
// www.codewars.com
// KATA 1 7kyu
const sortGrades = arr => {
  const grades = ['VB','V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5','V6','V7','V8','V9','V10','V11','V12','V13','V14','V15','V16','V17'];
  return arr.sort((a,b) => grades.indexOf(a) - grades.indexOf(b))
  };
console.log(sortGrades(["V0+", "V0", "V16", "V2", "VB", "V6"]));// ["VB", "V0", "V0+", "V2", "V6", "V16"]

// KATA 2 7kyu
const  scramble = (str, arr) => {
  let array = []
  arr.forEach((charIndex, i) => array[charIndex] = str[i])
  return array.join('')
}
console.log(scramble('abcd', [0,3,1,2])); // acdb
console.log(scramble('sc301s', [4,0,3,1,5,2]));// c0s3s1
console.log(scramble('bskl5', [2,1,4,3,0])); // 5sblk

// KATA 3 7kyu
const checkRoot = str => {
  let arr = str.split(',').map(Number);
  if (arr.length != 4 || arr.some(isNaN) || arr.some(el => el == 0)) return 'incorrect input';
  if (arr.some((num, i) => i > 0 && num - arr[i-1] != 1)) return 'not consecutive';
  const squared = arr.reduce((ttl, cv) => ttl * cv, 1) + 1;
  return `${squared}, ${Math.sqrt(squared)}`;
}
console.log(checkRoot('0,1,2,3')); // incorrect input
console.log(checkRoot('1,2,3,4')); //'25, 5'
console.log(checkRoot('4,5,6,7')); //'841, 29'
console.log(checkRoot('4,5,6,7,z')); // incorrect input
console.log(checkRoot('4,1,2,3')); // not consecutive
//---------November 21
// KATA 1 7kyu
function sabb(s, val, happiness){
  let score = 0;
  for (let i = 0; i < s.length; i++) {
    if ('sabbatical'.includes(s[i].toLowerCase())) {
      score++;
    }
  }
  return score + val + happiness > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.';
}
console.log(sabb('Can I have a sabbatical?', 5, 5));
console.log(sabb('Why are you shouting?', 7, 2)); //'Back to your desk, boy.'
console.log(sabb('What do you mean I cant learn to code??', 8, 9)); 
console.log(sabb('Please calm down', 9, 1));// 'Back to your desk, boy.'

// KATA 2 7kyu
const fireFight = str => {
  return str.split(' ').map((el => {
    return el.toLowerCase().match('fire') ? el = '~~' : el;
  })).join(' ');
}
console.log( fireFight('Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast')); 
console.log( fireFight('Mast Deck Engine Water Fire')); 

// KATA 3 7kyu
const moveTen= s => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const move10 = 'klmnopqrstuvwxyzabcdefghij';
  return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]); 
}
console.log(moveTen("testcase")); // "docdmkco"

//---------November 22
// www.codewars.com
// KATA 1 7kyu
function doubles(s) {
 let pattern = /(.)\1/g;
 let result = s;
 while (pattern.test(result)) {
  result = result.replace(pattern, '');
 }
 return result;
}
console.log(doubles('abbbzz'));
console.log(doubles('zzayyybxxxxxcddd'));

// KATA 2 7kyu
const countDevelopers = list => list.filter(dev => dev.continent == 'Europe' && dev.language == 'JavaScript').length;
console.log(countDevelopers([
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
])); 
console.log(countDevelopers([
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
  { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
]));
console.log(countDevelopers([{"firstName":"Mariami","lastName":"G.","country":"Georgia","continent":"Europe","age":29,"language":"Python"},{"firstName":"Fatima","lastName":"A.","country":"Algeria","continent":"Africa","age":25,"language":"JavaScript"},{"firstName":"Amar","lastName":"V.","country":"Bosnia and Herzegovina","continent":"Europe","age":32,"language":"Ruby"},{"firstName":"Oliver","lastName":"P.","country":"Wales","continent":"Europe","age":29,"language":"JavaScript"},{"firstName":"Ellen","lastName":"E.","country":"Finland","continent":"Europe","age":55,"language":"Ruby"},{"firstName":"Marija","lastName":"U.","country":"Republic of Macedonia","continent":"Europe","age":42,"language":"JavaScript"},{"firstName":"Emma","lastName":"B.","country":"Norway","continent":"Europe","age":19,"language":"Clojure"}]))

// KATA 3 7kyu
const hasUniqueChars = s => new Set(s).size === s.length;
console.log(hasUniqueChars("  nAa")); //false
console.log(hasUniqueChars("++-")); //false
console.log(hasUniqueChars("abcdef")); // true
console.log(hasUniqueChars("aA")); // true

//---------November 23
// www.codewars.com
// KATA 1 7kyu
const sortMyString = s  => {
  let even = '';
  let odd = '';
 for (let i = 0; i < s.length; i++) {
  if (i % 2 === 0) {
    even += s[i];
  } else {
    odd += s[i];
  }}
 return `${even} ${odd}`;
}
console.log(sortMyString('CodeWars'));

// KATA 2 7kyu
const explode1 = s => {
  let result = s.split('').map(char => {
    let value = Number(char);
    return char.repeat(value); 
  })
  return result.join('');
}
// Or 
const explode = s => s.split("").map((char) => char.repeat(+char)).join("");
console.log(explode1("312")); 
console.log(explode("312")); 

// KATA 3 7kyu
const vowel2index = s => s.split('').map((char, i) => {
    return (char.match(/[aeiou]/gi)) ? i + 1 : char;
  }).join('');
console.log(vowel2index('this is my string') )

//---------November 24
// KATA 1 7kyu
const findScreenHeight = (width, ratio)  => {
  const ratios = ratio.split(':');
  const height =(width / Number(ratios[0])) * Number(ratios[1]);
  return `${width}x${height}`;
}
console.log(findScreenHeight(1024,"4:3"));
console.log(findScreenHeight(1280,"16:9"));

// KATA 2 7kyu
const calculate = string  => {
  const arr = string.split(' ');
  let nums = [Number(arr[2]), Number(arr[6])];
  let operator = arr[5];
  return operator === 'gains' ? nums[0] + nums[1] : nums[0] - nums[1];
  }
console.log(calculate("Panda has 48 apples and loses 4")); 
console.log(calculate("Jerry has 34 apples and gains 6")); 

// KATA 3 7kyu
const checkVowel = (string, position)  => {
  return 'aeiouAEIOU'.includes(string[position]);
}
console.log(checkVowel('cat', 1) )
console.log(checkVowel('Amanda', 0) )
console.log(checkVowel('Amanda', -2))

//---------November 27
// KATA 1 7kyu
const areaCode = s => s.slice(s.indexOf('(') + 1, s.indexOf(')'));
console.log(areaCode("The supplier's phone number is (555) 867-5309"));

// KATA 2 7kyu
const reverseSlice = s => {
  let revS = s.split('').reverse().join('');
  let arr = revS.split('').map((char, i) => {
    return revS.slice(i);
  });
  return arr
}
console.log(reverseSlice("123")); 
console.log(reverseSlice("abcde")); 

// KATA 3 7kyu
const initializeNames = name => {
 let arr = name.split(' ');
 if (arr.length <= 2) {
  return name;
 } 
 let test = [];
 for (let i = 0; i < arr.length; i++) {
  if (i == 0 || i == arr.length - 1) {
    test.push(arr[i]);
  } else {
    test.push(`${arr[i][0]}.`);
  }
 }
 return test.join(' ');
}
console.log(initializeNames('Alice Betty Catherine Davis'));
console.log(initializeNames('Lois Mary Lane'));
console.log(initializeNames('Lois'));
console.log(initializeNames('Lois Lane'));


//---------November 28
// KATA 1 7kyu
const orderWord = s => {
  if (s == '' || s == null) {
    return 'Invalid String!';
  }
  else {
    let newA = [];
    for (let i = 0; i < s.length; i++) {
    let uniVal = s.charCodeAt(i);
    newA.push(uniVal);
  }
  newA = newA.sort((a,b) => a - b);
  return newA.map(el => String.fromCharCode(el)).join('');
  }
};
console.log(orderWord("hello world"));

// KATA 2 7kyu
const sortWords = s => s ? [...s].sort().join('') : 'Invalid String!';
console.log(sortWords("!Hi You!"));

// KATA 3 7kyu
const sillycase = s => {
  let mid = Math.round(s.length / 2);
  return s.substr(0,mid).toLowerCase() + s.substr(mid).toUpperCase();
}
console.log(sillycase('foobar'));

//---------November 29
// www.codewars.com
// KATA 1 7kyu
const detectOperator = n => {
  const carriers = {
    '039': 'Golden Telecom',
    '050': 'MTS',
    '063': 'Life:)',
    '066': 'MTS',
    '067': 'Kyivstar',
    '068': 'Beeline',
    '093': 'Life:)',
    '095': 'MTS',
    '096': 'Kyivstar',
    '097': 'Kyivstar',
    '098': 'Kyivstar',
    '099': ' MTS ',
}
  let num = String(n).slice(1,4);
  let msg = 'no info';
  msg = carriers[num] || msg;
  return msg;
}
console.log(detectOperator(80931551119));
console.log(detectOperator(80971551119));
console.log(detectOperator(8011155117711));


// KATA 2 7kyu
const ghostBusters = building => {
  let str = building.replace(/\s/g, '');
  return (str === building) ? `You just wanted my autograph didn't you?` : str;
}
console.log(ghostBusters('Sky scra per'));
console.log(ghostBusters('O  f fi ce'));
console.log(ghostBusters('BusStation'));


// KATA 3 7kyu
const solve = s => {
  let consonants = /[bcdfghjklmnpqrstvwxyz]/gi;
  let vowelsArr = s.split(consonants);
  let counts = vowelsArr.map(v => v.length);
  return Math.max(...counts);
}
console.log(solve('foobar'));
console.log(solve('codewarriors'));
console.log(solve('suoidea'));
console.log(solve('sdpzfg'));


//---------November 30
