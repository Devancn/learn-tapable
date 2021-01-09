### tapable 分类
#### 1.1 按同步异步分类
##### 1.1.1 同步hook
- SyncHook
- SyncBailHook
- SyncWaterfallHook
- SyncLoopHook
##### 1.1.2 异步hook
异步又分为并行和串行
###### 1.1.2.1 异步并行hook
- AsyncParallelHook
- AsyncParallelBailHook
###### 1.1.2.2 异步串行hook
- AsyncSeriesHook
- AsyncSeriesBailHook
- AsyncSeriesWaterfallHook

### 按返回值分类
#### Bail
执行每一个事件函数，遇到第一个结果 `result !== undefined` 则返回，不在继续执行
- SyncBailHook
- AsyncParallelBailHook
- AsyncSeriesBailHook

#### Loop
不停的循环执行事件函数，直到所有函数结果 result === undefined
- SyncLoopHook
- AsyncSeriesLoopHook
#### Basic
执行每一个事件函数，不关心函数的返回值 
- SyncHook
- AsyncParallelHook
- AsyncSeriesHook
#### Waterfall
如果前一个事件函数的结果 result !== undefined，则result会作为后一个事件函数的第一个参数
- SyncWaterfallHook
- AsyncSeriesWaterfallHook