# Bash

## Site
- [https://explainshell.com/](https://explainshell.com/)

## 快捷键
|快捷键|描述|
|---|---|
|tab|输入自动联想|
|ctrl + r|搜索输入历史，ctrl+r 切换更多匹配|
|ctrl + w|删除最后输入的单词|
|ctrl + u|删除光标前的内容|
|ctrl + k|删除光标厚的内容|
|alt + b/f|单词为单位移动光标|
|ctrl + a|移动光标至行开头|
|ctrl + e|移动光标至行结尾|
|ctrl + l|清除屏幕|

## 命令
|命令|描述|
|---|---|
|history|输入历史，`!n` 执行对应的命令，`!!` 最近的一个命令|
|cd -|返回前一个工作目录|

---
- If you are halfway through typing a command but change your mind, hit `alt #` to add a # at the beginning and enter it as a comment (or use `ctrl-a, #, enter`). You can then return to it later via command history.

## 例子
```bash
# 寻找文件
find . -name '*something*'
find . -regex '.*bar'

# 文件转换
pandoc bash.md --from markdown --to docx -o temp.docx

# 打乱输出文件内容
shuf bash.md

# diff文件
diff bash.md bash_v2.md

# format json
echo '{"foo": "lorem", "bar": "ipsum"}' | python -m json.tool
```



