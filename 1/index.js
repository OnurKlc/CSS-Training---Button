const sampleArray = [1, 2, 3, 4];
main(sampleArray)

function main(arr) {
  let result = arr.reduce((a, b) => a + b, 0);
  console.log("The sum of numbers is", result);
  return result;
};
