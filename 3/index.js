const testArray = ["AAA", "BBBBBB", "ABABABAB", "BABABA", "AAAABBBB"];

function main(q, s) {
  let result = [];

  for (let i = 0; i < q; i++) {

    let arr = s[i].split('');
    let past = arr[0];

    arr = arr.filter((value, inx) => {
      if (value !== past && inx !== 0) {
        past = value;
        return value;
      }
    });
    result.push(s[i].length - [s[i].charAt(0), ...arr].length);
  }
  console.log(result);

  return result;
}

main(testArray.length, testArray);
