// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function removeDupeWords(str) {
    //str -> split " " -> filter  
    return str.split(" ").filter((word, index, array) => word != array[index - 1]).join(" ")
  }
  
  console.log(removeDupeWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"), "alpha beta gamma delta alpha beta gamma delta")