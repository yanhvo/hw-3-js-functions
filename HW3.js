// task 1
function splitAndMerge(sentence, sep){
  var arr_words = sentence.split(' ');
  var arr_reswords = arr_words.map(one_word => one_word.split('').join(sep));
  return(arr_reswords.join(' '));
}
//console.log(splitAndMerge("My name is John",":"));

//-----------------------

// task 2
function convert(hash){
  var arr = [];
  for(var k in hash){
    arr.push([k, hash[k]]);
  }
  return arr;
}

//var hash_table = {name: 'Jeremy', age: 24, role: 'Software Engineer'};
//console.log(convert(hash_table));

//-----------------------

// task 3
function toCamelCase(delim_words){
  var arr_words = delim_words.split(/\-|\_/);
  var first_word = arr_words[0];
  arr_words.shift(0);
  arr_words = arr_words.map(one_word => one_word[0].toUpperCase() + one_word.substring(1));
  arr_words.unshift(first_word);
  return arr_words.join('');
}

//console.log(toCamelCase("the-stealth_warrior"));

//-----------------------

// task 4
function toReverse(sentence){
  var arr_words = sentence.split(' ');
  var res = arr_words.map(one_word => one_word.split('').reverse().join(''));
  return res.join(' ');
}

//console.log(toReverse(" A fun little challenge! "));

//-----------------------

// task 5
function stringExpansion(string){
  var arr_char=0;
  var res = '';
  var temp = 1;
  for(i=0; i<string.length; i++){
    if(!isNaN(parseInt(string[i], 10)) && i+1<=string.length && isNaN(parseInt(string[i+1], 10))){
      temp = parseInt(string[i], 10);
      continue;
    }
    for(j=1; j<=temp; j++){
      res= res + string[i];
    }
  }
  return res;
}

//console.log(stringExpansion('dchjj'));

//-----------------------

// task 6
function largest(){
  return Math.max.apply(null, arguments);
}

function smallest(){
  return Math.min.apply(null, arguments);
}

//console.log(largest(2, 0.1, -5, 100, 3));
//console.log(smallest(2, 0.1, -5, 100, 3));
