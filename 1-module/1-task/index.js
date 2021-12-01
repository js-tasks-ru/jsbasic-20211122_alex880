function factorial(n) {
  let result = 1;

  for (let index = 0; index < n; index++) {
    result *= (n - index);
  }
  
  return result;
}
