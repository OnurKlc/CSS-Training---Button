const arr = ["AAA", "BBBBBB", "ABABABAB", "BABABA", "AAAABBBB"];

for (let i = 0; i < arr.length; i++) {
  alternatingCharacters(arr[i]);
}

function alternatingCharacters(s) {
  let result = 0;

  if (s.length >= 1 && s.length <= 100000) {
    let arr = s.split('');
    let past = arr[0];

    arr = arr.filter((item, key) => {
      if (item !== past && key !== 0) {
        past = item;
        return item;
      }
    });
    result = s.length - [s.charAt(0), ...arr].length;
  }
  console.log(result)
  return result;
}
