## 使用
### 全局
### main.js下引入
```
import "./components/loongPopover/loongPopover";
import "./components/loongPopover/loongPopover.less";
```
```
<div  v-popover.right="{content:$t(popover.content),width:popover.width}">气泡提示</div>

支持top,bottom,left,right

传入参数content,width
```
### 局部
所需组件中
```
import "@/components/loongPopover/loongPopover";
import "@/components/loongPopover/loongPopover.less";

用法同上
```