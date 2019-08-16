# Fiddle
[[toc]]
## 命令行
- 请求类型 `=post`
- 响应码 `=502`
- 资源类型 `select image` `allbut` (css,js)
- 匹配字段 `? 匹配内容`
- 加粗字段 `Bold 匹配内容`
- @host命令
- Bpafter， Bps, bpv, bpm, bpu
    ```
    Bpafter xxx: 中断 URL 包含指定字符的全部 session 响应

    Bps xxx: 中断 HTTP 响应状态为指定字符的全部 session 响应。

    Bpv xxx: 中断指定请求方式的全部 session 响应

    Bpm xxx: 中断指定请求方式的全部 session 响应。等同于bpv xxx

    Bpu xxx:与bpafter类似

    当这些命令没有加参数时，会清空所有设置了断点的HTTP请求
    ```
