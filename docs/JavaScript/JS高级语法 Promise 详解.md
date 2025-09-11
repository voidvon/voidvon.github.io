## Promise 的基本使用

在 ES6 出来之后，有很多关于 Promise 的讲解、文章，也有很多经典的书籍讲解 Promise

- 虽然等你学会 Promise 之后，会觉得 Promise 不过如此，但是在初次接触的时候都会觉得这个东西不好理解；
  那么这里我从一个实际的例子来作为切入点：
- 我们调用一个函数，这个函数中发送网络请求（我们可以用定时器来模拟）；
- 如果发送网络请求成功了，那么告知调用者发送成功，并且将相关数据返回过去；
- 如果发送网络请求失败了，那么告知调用者发送失败，并且告知错误信息

在 ES6 之前，使用回调函数取得一个异步函数返回结果，有以下弊端：

1. 需要自己封装、设计回调函数名称；
2. 如果用第三方库，则必须要看文档才能了解如何取得结果；

例子：

```js
function request(url, callback, failCallback) {
  setTimeout(() => {
    // 请求接口模拟成功
    const result = "成功";
    if (result === "成功") {
      callback(result);
    } else {
      // 失败
      failCallback(result);
    }
  }, 3000);
}
// 传入两个回调函数
request(
  "/api",
  function (result) {},
  function (result) {}
);
```

更好的方案，`Promise`，相当于规范了回调方式。规范成功时回调第一个函数 `resolve`，失败时回调第二个函数 `reject`。

1. 不需要自己设计异步函数；
2. 减少沟通成本，不看文档就能知道如何使用。

```js
function request(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 请求接口模拟成功
      const res = "成功";
      if (res === "成功") {
        resolve(res);
      } else {
        // 失败
        reject(res);
      }
    }, 3000);
  });
}
// 写法1
request("/api");
then((res) => {
  console.log("成功回调");
}).catch((res) => {
  console.log("失败的回调");
});
// 写法2，then中写入两个参数
request("/api");
then(
  (res) => {
    console.log("成功回调");
  },
  (res) => {
    console.log("失败的回调");
  }
);
```

## Promise 的三种状态

1. 待定 `pending` 状态：初始状态，没有被兑现，也没有被拒绝（当执行 `executor` 中的代码时，处于该状态）；
2. 已成功（已兑现） `fulfilled` 或 `resolve` 状态：操作成功完成；
3. 已拒绝 `rejected` 状态：操作失败；

状态一旦确定下来，那么就不可更改。

```js
new Promise((resolve, reject) => {
  // pending 状态
  resolve();
}).then(
  (res) => {
    // fulfilled 状态
  },
  (err) => {
    // rejected 状态
  }
);
```

## Promise resolve 参数

```js
/**
 * resolve(参数)
 * 1: 可传入普通的值或者对象
 * 2: 或传入一个Promise
 *    当传入一个Promise，不会立即执行.then或.catch，
 *    而是看传入的Promise是执行resolve还是reject
 * 3: 可传入一个对象，且对象实现有then方法（实现thenable），对象内的then方法会被执行。promise的.then不再实行
 */
const newPromise = new Promise((resolve, reject) => {
  reject();
});
new Promise((resolve, reject) => {
  resolve(newPromise);
}).then(
  (res) => {
    console.log("成功");
  },
  (res) => {
    // 会走到这里
    console.log("失败");
  }
);
```

## Promise 对象方法 then 方法 接受两个参数

`then` 方法是 `Promise` 对象上的一个方法：它其实是放在 `Promise` 的原型上的 `Promise.prototype.then`。
接受两个参数：

1. `fulfilled` 的回调函数：当状态变成 `fulfilled` 时会回调的函数；
2. `reject` 的回调函数：当状态变成 `reject` 是会回调的函数。

### 返回值

then 方法本身是有返回值的，它的返回值是一个 `Promise` ，所以我们可以进行如下的链式调用：

- 但是 then 方法返回的 `Promise` 到底处于什么样的状态呢？
  `Promise` 有三种状态 ，那么这个 `Promise` 处于什么状态呢？
- 当 `then` 方法中的回调函数本身在执行的时候，那么它处于 `pending` 状态；
- 当 `then` 方法中的回调函数返回一个结果时，那么它处于 `fulfilled` 状态 ，并且会将结果作为 `resolve` 的参数：
  1. 返回一个普通的值；
  2. 返回一个 `Promise`；
  3. 返回一个 `thenable` 值；
- 当 `then` 方法抛出一个异常时，那么它处于 `reject` 状态；

```js
// 1. 同一个 Promise 可以被多次调用 .then
const promise = new Promise((resolve, reject) => {
  resolve("yes");
});
promise.then((res) => {
  // 会被执行
});
promise.then((res) => {
  // 会再次被执行
});
promise.then((res) => {
  // 会再再次被执行
});

// 2. then方法传入的回调函数：可以有返回值
//    then方法本身也有返回值，它的返回值是Promise
//    1. 如果我们返回一个普通值，这个普通值会被作为一个新的Promise的resolve值
promise
  .then((res) => {
    return "aaa";
  })
  .then((res) => {
    // 打印 'aaa'
    console.log(res);
  });

//    2. 如果我们返回一个Premise
promise
  .then((res) => {
    return new Promise((resolve, reject) => {
      resolve("no");
    });
  })
  .then((res) => {
    // 打印 'no'
    console.log(res);
  });
//    3. 如果我们返回一个实现了then函数的对象
promise
  .then((res) => {
    return {
      then() {
        return "good";
      },
    };
  })
  .then((res) => {
    // 打印 'good'
    console.log(res);
  });
```

## Promise 对象方法 catch 方法

`catch` 方法也是 `Promise` 对象上的一个方法：它也是放在 `Promise` 的原型上的 `Promise.prototype.catch`。
一个 `promise` 的 `catch` 方法是可以被名次调用的：

- 每次调用我们都可以传入对应的 `reject` 回调；
- 当 `Promise` 的状态变成 `reject` 的时候，这些回调函数都会被执行；

错误抛出方式 1：

```js
const promise = new Promise((resolve, reject) => {
  reject("rejected status");
});

promise.then(undefined, (err) => {
  // 打印 'rejected status'
  console.log(err);
});
```

错误抛出方式 2：

```js
const promise = new Promise((resolve, reject) => {
  throw new Error("rejected status");
});

promise.then(undefined, (err) => {
  // 打印 err 的整个堆栈
  console.log(err);
});
```

错误捕捉 `catch`

```js
const promise = new Promise((resolve, reject) => {
  throw new Error("rejected status");
});
// 写法1：then中写第二个回调
promise.then(undefined, (err) => {
  // 打印 err 的整个堆栈
  console.log(err);
});
// 写法2：优先捕捉先抛出错误的异常
promise
  .then((res) => {
    throw new Error("then error msg");
  })
  .catch((err) => {
    // 打印 err 的整个堆栈
    console.log(err);
  });
// 写法3：写法不算 promise a+ 规范，node环境不支持此写法
promise.catch((err) => {
  // 打印 err 的整个堆栈
  console.log(err);
});
```

## Promise 对象方法 finally 方法 ES9(ES2018)

```js
const promise = new Promise((resolve, reject) => {
  resolve("resolve msg");
});
promise
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    // 完成后每次都会执行
    console.log("finally code execute");
  });
```

## Promise 类方法 resolve reject

`Promise.resolve`方法参数：

1. 传入普通值，转换成一个 `Promise`；
2. 传入 `Promise`；
3. 传入 `thenable`；

```js
// 1. 传入普通值
Promise.resolve({ name: "tom" });
// 等于如下代码
new Promise((resolve) => {
  resolve({ name: "tom" });
});
// 2. 传入Promise
const promise = Promise.resolve(
  new Promise((resolve, reject) => {
    resolve("11111");
  })
);
promise.then((res) => {
  // 打印 11111
  console.log("res:", res);
});
// 3. 传入thanable，略
```

`Promise.reject`方法参数：

```js
const promise = Promise.reject("rejected msg");
// 相当于
// const promise2 = new Promsie((resolve, reject) => {
//   reject ("rejected msg")
// })
// 注意：无论传入什么值都是一样，最终都会打印出reject括号内的内容
const promise = Promise.reject(new Promise(() => {}));
promise
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
```

## Promise 类方法 all allSettled(ES11) 方法

1. `Promise.all()` 当括号内所有的 `Promise` 全部完成时获取结果，如果有一个失败，那整个 `Promise` 就失败。
   `all` 方法有一个缺陷：当有其中一个 `Promise` 变成 `reiect` 状态时，新 `Promise` 就会立即变成对应的` reject` 状态。

- 那么对于 `resolved` 的，以及依然处于 `pending` 状态的 `Promise` ，我们是获取不到对应的结果的；

2. 在 ES11（ ES2020）中，添加了新的 API `Promise.allSettled`：

- 该方法会在所有的 `Promise` 都有结果（`settled`），无论是 `fulfilled` ，还是 `reject` 时，才会有最终的状态；
- 并且这个 `Promise` 的结果一定是 `fulfilled` 的：

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(222);
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(333);
  }, 2000);
});
// 意外情况，当有promise rejected时，那么整个promise是rejected
// 有一个失败就执行 .catch
Promise.all([p1, p2, p3, "aaa"]).then((res) => {
  // 打印 [111, 222, 333, 'aaa']
  console.log(res);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(444);
  }, 2000);
});
Promise.allsettled([p1, p4])
  .then((res) => {
    // 打印 {status: 'fulfilled', value: 111, status: 'rejected': 444}
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

## Promise 类方法 race any(ES12 ES2021) 方法

`Promise.race()` 数组中有一个 `Promise` 成功时，就成功。但是如果在成功之前，有一个失败，那就执行 `reject`。
`Promise.any()` 有一个成功时才会取得结果，如果全部失败会执行 `catch`。

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(111);
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(222);
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(333);
  }, 4000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(333);
  }, 1000);
});
Promise.race([p1, p2, p3]).then((res) => {
  // 打印 111
  console.log(res);
});
Promise.any([p1, p2, p3, p4]).then((res) => {
  // 同样打印 111
  console.log(res);
});
```

```yaml
# 完结撒花
```
