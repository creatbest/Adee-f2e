## 样式规范（CSS）


### 1、CSS 文件  
+ 文件需使用 utf-8 编码（无 BOM）  
+ 样式文件必须使用 link 方式链入，不允许使用 @import  
+ 如样式有必要在页面中书写，应写在 `<head>` 标签中的 `<style>` 里



### 2、样式书写
+ 具体书写规范参考 [base.css](https://github.com/mittya/Adee-f2e/blob/master/base.css) 文件，空格需注意，换行缩进推荐两个空格
+ 除 Reset 外其它通用样式建议这样写  


        .ui-header,  
        .ui-footer { margin: 0 auto; width: 974px; }  


+ 颜色值统一小写，实际代码不要出现 `red / blue` 等词，有些词可缩写，可以采用 [RGBA](http://baike.baidu.com/view/3731103.htm) 方式书写颜色值

        body { color:rgb(255, 255, 255); background:#fff; }

+ 像素为 0 值的可省略 `px`



### 3、命名
+ 不要以数字为开头来命名
+ 命名不能使用基础样式中已有的前缀（如：.fn- / .ui-）每个人需自定义个人前缀，防止命名冲突，建议两个字符（如：.ya-）
+ 名称尽量有意义，不要过长（如：.navigation 可缩写为 .nav）
+ 要小写，多拼命名用 - 分开，先写功能后写位置（如：.menuleft 建议写成 .menu-left）
+ 谨慎使用关键词来命名（如：select, active, first, last, left, right, more ...）如果命名可通用则要限定在该命名所处上下文环境中。例：有一标签Class为.header的子集中有一通用标签名为 .more，应该这样定义样式 .header .more {} 除特殊情况禁止单独设置成全局样式，以免影响其它样式
+ 样式定义尽量少用 id，如用则需保持唯一性



### 4、注释
+ 组件注释

> 代码示例：

    /*
     * Overview: Reset & Function & Global （组件功能介绍）
     * Site: http://f2e.adee.cn （网站）
     * Author: mittya （作者）
     */


+ 每一块或每一个功能区样式都要使用 `/* 注释 */` 来注释，建议用英文，注意空格！样式内注释要在花括号之内


> 代码示例：

    /* clear */
    .fn-clearfix:after { display: block; font-size: 0; content: '\0020'; clear: both; height: 0; }
    .fn-clearfix { zoom: 1; /*for IE6 IE7*/ }
    .fn-clear { visibility: hidden; clear: both; }
    
+ 大模块可使用 `/** 注释 **/` 来注释

> 代码示例：

    /** Reset **/
    a, blockquote, button, body, ... { margin: 0; padding: 0; }
    ...
    /** golbal **/
    .ui-header,
    .ui-footer { margin: 0 auto; width: 974px; }



### 5、CSS Hack

样式 hack：

    .all-IE { property: value\9; }  
    :root .IE-9 { property: value\0/; }  
    .gte-IE-8 { property: value\0; }  
    .lte-IE-7 { *property: value; }  
    .IE-7 { +property: value; }  
    .IE-6 { _property: value; }  
    .not-IE { property//: value; }  
    .not-IE6 { property//: value; }

    @-moz-document url-prefix() { .firefox { property: value; } }
    @media all and (-webkit-min-device-pixel-ratio:0) { .webkit { property: value; } }
    @media all and (-webkit-min-device-pixel-ratio:10000),not all and (-webkit-min-device-pixel-ratio:0) { .opera { property: value; } }
    @media screen and (max-device-width: 480px) { .iphone-or-mobile-s-webkit { property: value; } }


页面 hack：

    <!--[if lt IE 7]> <html class="no-js ie ie6 lte9 lte8 lte7"> <![endif]-->  
    <!--[if IE 7]> <html class="no-js ie ie7 lte9 lte8 lte7"> <![endif]-->
    <!--[if IE 8]> <html class="no-js ie ie8 lte9 lte8"> <![endif]-->
    <!--[if IE 9]> <html class="no-js ie ie9 lte9"> <![endif]-->
    <!--[if gt IE 9]> <html class="no-js"> <![endif]-->
    <!--[if !IE]> <!--> <html> <!--<![endif]-->


说明：

    lte：就是Less than or equal to的简写，也就是小于或等于的意思。  
    lt ：就是Less than的简写，也就是小于的意思。  
    gte：就是Greater than or equal to的简写，也就是大于或等于的意思。  
    gt ：就是Greater than的简写，也就是大于的意思。  
    ! ：就是不等于的意思，跟javascript里的不等于判断符相同



### 6、CSS 写法的权重级别

important > 内联 > ID > 类 > 标签 | 伪类 | 属性选择 > 伪对象 > 继承 > 通配符

    继承的样式          0000
    内联的样式          1000
    子选择符            0000
    通用选择符          0000
    伪类选择符          0010
    属性选择符          0010
    一般选择符          0001
    class              0010
    #id                0100
    内联样式的(style)   0100理论是和 #id 是相同的，但它会高于 #id
    !important         1000



### 7、CSS 字体对照表

[点击查看](https://github.com/mittya/Adee-f2e/blob/master/docs/font.md)