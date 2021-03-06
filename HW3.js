// task 1
function splitAndMerge(sentence, sep) {
  var arr_words = sentence.split(' ');
  var arr_reswords = [];
  for (var i = 0; i < arr_words.length; i++) {
    arr_reswords[i] = arr_words[i].split('').join(sep);
  }
  return (arr_reswords.join(' '));
}
//console.log(splitAndMerge("My name is John",":"));

//-----------------------

// task 2
function convert(hash) {
  var arr = [];
  for (var k in hash) {
    arr.push([k, hash[k]]);
  }
  return arr;
}

//var hash_table = {name: 'Jeremy', age: 24, role: 'Software Engineer'};
//console.log(convert(hash_table));

//-----------------------

// task 3
function toCamelCase(delim_words) {
  var arr_words = delim_words.split(/\-|\_/);
  var first_word = arr_words[0];
  arr_words.shift(0);
  for (var i = 0; i < arr_words.length; i++) {
    arr_words[i] = arr_words[i][0].toUpperCase() + arr_words[i].substring(1);
  }
  arr_words.unshift(first_word);
  return arr_words.join('');
}

//console.log(toCamelCase("the-stealth_warrior"));

//-----------------------

// task 4
function toReverse(sentence) {
  var arr_words = sentence.split(' ');
  var res = [];
  for (var i = 0; i < arr_words.length; i++) {
    res[i] = arr_words[i].split('').reverse().join('');
  }
  return res.join(' ');
}

//console.log(toReverse(" A fun little challenge! "));

//-----------------------

// task 5
function stringExpansion(string) {
  var arr_char = 0;
  var res = '';
  var temp = 1;
  for (i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i], 10)) && !isNaN(parseInt(string[i + 1], 10)) ) {
      continue;
    } else if (!isNaN(parseInt(string[i], 10))) {
      temp = parseInt(string[i], 10);
      continue;
    }
    for (j = 1; j <= temp; j++) {
      res += string[i];
    }
  }
  return res;
}

//console.log(stringExpansion('3Fd2a5d2f')); //FFFdddaadddddff
//console.log(stringExpansion('3d342f2a')); //dddffaa
//console.log(stringExpansion('dchjj')); //dchjj

//-----------------------

// task 6
function largest() {
  return Math.max.apply(null, arguments);
}

function smallest() {
  return Math.min.apply(null, arguments);
}

//console.log(largest(2, 0.1, -5, 100, 3));
//console.log(smallest(2, 0.1, -5, 100, 3));

//-----------------------

//task7
function transform(arr) {
  return arr.map(function(item) {
    return function() {
      return item;
    }
  });
}

//const baseArray = [10, 20, 30, 40, 50];
//const newArray = transform(baseArray);
//console.log(newArray[3]()); // should return 40
//console.log(newArray[4]()); // should return 50

//-----------------------

//task8
function sum(...args) {
  var arr_char = args;

  function summ(arr_char) {
    if (arr_char.length === 0) {
            return 0;
          } else {
            return arr_char[0] + summ(arr_char.slice(1));
        }
  }
  return summ(arr_char);
}

//console.log(sum(1,3,5,7)); //should return 16

//-----------------------

//task9
function countDown(num) {
  if (num < 0) {
    return 0;
  } else {
  console.log(num);
  return setTimeout(countDown, 1000, num - 1);
  }
}

//countDown(3); // 3 2 1 0

//-----------------------

//task10
Function.prototype.myBind = function(context) {
    var this_function = this;
    return function() {
        var func_args = Array.prototype.slice.call(arguments);
        return this_function.apply(context, func_args);
    }
}

//function addPropToNumber(number) { return this.prop + number; }
//var bound = addPropToNumber.myBind({ prop: 9 });
//console.log(bound(1)); // 10
