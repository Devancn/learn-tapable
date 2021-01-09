let { SyncWaterfallHook } = require("tapable");
let hook = new SyncWaterfallHook(["name", "age"]);
// 上一个函数的结果如果不为undefined，则可以作为下一个事件函数的第一个参数,否则用最近有返回值得函数最为第一个参数

hook.tap("1", (name, age) => {
  console.log(1, name, age);
  return 'Devan'
});

hook.tap("2", (name, age) => {
  console.log(2, name, age);
  return 'dxh_hxd'
});

hook.tap("3", (name, age) => {
  console.log(3, name, age);
});

// 执行钩子

hook.call("dingxiaohuan", 27);