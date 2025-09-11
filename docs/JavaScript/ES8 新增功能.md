## （一）Async Function: async、await

使用同步写法，执行异步函数。在 ES8 之前，需要使用 `Promise` 的 `.then` 进行回调，ES8 可以直接使用同步写法。

```js
async function foo() {
  return new Promise((resolve, reject) => {
    resolve();
  });
}
const result = await foo();
```

## （二）Object values

之前我们可以通过 `Object.keys` (ES5)获取一个对象所有的 `key`，在 ES8 中提供了 `Object.values` 来获取所有的 `value` 值。

```js
const obj = {
  name: "why",
  age: 18
}
// 打印 ['name', 'age']
console.log(Object.keys(obj))
// 打印 ["why", 18]
console.log(Object.values(obj))
// 打印 ["abc", "cba", "nba"]
console.log(Object.values(["abc", "cba", "nba"])
// 打印 ['a', 'b', 'c']
console.log(Object.values("abc"))
```

## （三）Object entries

通过 `Object.entries` 把对象或数组转换为二维数组。

```js
// 打印：[['a', 'A'], ['b', 'B']]
console.log(Object.entries({ a: "A", b: "B" }));
// 打印：[['0', 'A'], ['1', 'B']]
console.log(Object.entries(["A", "B"]));
```

## （四）String Padding 字符串填充

某些字符串我们需要对其进行前后的填充，来实现某种格式化效果，ES8 中增加了 `padStart` 和 `padEnd` 方法，分别是对字符串的首尾进行填充。

```js
const message = "Hello World"
const newMessage = message.padStart(15, "'*"') .padEnd(20, "-")
// 打印 '****Hello World-----'
console.log(newMessage)
// 案例
const cardNumber = "6222020000000001234"
// 截取最后4个字符
cost lastFourCard = cardNumber.slice(-4)
const finalCard = lastFourCard.padStart(cardNumber.length, "*")
// 打印 '***************1234'
console.log(finalCard)
```

## （五）Trailng Commas

对象、数组、函数参数的结尾可加 `,`。

```js
function foo(m, n) {
  // ...
}
foo(20, 30);
const obj = {
  a: "A",
};
```

## （六）Object.getOwnPropertyDescriptors

获取对象所有属性描述对象，可用于对象的深度拷贝。

```js
const obj = {
  prop1: 100,
  prop2: "字符串属性",
  get bar() {
    return "bar返回字符串";
  },
};
Object.getOwnPropertyDescriptors(obj);
/**
 * 打印出如下内容：
  {
   bar: {
     configurable: true,
     enumerable: true,
     get: f bar()
     set: undefined
   },
   prop1: {
     configurable: true,
     enumerable: true,
     value: 100,
     writable: true,
   },
   ...
  }
 */
```
