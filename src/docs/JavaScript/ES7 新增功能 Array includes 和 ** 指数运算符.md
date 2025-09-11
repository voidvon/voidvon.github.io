## Array Includes 方法

在 ES7 之前，如果我们想判断一个数组中是否包含某个元素，需要通过 `indexOf` 获取结果，并且判断是否为 -1。
在 ES7 中，通过 `includes` 判断是否包含，包含返回 `true`，不包含返回 `false`。

```js
const names = ["abc", "cba", "nba", "mba", NaN];
if (names.indexOf("cba") !== -1) {
  console.log("包含abc元素");
}

// ES7 ES2016
if (names.includes("cba")) {
  console.log("包含abc元素");
}

if (names.indexOf(NaN) !== -1) {
  // indexOf 无法判断NaN
  console.log("包含NaN");
}

if (names.includes(NaN)) {
  console.log("包含NaN");
}
```

## \*\* 指数运算符

在 ES7 之前，计算数字的平方需要通过 `Math.pow` 方法来完成。
在 ES7 之后，增加了 `**` 运算符，可以对数字来计算平方。

```js
const result1 = Math.pow(3, 3);
// ES7
const result2 = 3 ** 3;
// 打印：27, 27
console.log(result1, result2);
```
