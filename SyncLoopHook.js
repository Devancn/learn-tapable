let { SyncLoopHook } = require("tapable");
// 如果回调函数返回非undefined得值时会停止后续的调用

let hook = new SyncLoopHook(["name", "age"]);

let count1 = 0;
let count2 = 0;

hook.tap("A", (name, age) => {
  console.log("A", "count1", count1);
  if (++count1 === 1) {
    count1 = 0;
    return;
  }
  return "A";
});

hook.tap("B", (name, age) => {
  console.log("B", "count2", count2);
  if (++count2 === 2) {
    count2 = 0;
    return;
  }
  return "A";
});
hook.call('Devan', 27)