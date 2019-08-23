# JS Collection

## articles
- [JavaScript 中常见设计模式整理](https://juejin.im/post/5afe6430518825428630bc4d?utm_source=gold_browser_extension)
- [如何阅读大型前端开源项目的源码](https://juejin.im/post/5afe3735518825426539afce?utm_source=gold_browser_extension)

## 生成随机 UID
```js
const genUid = () => {
  var length = 20;
  var soupLength = genUid.soup_.length;
  var id = [];
  for (var i = 0; i < length; i++) {
    id[i] = genUid.soup_.charAt(Math.random() * soupLength);
  }
  return id.join("");
};
genUid.soup_ =
  "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
genUid();
```
<el-button type="primary" @click="doMethod('genUid')">Click me</el-button>
## dateFormatter
```js
const dateFormatter = (formatter, date) => {
	date = (date ? new Date(date) : new Date)
	const Y = date.getFullYear() + '',
          M = date.getMonth() + 1,
          D = date.getDate(),
          H = date.getHours(),
          m = date.getMinutes(),
          s = date.getSeconds()
    return formatter.replace(/YYYY|yyyy/g, Y)
        			.replace(/YY|yy/g, Y.substr(2, 2))
        			.replace(/MM/g, (M < 10 ? '0' : '') + M)
        			.replace(/DD/g, (D < 10 ? '0' : '') + D)
        			.replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
        			.replace(/mm/g, (m < 10 ? '0' : '') + m)
        			.replace(/ss/g, (s < 10 ? '0' : '') + s)
}
```

### 三目运算简写 (stage-3)
(https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)[https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining]
```js
a?.b                          // undefined if `a` is null/undefined, `a.b` otherwise.
a == null ? undefined : a.b

a?.[x]                        // undefined if `a` is null/undefined, `a[x]` otherwise.
a == null ? undefined : a[x]

a?.b()                        // undefined if `a` is null/undefined
a == null ? undefined : a.b() // throws a TypeError if `a.b` is not a function
                              // otherwise, evaluates to `a.b()`

a?.()                        // undefined if `a` is null/undefined
a == null ? undefined : a()  // throws a TypeError if `a` is neither null/undefined, nor a function
                             // invokes the function `a` otherwise
```

## 计算promise时间
```js
(async ()=>{
  console.time('toast');
	await new Promise(resolve=>{
		resolve(111)
	})
  console.timeEnd('toast');
})()
```

## 
<script>
export default {
	data(){
		return {
			soup_:'!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
		}
	},
  mounted () {
    
  },
  methods:{
		 doMethod(methodName,args){
			 this.$alert(this[methodName].apply(this),methodName)
		 },
     genUid(){
        var length = 20
        var soupLength = this.soup_.length
        var id = []
        for (var i = 0; i < length; i++) {
            id[i] = this.soup_.charAt(Math.random() * soupLength)
        }
        return id.join('')
    } 
  }
}
</script>
