const testArray = ["AAA", "BBBBBB", "ABABABAB", "BABABA", "AAAABBBB"];

for (let i = 0; i < testArray.length; i++) {
  main(testArray[i].length, testArray[i]);
}

function main(length, arg) {
  let result = 0;

  if (length >= 1 && length <= 100000) {
    let arr = arg.split('');
    let past = arr[0];

    arr = arr.filter((value, inx) => {
      if (value !== past && inx !== 0) {
        past = value;
        return value;
      }
    });
    result = length - [arg.charAt(0), ...arr].length;
  }
  console.log(result)
  return result;
}
