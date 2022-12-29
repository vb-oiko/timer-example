const a = {
  a: 5,
  a: 6,
};

console.warn(a);

let state = {
  a: 5,
  b: ["test"],
};

let newSate = {
  a: 10,
};

console.warn({ ...state, ...newSate });

console.warn({
  a: 5,
  b: ["test"],
  a: 10,
});
