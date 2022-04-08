const red = [100, 100, 50, 4];
const blue = [2, 2, 4, 50];

const tandem = (red, blue, fastest) => {
  if (fastest) {
    let all = [...red, ...blue];
    all = all.sort(function (a, b) {
      return a - b;
    });
    let length = red.length;
    let answer = all.slice(length).reduce((a, b) => a + b, 0);
    return answer;
  } else {
    red = red.sort(function (a, b) {
      return a - b;
    });
    blue = blue.sort(function (a, b) {
      return a - b;
    });
    let slowest = [];
    for (i = 0; i < red.length; i++) {
      speed = Math.max(red[i], blue[i]);
      slowest = [...slowest, speed];
      answer = slowest.reduce((a, b) => a + b, 0);
    }
    return answer;
  }
};

console.log(tandem(red, blue, true));
console.log(tandem(red, blue, false));
