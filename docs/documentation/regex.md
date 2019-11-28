# Regex
[[toc]]
## Site
- [regex101](https://regex101.com/)
- [regexper](https://regexper.com/)
- [regulex](https://jex.im/regulex)

## 表达式
### 字符
|字符|描述|
|:--:|---|
|\d|[0-9]|
|\D|[^0-9]|
|\w|[0-9a-zA-Z_]|
|\W|[^0-9a-zA-Z_]|
|\s|[ \t\v\n\r\f] 空白符：空格，水平制表符，垂直制表符，换行符，回车符，换页符|
|\S|[^ \t\v\n\r\f] 非空白符|
|.|[^\n\r\u2028\u2029] 通配符: 换行符，回车符，行分隔符，段分隔符除外|

---
- 匹配任意字符 `[\d\D] [\w\W] [\s\S] [^]`



### 量词
|字符|描述|惰性量词|
|:--:|---|---|
|{m,}|至少出现**m**次|{m,}?|
|{m}|等价于 `{m,m}` 出现**m**次|{m}?|
|?|等价于 `{0,1}` 0或1次|??|
|+|等价于 `{1,}` 至少出现**1**次|+?|
|\*|等价于 `{0,}` 出现任意次，有可能不出现|\*?|

---
- 惰性匹配 尽可能少的匹配，例子对比 `\d{2,5}` `\d{2,5}?`

### 位置
|字符|描述|
|:--:|---|
|^|匹配开头，在多行中匹配行开头|
|$|匹配结尾，在多行中匹配行结尾|
|\b|单词边界 `\w`与`\W`之间的位置，即`\w`与`^`之间的位置和`\w`与`$`之间的位置|
|\B|非单词边界 `\w`与`\w`、`\W`与`\W`、`^`与`\W`、`\W`与`$`之间的位置|
|?=p|`p`为子模式，`p`前面的位置或者可以理解为该位置后面的字符要匹配`p`|
|?!p|`p`为子模式，非`p`前面的位置或者可以理解为该位置后面的字符不匹配`p`|

### 修饰符
|字符|描述|
|:--:|---|
|g|全局, global|
|i|忽略字母大小写, ignoreCase|
|m|多行, multiline|

### 多选分支
`|` 支持多个子模式任选其一

### 元字符
`^、$、.、*、+、?、|、\、/、(、)、[、]、{、}、=、!、:、-`

### 括号
- 分组 `/(ab)+/g`
- 分支结构 `/(ab|cd)+/g`
- 反向引用 `/\d{4}(-|\/|\.)\d{2}\1\d{2}/` `\1`代表之前引用的分组
- 非捕获括号 `(?:p) (?:p1|p2|p3)` 使用括号的功能但不引用
---
```js
// 分组
var regex = /(\d{4})-(\d{2})-(\d{2})/g
var string = "2017-06-12"
var result = string.replace(regex,"$2/$3/$1")

var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
var result = string.replace(regex, function () {
   return RegExp.$2 + "/" + RegExp.$3 + "/" + RegExp.$1;
});

var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
var result = string.replace(regex, function (match, year, month, day) {
   return month + "/" + day + "/" + year;
});
```



## 方法

### String
|方法名|描述|
|:--:|---|
|match|返回结果 `null` or Array, If the `g` flag is **used**, all results matching the complete regular expression will be returned, but capturing groups will not.<br>if the `g` flag is **not used**, only the first complete match and its related capturing groups are returned. In this case, the returned item will have additional properties as described below.|
|matchAll|返回所有匹配项，match的`g`匹配|
|search|返回匹配项的index，没有则返回 -1|
|split|根据正则分割|
|replace|根据正则替换|

### Regexp
|方法名|描述|
|:---:|---|
|exec|根据`lastIndex`返回匹配项或者`null`,匹配项:`[匹配内容,[括号子字符串匹配]...,startIndex,input]`|
|test|根据是否匹配返回 `true` `false`|

### Regexp静态方法
|静态属性|描述|简写形式
|---|---|---|
|RegExp.input |最近一次目标字符串 |RegExp["$_"]|
|RegExp.lastMatch |最近一次匹配的文本 |RegExp["$&"]|
|RegExp.lastParen |最近一次捕获的文本 |RegExp["$+"]|
|RegExp.leftContext |目标字符串中lastMatch之前的文本 |RegExp["$`"]|
|RegExp.rightContext |目标字符串中lastMatch之后的文本 |RegExp["$'"]|

### Replace
|属性|描述|
|:---:|---|
|$1,$2,…,$99|匹配第1-99 个 分组里捕获的文本|
|$& |匹配到的子串文本|
|$` |匹配到的子串的左边文本|
|$' |匹配到的子串的右边文本|
|$$ |美元符号|

```js
// $1-$9
var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
str.replace(re, '$2, $1'); // "Smith, John"
RegExp.$1; // "John"
RegExp.$2; // "Smith"

// replace
var result = "2,3,5".replace(/(\d+),(\d+),(\d+)/, "$3=$1+$2");
console.log(result);
// => "5=2+3"

var result = "2,3,5".replace(/(\d+)/g, "$&$&$&");
console.log(result);
// => "222,333,555"

var result = "2+3=5".replace(/=/, "$&$`$&$'$&");
console.log(result);
// => "2+3=2+3=5=5"

// 静态方法
var regex = /([abc])(\d)/g;
var string = "a1b2c3d4e5";
string.match(regex);
console.log( RegExp.input );
console.log( RegExp["$_"]);
// => "a1b2c3d4e5"
console.log( RegExp.lastMatch );
console.log( RegExp["$&"] );
// => "c3"
console.log( RegExp.lastParen );
console.log( RegExp["$+"] );
// => "3"
console.log( RegExp.leftContext );
console.log( RegExp["$`"] );
// => "a1b2"
console.log( RegExp.rightContext );
console.log( RegExp["$'"] );
// => "d4e5"
```

## 回溯
> 回溯法也称试探法，它的基本思想是：从问题的某一种状态（初始状态）出发，搜索从这种状态出发
所能达到的所有“状态”，当一条路走到“尽头”的时候（不能再前进），再后退一步或若干步，从
另一种可能“状态”出发，继续搜索，直到所有的“路径”（状态）都试探过。这种不断“前进”、
不断“回溯”寻找解的方法，就称作“回溯法”。

- 贪婪量词 会最大数匹配
- 惰性量词 尽可能少的匹配

## 例子
```js
// 匹配26进制颜色
/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g

// 匹配时间
/^([01][0-9]|2[0-3]):[0-5][0-9]$/

// 日期
/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

// 文件路径
/^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/

// 匹配id
/id="[^"]*"/g

// 匹配电话号码
/^((13[0-9])|(14[57])|(15[0-35-9])|(17[035-8])|(18[0-9])|166|198|199|(147))\d{8}$/

// 千分位
/(?!^)(?=(\d{3})+$)/g
/\B(?=(\d{3})+\b)/g // 升级版

// 密码校验
/^[a-zA-Z0-9]{6,12}$/g // 6-12位
/(?=.*[0-9])^[a-zA-Z0-9]{6,12}$/g // 必须包含数字
/(?=.*[0-9])(?=.*[a-z])^[a-zA-Z0-9]{6,12}$/g // 必须包含数字和小写字母
/((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[a-zA-Z0-9]{6,12}$/g // 包含数字和小写字母、数字和大写字母、小写字母和大写字母、数字和大小写字母
/(?!^[0-9]{6,12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[a-zA-Z0-9]{6,12}$/g // 至少包含两种字符

// trim
/^\s+|\s+$/g
/^\s+(.*?)\s+$/

// 首字母大写
/(?:\s|^)\w/g // match toUpperCase

// 驼峰
/[_-\s]+(.)?/g // group1 toUpperCase

// 中划线化  MozTransform => -moz-transform
str.replace(/([A-Z])/g,'-$1').replace(/[-_\s]+/g,'-').toLowerCase()

// HTML 转义和反转义
function escapeHTML (str) {
    var escapeChars = {
        '<' : 'lt',
        '>' : 'gt',
        '"' : 'quot',
        '&' : 'amp',
        '\'' : '#39'
    };
    return str.replace(new RegExp('['+Object.keys(escapeChars).join('')+']','g'),function(match){
        return '&' + escapeChars[match] + ';';
    })
}

function unescapeHTML (str) {
    var htmlEntities = {
        nbsp : ' ',
        lt : '<',
        gt : '>',
        quot : '"',
        amp : '&',
        apos : '\''
    };
    return str.replace(/\&([^;]+);/g, function(match, key){
        if (key in htmlEntities) {
            return htmlEntities[key]
        }
        return match
    })
}

// 匹配成对标签
/<([^>]+)>[\d\D]*<\/\1>/g

// 身份证
/^(\d{15}|\d{17}[\dxX])$/g

// ipv4
/^((0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])\.){3}(0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])$/g

// 字符串保存数据
var utils = {};
"Boolean|Number|String|Function|Array|Date|RegExp|Object|Error".split("|").forEach(function (item) {
   utils["is" + item] = function (obj) {
   return {}.toString.call(obj) == "[object " + item + "]";
   };
});
console.log( utils.isArray([1, 2, 3]) );
// => true

// queryString
function compress (source) {
   var keys = {};
   source.replace(/([^=&]+)=([^&]*)/g, function (full, key, value) {
   keys[key] = (keys[key] ? keys[key] + ',' : '') + value;
   });
   var result = [];
   for (var key in keys) {
   result.push(key + '=' + keys[key]);
   }
   return result.join('&');
}
console.log( compress("a=1&b=2&a=3&b=4") );
// => "a=1,3&b=2,4"

// 匹配所有汉字
/[\u4e00-\u9fa5]/  
/\p{Unified_Ideograph}/u
```

<script>
    export default {
        mounted(){
           
        }
    }
</script>