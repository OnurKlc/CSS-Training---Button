const sampleArray = [1, 2, 1, 2, 1, 3, 2];
const l = sampleArray.length;

const counts = {};
const main = function (l, arr) {
  let result = 0;

  if (l < 101 && l > 0) {
    for (let i = 0; i < l; i++) {
      if (arr[i] < 101 && arr[i] > 0) {
        let num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }
      else {
        return result;
      }
    }
    const occurences = Object.values(counts);
    let newocc = occurences.map((val) => Math.floor(val / 2))
    result = newocc.reduce((a, b) => a +b, 0)
    console.log(result);
    return result;
  }

  return result;
};

main(l, sampleArray);
