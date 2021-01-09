let { SyncBailHook } = require("tapable");

/**
 * 同步钩子
 * 方法的参数为数组，会作为执行hook时的参数列表的个数
 */
// 创建钩子 如果任意一个事件函数有返回值，返回值不为undefined，则直接结束，不执行后序的事件函数
const hook = new SyncBailHook(["name", "age"]);

//  使用tap注册钩子，tap第一个参数表示钩子或者插件的名字

hook.tap("1", (name, age) => {
  console.log(1, name, age);
});

hook.tap("2", (name, age) => {
  console.log(2, name, age);
  return "2";
});

hook.tap("3", (name, age) => {
  console.log(3, name, age);
});

// 执行钩子

hook.call("Devan", 27);
