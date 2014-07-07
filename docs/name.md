## 文件名规范  

说明：***[*](###)*** 为扩展阅读  
注意：以下所有文件编码均使用 utf-8（无BOM）***[*](http://zhidao.baidu.com/question/59267263.html)***  

### 1、通用  
+ 文件名建议英文，特殊情况可用拼音，命名要有意义  
+ 文件名不要过长，尽量控制在 15 个字符之内 
+ 文件名注意大小写，建议全部小写，双拼词可用 `-` 中划线来连接。如：news-list.html

### 2、页面  
+ 前端页面后缀统一小写 `.html`  

### 3、样式  
+ 通用样式（[base.css](https://github.com/mittya/Adee-f2e/blob/master/base.css)）：基础样式及通用样式  
+ 首页样式（home.css）：首页样式  
+ 内页样式（page.css）：由于内页一般多数重复，这个存放内页通用样式  
+ 独立样式（name.css）：单独业务或复杂模块可以使用业务名或模块名命名。如：登录为 login.css；汽车专栏为 car.css  

### 4、脚本  
+ 通用脚本（base.js）：全局通用脚本  
+ 首页脚本（home.js）：首页脚本  
+ 内页脚本（page.js）：同“内页样式”  
+ 独立脚本（name.js）：同“独立样式”  

### 5、图片 
+ 图片名称需有意义。如：广告图可为 banner.jpg, banner-1.jpg  
+ 如有合并图可根据情况酌情命名。如：sprite-home.png, sprite-page.jpg  