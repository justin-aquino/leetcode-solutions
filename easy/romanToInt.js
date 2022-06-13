const romanToInt = (s) => {
  let result = 0;
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    let current = map[s[i]];
    let next = map[s[i + 1]];

    if (current < next) {
      result += next - current;
    } else {
      result += current;
    }
  }
  return result;
};

console.log(romanToInt("III"));
