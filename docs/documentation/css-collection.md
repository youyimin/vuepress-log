# Css Collection
[[toc]]

## 属性收集
- `touch-action`, 用于设置触摸屏用户如何操纵元素的区域

## 常用样式
```css
// 单行省略
{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

// 多行省略
{
    --line:2;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: var(--line);
    -webkit-box-orient: vertical;
}

```

## 定宽高比

```css
width: 200px;
background: red;
display: flex;
&:after {
  content: "";
  padding-top: 100%;
}
```

<el-input v-model='ratio' type='number' style='width:100px;margin-bottom:20px;'></el-input> %

<div class="div1" :style="{'--ratio':ratio +'%'}">
    我是一行文字
</div>

## 绘制彩带

```css
height: 100px;
background-image: linear-gradient(90deg, #fdeb71 20px, #f8d800 20px);
background-size: 40px;
```

<div class="div2"></div>

## 饼图

```css
width: 100px;
height: 100px;
border-radius: 50%;
background-image: conic-gradient(
  #f6416c 0 33.33%,
  #28c76f 33.33% 66.66%,
  #9f44d3 66.66% 100%
);
```

<div class="div3"></div>

## outline

```css
width: 100px;
height: 100px;
background: #ffd26f;
border: 10px dashed #3677ff;
outline: 10px dashed #9f44d3;
```

outline-offset：<el-input v-model='outline_offset' type='number' style='width:100px;margin-bottom:20px;'></el-input> px

<div class="div4" :style="{'outline-offset':outline_offset+'px'}"></div>

### 实现加号
- 容器得是个正方形
- outline 边框本身的宽度不能太小
- outline-offset 负值 x 的取值范围为: -(容器宽度的一半 + outline宽度的一半) < x < -(容器宽度的一半 + outline宽度)
<div class="div4-2"></div>

## 滚动条
```css
--c:#F8D800;
height: 60px;
background-color: #FDEB71;
border-radius: 30px;
background-image: radial-gradient(closest-side circle at var(--l), var(--c),var(--c) 100%,transparent),linear-gradient(var(--c), var(--c));
background-size: 100%,var(--l);
background-repeat: no-repeat;
transition:background-image linear .2s;
```
<el-input v-model='progress' type='number' style='width:100px;margin-bottom:20px;'></el-input> %
<div class="div5" :style="{'--l':progress+'%'}"></div>


## 单侧投影
```css
box-shadow: -7px 0 5px -5px;
```

<div class="div6">
    <div class="div6__1"></div>
    <div class="div6__2"></div>
    <div class="div6__3"></div>
    <div class="div6__4"></div>
</div>

## 设计字重对照
```
字体粗细：‘font-weight’属性
名称： font-weight
取值： normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
初始： normal
适用于：    所有元素
继承： 是
百分比：    （不适用）
媒介： 视觉
计算值：    详见描述
动画： -
‘font-weight’属性执行字体中字形的重量，这取决于黑度等级或笔划粗细。
其值的意义如下：
100至900
这些有序排列中的每个值，表示至少与其起身拥有相同黑度的重量。其大致符合下列通用重量名称：
100 - *Thin*
200 - Extra Light (Ultra Light)
300 - Light
400 - Regular (*Normal*、Book、Roman)
500 - *Medium*
600 - Semi *Bold* (Demi Bold)
700 - *Bold*
800 - Extra *Bold* (Ultra Bold)
900 - *Black* (Heavy)

normal、regular与'400'相同。
bold与'700'相同。
bolder指定外观的重量大于继承的值。
lighter 指定外观的重量小于继承的值。
```

##
<script>
export default {
    data(){
        return {
            ratio:100,
            outline_offset:0,
            progress:60
        }
    }
}
</script>

<style lang="scss">
    .div1 {
        width:200px;
        background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
        display:flex;
        &:after {
            content:'';
            padding-top:var(--ratio);
        }
    }
    .div2 {
        height:100px;
        background-image:linear-gradient(90deg,#FDEB71 20px,#F8D800 20px);
        background-size: 40px;
    }
    .div3 {
        width:150px;
        height:150px;
        border-radius:50%;
        background-image:conic-gradient(#F6416C 0 33.33%, #28C76F 33.33% 66.66%,#9F44D3 66.66% 100%);
    }
    .div4 {
        margin:10px auto 0;
        width:100px;
        height:100px;
        background:#FFD26F;
        border:10px dashed #3677FF;
        outline: 10px dashed #9F44D3;
    }
    .div4-2{
        margin-top:20px;
        width:100px;
        height:100px;
        background:#F6416C;
        outline:10px solid #333;
        animation:outline-cross 3s infinite;
        &:hover{
            animation-play-state: paused;
        }
    }
    .div5 {
        --c:#F8D800;
        height: 60px;
        background-color: #FDEB71;
        border-radius: 30px;
        background-image: radial-gradient(closest-side circle at var(--l), var(--c),var(--c) 100%,transparent),linear-gradient(var(--c), var(--c));
        background-size: 100%,var(--l);
        background-repeat: no-repeat;
        transition:background-image linear .2s;
    }

    .div6 {
        display: grid;
        grid-template-columns: repeat(4, 100px);
        grid-template-rows: 100px;
        justify-content:space-evenly;
        & > div {
            border: 1px solid #333;
        }
        &__1{
            box-shadow: -7px 0 5px -5px;
        }
        &__2{
            box-shadow: 0 -7px 5px -5px;
        }
        &__3{
            box-shadow: 7px 0 5px -5px;
        }
        &__4{
            box-shadow: 0 7px 5px -5px;
        }
    }

    @keyframes outline-cross {
        from {
            outline-offset:0;
        }

        to {
            outline-offset:-60px;
        }
    }
</style>
