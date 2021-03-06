# Makedown Cheetsheet
A markdown sheet
[[toc]]
## 语法
- 标题  
    ```
    # 这是一级标题
    ## 这是二级标题 
    ### 这是三级标题
    #### 这是四级标题
    ##### 这是五级标题
    ###### 这是六级标题
    ```
- 格式
    - 斜体 `*`
    - 加粗 两个`*`
    - 斜体加粗 三个`*`
    - 删除线 `~~`
- 引用 `>` 可嵌套
- 分割线 三个或者三个以上的 `---` 或者 `***`
- 图片 `![图片alt](图片地址 ''图片title'')`
- 超链接 `[超链接名](超链接地址 "超链接title")`
- 列表 
  - 无序 `- + *` 任何一种都可以
  - 有序 数字加点
- 表格
    ```md
    表头|表头|表头
   ---|:--:|---:
   内容|内容|内容
   内容|内容|内容
    ```
   表头|表头|表头
   ---|:--:|---:
   内容|内容|内容
   内容|内容|内容

    第二行分割表头和内容。
    - 有一个就行，为了对齐，多加了几个
    文字默认居左
    - 两边加：表示文字居中
    - 右边加：表示文字居右
    注：原生的语法两边都要用 | 包起来。此处省略
- 代码
    ```
    代码...
    代码...
    代码...
    ```
- 流程图

```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
```