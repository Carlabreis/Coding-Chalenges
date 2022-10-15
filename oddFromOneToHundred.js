// console.log odd numbers from one to a hundred

function odds() {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  console.log(arr);
}

odds();
