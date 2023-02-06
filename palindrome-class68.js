//word -> palidrome
//str -> letters, all lower, spec, funny biz
//return true or false

function isPalidrome(w) {
  return w.split("").reverse().join("") === w;
}

console.log(isPalidrome('racecar'), 'true')
console.log(isPalidrome('leonnoel'), 'true')
console.log(isPalidrome('spongebob'), 'false')