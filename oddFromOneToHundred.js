// console.log odd numbers from one to a hundred

function odds() {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  // if you want to add nums of array
  // arr = arr.reduce(function(a, b) {
  //   return a + b;
  // }, 0);
  console.log(arr);
}

odds();
