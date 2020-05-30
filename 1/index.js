const arr = [1, 2, 3, 4];

(function() {
  let result = arr.reduce((a, b) => a + b, 0);
  console.log("The sum of numbers is", result);
})();
