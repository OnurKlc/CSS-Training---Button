const arr = [1, 2, 1, 2, 1, 3, 2];

const counts = {};
const main = function (l, arr) {
  if (l > 100 || l < 1) {
    console.log("Geçerli aralıkta bir array büyüklüğü giriniz.")
  } else {
    for (let i = 0; i < l; i++) {
      if (arr[i] > 100 || arr[i] < 1) {
        console.log("Array elemanları 0 ile 100 arasında olmalıdır.")
      } else {
        let num = arr[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }
    }
    const occurences = Object.values(counts);
    let newocc = occurences.map((val) => Math.floor(val / 2))
    const result = newocc.reduce((a, b) => a +b, 0)
    console.log(result);
  }
};

const l = arr.length;

main(l, arr);
