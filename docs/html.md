## 页面规范（HTML）

说明：[*](###) 为扩展阅读

### 基础

+ 页面规范使用 `<!DOCTYPE html>` [*](http://w3school.com.cn/html5/tag_doctype.asp)
+ 统一编码 `<meta charset="UTF-8">`
+ 标题 title，首页写法 `网站全名`； 二级页面写法 `栏目名称 - 网站名称`，注意有空格；特殊三级页写法，例如新闻详细页，可直接写新闻标题
+ 描述 description 和 关键词 keywords，根据具体内容填写，有助于SEO [*](http://baike.baidu.com/view/1047.htm)
+ 格式化你的页面代码，以方便它人阅读维护
+ 详细模板参考 [index.html](https://github.com/mittya/Adee-f2e/blob/master/template/index.html)、[index-html5.html](https://github.com/mittya/Adee-f2e/blob/master/template/index-html5.html)、[index-all.html](https://github.com/mittya/Adee-f2e/blob/master/template/index-all.html)


### 书写

+ 所有标签、属性、值均采用小写，值需用双引号引起来。如：`<a href="#" target="_blank"></a>`
+ 清晰树形结构，**统一缩进格式**（两个或四个空格）。
+ 适当空行来保持结构清晰


### 注释

+ 模块需添加注释以便代码阅读，结尾注释即可，采用统一规范：标准注释 `<!-- -->` 加上一个斜杠（代表结束），加上模块名。类似 `nav`、`header`、`footer` 等语义化较强的标签可酌情略去注释  

		<div class="logo">
			<h1>Logo</h1>
		</div>
		<!--/ .logo -->

	如果是 id，则为 `<!--/ #logo -->` 注意空格及斜杠位置		

+ 特殊模块需另添加说明

		<ul class="list-news">
			<li><a href="#">list</a></li>
			<li><a href="#">list</a></li>
			<li><a href="#">list</a></li>
		</ul>
		<!--/ .list-news [今日新闻] -->

+ 代码注释（临时停用或备用代码）：单行注释和多行注释格式，注意空格及换行

		<!-- <h1>Logo</h1> -->

		<!--
		<div class="logo">
			<h1>Logo</h1>
		</div>
		-->

+ 写结构清晰代码，起易理解名称，简化注释


### 延伸

+ 扩展阅读：[这样去写你的 HTML](http://sofish.de/1688)
