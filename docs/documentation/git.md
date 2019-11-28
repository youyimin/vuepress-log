# Git

## Site
- [https://learngitbranching.js.org/](https://learngitbranching.js.org/)

## commit
- `HEAD^` 父提交
- `HEAD~n` 第n个父提交
- `HEAD^n` 并列父提交的第n个
- `HEAD~^2~2` 父提交的第二个并列父提交的第2个父提交
- `--amend --no-edit` 修改提交信息，（no-edit表示提交信息不会修改）

## git branch
- `git branch name [commit]` commit为可选

## git checkout
- `git checkout commit`
- `git checkout branch`

## git log
- `--oneline` 每条记录显示一行
- `-n` 前**n**条
- `--after --before` 
- `--author`
- `--grep` message
- `git log -- foo.py bar.py` 文件
- `git log -S"Hello, World!"` 内容
- `format`
- `--name-only` 修改的文件
- `--name-status` 修改的文件状态
- `--stat` 文件修改的内容


## git reset
- 在reset后，所做的变更还在，但是处于未加入暂存区状态。
- 对远程分支无效 （除非 -f）
- 适用于修改本地分支
- `--hard` 会重置暂存区和工作区
- `--soft` 会将之后的修改放到暂存区，保留工作区

## git revert
- 会在原基础上生成一个新的提交记录
- 适用于远程

## git cherry-pick
- git cherry-pick commit1 commit2

## git rebase
- git rebase -i HEAD~n
- git rebase -i commit
- 修改提交记录或者合并提交记录
- git rebase master [topic] (topic 为当前分支可不写)

## git bisect
[article](http://www.ruanyifeng.com/blog/2018/12/git-bisect.html)
> 它的原理很简单，就是将代码提交的历史，按照两分法不断缩小定位。所谓"两分法"，就是将代码历史一分为二，确定问题出在前半部分，还是后半部分，不断执行这个过程，直到范围缩小到某一次代码提交。
1. `git bisect start [终点] [起点]`
2. `(git bisect good|bad)+`
3. `b47892 is the first bad commit`
4. `git bisect reset`

## git show
- 修改的详情

## git config
- `git config credential.helper store`
- `git config --global -e` 使用vscode打开

## 修改 `.gitjgnorte`
```sh
git rm -r --cached .
git add .
git commit -m ".gitignore is now working”
```

##
```bash
# pretty git log
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cd)%Creset' --abbrev-commit --date=short

# discard changes in working directory
git checkout -- <file>

# Unstage changes to be committed
git reset HEAD <file>
```