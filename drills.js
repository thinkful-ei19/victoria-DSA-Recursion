//Counting Sheep
function sheep(num) {
  if(num === 0) {
  return;
  }

  console.log(`${num} -Another sheep jump over the fence`);
  return sheep(num-1);
}

sheep(4)

//Arr Double

function double(arr) {
  if (arr.length === 0) {
    return [];
  }

  const doubleNum = arr[0] * 2;

  return [doubleNum, ...double(arr.slice(1))];
}

double([1, 2, 3]);

//Reverse Str

//nth Triangular Number

function triangular(num) {
  if (num <= 1) {
    return num
  }

  return num + triangular(num - 1);
}

triangular(6)

//Binary Representation//

function splitString(str, separator) {
  const indx = str.indexOf(separator);

  if (indx === -1) {
    return str;
  }

  const newStr = str.slice(0, indx);

  return newStr + splitString(str.slice(indx+1), separator);
}

//Binary
function binary(num) {

  if(num === 0){
  return "";
  }

  const remainder = num % 2;

  return remainder + binary((num-remainder)/2)
}

binary(25)

//Factorial

function factorial(num) {

  if(num === 0){
  return 1;
  }

  return num * factorial(num-1)
}

factorial(5)

//Fibonacci
function fibonacci(num) {
  if(num <= 2){
  return 1;
  }

  return fibonacci(num-1) + fibonacci(num-2)
}

fibonacci(4)

//Anagrams

function anagrams(prefix, str) {
  if(str.length <= 1) {
    console.log.log(`The anagram is ${prefix}}${str}`);
  } else {
    for (let i=0; i<str.length; i++) {
      let current = str.substring(1, i + 1);
      let previous = str.substring(0, i);
      let after = str.substring(i + 1);
      anagrams(prefix + current, previous + after);
    }
  }
}

function printAnagram(word) {
  anagrams(' ', word)
}

anagrams('e', 'east');
