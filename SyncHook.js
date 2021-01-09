let { SyncHook } = require("tapable");

/**
 * 同步钩子
 * 方法的参数为数组，会作为执行hook时的参数列表的个数
 */
// 创建钩子
const hook = new SyncHook(["name", "age"]);

//  使用tap注册钩子，tap第一个参数表示钩子或者插件的名字

hook.tap("1", (name, age) => {
  console.log(1, name, age)
});

hook.tap("2", (name, age) => {
  console.log(2, name, age)
});

hook.tap("3", (name, age) => {
  console.log(3, name, age)
});

// 执行钩子

hook.call('Devan', 27)
