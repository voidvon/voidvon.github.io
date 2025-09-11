## （一）字面量增强

```js
let name = 'test'
let age = 18

let obj = {
  // 1. property shorthand（属性简写）
  name,
  age,

  // 2. method shorthand （方法简写）
  bar() {
    // ...
  }
  // 原来写法
  foo: function() {
    // ...
  },
  // 3. computed property name（计算属性名：对象属性使用变量或常量）
  [name + '123']: 'value',
}
```

## （二）对象、数组的解构，解构的默认值

```js
// # 数组解构
let names = ["tom", "jack", "batman"];
// 1. 数组解构
let [name1, name2, name3] = names;
// 打印出：'tom', 'jack', 'batman'
console.log(name1, name2, name3);

// 2. 解构后面元素，前后省略
let [, name2] = names;
// 打印出 'jack'
console.log(name2);

// 3. 后面的元素放入新数组
let [name1, ...newNames] = names;
// 打印出 'tom', ['jack', 'batman']
console.log(name1, newNames);

// 4. 解构默认值
let [name1, name2, name3, name4 = "test"] = names;
// 打印出 'test'
console.log(name4);
```

```js
// # 对象解构
let obj = {
  name: "tom",
  age: 18,
  weight: 50,
};
// 1. 对象解构：对象无顺序，必须使用相同的key名称
let { name } = obj;
// 打印出 'tom'
console.log(name);

// 2. 解构别名
let { name: newName } = obj;
// 打印出 'tom'
console.log(newName);

// 3. 默认值
let { test = "测试" } = obj;
// obj中没有test，所有打印出 '测试'
console.log(test);

// 4. function 中的使用和默认值方式1
function bar({ name, age } = { name: "tom", age: 18 }) {
  // 打印出 'tom', 18
  console.log(name, age);
}
// 默认值方式2
function bar({ name = "tom", age = 18 } = {}) {
  // 打印出 'tom', 18
  console.log(name, age);
}
bar(obj);

// 5.
```

## （三）let、const 基本使用

### const

`const`只能赋值一次，不能多次赋值，当值为`Object`对象时，可更改属性。

```js
const name = "tom";
// 报错：TypeError: Assignment to constant variable
name = "jack";

const obj = {
  name: "tom",
  age: 18,
};
// 可正常修改，不报错
obj.name = "jack";
// 报错，不可直接替换整个对象
obj = {};
```

### let

`let` 不可多次赋值，`var`可以。

```js
let a = 1;
// 报错：不可多次赋值
let a = 2;

var b = 1;
// 不会报错
var b = 2;
```

### var 作用域提升，let、const 会报错

`var` 可在创建之前被访问，`let`、`const`会报错。

```js
// 报错：fname is not defined
console.log(fname);
let fname = "tom";

// 报错：age is not defined
console.log(age);
const age = 18;

// 不报错，但打印：undefined
console.log(weight);
var weight = 50;
```

### 块级作用域

```js
{
  var title = "tom";
  let keyword = "kw value";
  const time = "2022";
  function demo() {}
}
// 正常打印 'tom'
console.log(title);
// 报错：keyword is not defined
console.log(keyword);
// 报错：time is not defined
console.log(time);
// 为兼容旧版，也可读取
demo();

if (true) {
  // if 括号内也是块作用域
}
switch (true) {
  case true:
    // 这里也是块作用域
    break;
}
for (var i = 0; i < 10; i++) {
  // for 内也是块作用域，for外部可访问 i
}
for (let i = 0; i < 10; i++) {
  // for 内也是块作用域，for外部无法访问 i
}
```

### 块作用域的应用场景

如下代码，由于 `var` 声明的 `i` 属于全局作用域，当 `for` 执行完毕后，`i` 始终等于 `2`，所以每次点击输出都是 `2`，使用`let`声明即可解决。

```html
<button>按钮1</button>
<button>按钮2</button>
<button>按钮3</button>
<script>
  const btns = document.getElementsByTagName("button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].onClick = function () {
      // 不管点击哪个按钮始终输出 '点击了按钮2'
      console.log("点击了按钮" + i);
    };
  }
</script>
```

### var、let、const 的选择

在开发中，我们到底要选择使用哪一种方式来定义我们的变量呢？

1. 对于`var`的使用：

- 作用域提升、window 全局对象、没有块作用域都是历史遗留问题；
- 其实是 JavaScript 在设计之初的一种语言缺陷；
- 尽管面试中可能问及相关问题，但实际工作中可以使用最新规范编写，就是不再使用 var 来定义变量。

2. 对于 let、const：

- 目前开发推荐使用 `let` `const`；
- 优先推荐使用 `const` ，这样可以保证数据的安全不会被随意修改；
- 当我们明确知道变量后续会需要重新赋值时，再使用 `let`；
- 这种再很多其它语言里面也都是一种约定俗成的规范，我们尽量也遵守这种规范。

## （四）模板字符串

```js
const name1 = "tom";
const age = 18;
const weight = 50;

// es6之前字符串拼接写法复杂
console.log("my name is " + name + ", age is " + age + ", weight is " + weight);
// es6的模板字符串，{}内部还可以写表达式、使用函数
console.log(`my name is ${name}, age is ${age}, weight is ${weight + 1}`);
```

### 标签模板字符串(了解)

比较少用，但在 `react` 框架中有个叫 `styled-components` 库使用这种方式编写。

```js
function foo(a, b, c) {
  console.log(a, b, c);
}
const title = "tom";
const age = 18;
// 打印出：['Hello', 'Wo', 'rld'], 'tom', 18
foo`Hello${title}Wo${age}rld`;
```

## （五）箭头函数

在 es6 中新增了箭头函数：

1. 语法更简洁清晰，快捷；
2. 没有自己的 `this`， `this` 不能被修改，`call` 等都不能修改，只能间接修改被继承的 `this`；
3. `this` 在定义时就定了，继承外一层的普通函数；
4. 没有 `prototype` ；
5. `this` 继承自外层函数，如果没有外层函数则指向 `window`；
6. 不能构造函数，不能 new.target，不能 new，没有 constructor；
7. 箭头函数不支持重复命名参数，普通函数可以重复命名参数；

```js
const func = () => {
  // this 指向全局 window
  console.log(this);
};
```

## （六）展开语法

### 展开语法(Spread syntax)

- 可以在函数调用/数组构造时，将数组表达式或者 string 在语法层面展开；
- 还可以在构造字面量对象时，将对象表达式按 key-value 的方式展开；

### 展开语法的场景

- 在函数调用时使用；
- 在数组构造时使用；
- 在构建对象字面量时，也可以使用展开运算符，这个是在 ES2018（ ES9）中添加的新特性；

### 注意：展开合并时，是一个浅拷贝

```js
const titles = ["t1", "t2", "t3"];
const title = "title";
const info = { title: "title1", age: 18 };
// 1. 函数调用
function foo(x, y, z) {
  console.log(x, y, z);
}
// 相当于：foo(titles[0], titles[1], titles[2])
foo(...titles);
// 相当于：foo('t', 'i', 't', 'l', 'e')
foo(...title);
// 2. 构造数组时
const newTitles = [...titles, ...title];
console.log(newTitles);
// 3. ES2018(ES9) 构建对象字面量时
const obj = { ...info, address: "厦门市" };
// {title: 'title1', age: 18, address: '厦门市'}
console.log(obj);
```

## （七）数值的表示

```js
const numl = 100; // 十进制
// b 表示binary
const num2 = 0b100; // 二进制
// o 表示octonary
const num3 = 0o100; // 八进制
// x 表示 hex(hexadecimal)
const num4 = 0x100; // 十六讲制
// 100, 4, 64, 256
console.log(numl, num2, num3, num4);

// 大的数值的连接符（ES2021 ES12），方便阅读
const num = 10_000_000_000_000;
// 10000000000000
console.log(num);
```

## (八)Symbol 的基本使用

`Symbol` 是什么呢？ `Symbol` 是 ES6 中新增的一个基本数据类型，翻译为符号。

### 那么为什么需要 Symbol 呢？

- 在 ES6 之前，对象的属性名都是字符串形式，那么很容易造成属性名的冲突；
- 比如原来有一个对象，我们希望在其中添加一个新的属性和值，但是我们在不确定它原来内部有什么内容的情况下，很容易造成冲突，从而覆盖掉它内部的某个属性；
- 比如 `apply` 、`call` 、`bind` 实现时 ，我们给其中添加一个属性 ，那么如果它内部原来已经有了 fn 属性了呢？
- 比如开发中我们使用混入，那么混入中出现了同名的属性，必然有一个会被覆盖掉；

### Symbol 就是为了解决上面的问题，用来生成一个独一无二的值

- `Symbol` 值是通过 `Symbol` 函数来生成的，生成后可以作为属性名；
- 也就是在 ES6 中，对象的属性名可以使用字符串，也可以使用 `Symbol` 值；

### Symbol 即使多次创建值，它们也是不同的：Symbol 函数执行后每次创建出来的值都是独一无二的

### 我们也可以在创建 Symbol 值的时候传入一个描述 description：这个是 ES2019( ES10）新增的特性

```js
// 1. ES6 Symbol 声明
const s1 = Symbol();
const s2 = Symbol();
// 打印：false
console.log(s1 === s2);
// ES2019 (ES10)，Symbol 还有一个描述(description)
const s3 = Symbol("aaa");
// 打印：'aaa'
console.log(s3.description);
// 2.Symbol 值作为key
// 2.1 新增属性方式1
const obj = { [s1]: "abc", [s2]: "cba" };
// 2.2 新增属性方式2
obj[s3] = "test";
// 2.3 新增属性方式3，使用 Object.defineProperty
const s4 = Symbol();
Object.defineProperty(obj, s4, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "test",
});
// 读取
console.log(obj[s1], obj[s2], obj[s3]);
// 注意：不能使用.语法读取
console.log(obj.s1);
//
// 遍历：先获取key，再通过key读取
const sKeys = Object.getOwnPropertySymbols(obj);
for (const sKey of sKeys) {
  console.log(obj[sKey]);
}
// 创建相等的Symbol，Symbol.for(key)/Symbol.keyFor(symbol)
const sa = Symbol.for("aaa");
const sb = Symbol.for("aaa");
// 打印：true
console.log(sa === sb);
// 获取key
const key = Symbol.keyFor(sa);
// 打印：'aaa'
console.log(key);
const sc = Symbol.for(key);
// 打印：true
console.log(sa === sc);
```

## （九）数据结构 Set

在 ES6 之前，我们存储数据的结构主要有两种：数组、对象。

- 在 ES6 中新增了另外两种数据结构：Set、Map，以及它们的另外形式 WeakSet、 WeakMap。
  Set 是一个新增的数据结构，可以用来保存数据，类似于数组，但是和数组的区别是元素不能重复。
- 创建 Set 我们需要通过 Set 构造函数（暂时没有字面量创建的方式）
  我们可以发现 Set 中存放的元素是不会重复的，那么 Set 有一个非常常用的功能就是给数组去重。

### set 方法

1. `add`：增加元素；
2. `delete`：删除元素；
3. `has`：是否包含元素；
4. `clear`：清除元素；
5. `forEach`：遍历；
6. 使用 `for of` 遍历。

属性 `size`：元素的个数

```js
// 创建set结构
const set = new Set();
set.add(10);
set.add(20);
set.add(40);
set.add(333);
set.add(10);
// 打印：{10, 20, 40, 333}
console.log(set);
set.add({});
set.add({});
// 打印：{10, 20, 40, 333, {}, {}}，添加两个不同对象
console.log(set);

const obj = {};
// 下面两次新增obj只会加入一次，obj 引用地址相同
set.add(obj);
set.add(obj);

// 数组去重
const arr = [10, 20, 40, 333, 10];
const arrSet = new Set(arr);
// 打印：{10, 20, 40, 333}
console.log(arrSet);
// set 转数组1
const newArr = Array.from(arrSet);
// set 转数组2
const newArr2 = [...arrSet];
// 打印 4
console.log(newArr.size);
```

## （十）数据结构 WeakSet

`WeakSet` 只能保存对象，且它是弱引用。
强引用：当变量（对象）赋值给一个对象属性，此时为强引用，当变量变成 `null` 时，对象不会被回收。因为还有对象属性指向这个对象的内存地址。
弱引用：把变量（对象）放入 `WeakSet` 后，把变量对象变成 `null`，对象就会被回收。`WeakSet` 的指向是弱引用，不影响内存回收。
方法：

1. add：添加元素
2. delete：删除元素
3. has：是否包含元素
4. 不能遍历：只能添加，无法遍历

```js
let obj = {
  name: "why",
};
const set = new Set();
const weakset = new WeakSet();
// 建立的是强引用
set.add(obj);
// 建立的是弱引用
weakset.add(obj);
```

## （十一）数据结构 Map

`Map` 用于存储映射关系，和对象类似。
对象和 `Map` 的区别：

- 对象只能用字符串（ES6 新增了 `Symbol` ）作为 `key`（属性名）；
- `Map` 可以用任何类型作为 `key`。
  方法：

1. set：设置映射关系；
2. get：获取元素；
3. has：是否包含元素；
4. delete：删除元素；
5. clear：清除元素；
6. foreach 遍历；
7. for of 遍历。
   属性：size：元素的个数。

```js
const map = new Map();
map.set(false, "false的值");
map.get(false);
```

## （十二）数据结构 WeakMap

和 `Map` 类型相似的另外一个数据结构称之为 `WeakMap` ，也是以键值对的形式存在的。
那么和 `Map` 有什么区别呢？

- `WeakMap` 的 `key` 只能使用对象，不接受其他的类型作为 `key` ；
- `WeakMap` 的 `key` 对对象想的引用是弱引用，如果没有其他引用引用这个对象，那么 GC 可以回收该对象。
  方法：

1. set：设置映射关系；
2. get：获取元素；
3. has：是否包含元素；
4. delete：删除元素；
5. clear：清除元素；
