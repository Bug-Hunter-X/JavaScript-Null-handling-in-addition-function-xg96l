function foo(a, b) {
  // Handle null or undefined values using the nullish coalescing operator
  a ??= 0; 
  b ??= 0;
  return a + b; 
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: 20
console.log(foo(10, null)); // Output: 10
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined,20)); // Output: 20
console.log(foo(10,undefined)); // Output: 10
console.log(foo(undefined, undefined)); // Output: 0