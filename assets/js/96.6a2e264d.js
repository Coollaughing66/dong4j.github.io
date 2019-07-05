(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{351:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",[t._v("插件需求分析")])]),t._v(" "),s("p",[t._v("先来梳理下需求:")]),t._v(" "),s("p",[t._v("开发一款插件将 "),s("code",[t._v("Markdown")]),t._v(" 文档中的图片上传到 "),s("code",[t._v("Aliyun OSS")]),t._v(".")]),t._v(" "),s("p",[t._v("具体需求入下:")]),t._v(" "),s("h2",{attrs:{id:"上传需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传需求","aria-hidden":"true"}},[t._v("#")]),t._v(" 上传需求")]),t._v(" "),s("p",[t._v("解析所有 "),s("code",[t._v("![]()")]),t._v(" 图片标签:")]),t._v(" "),s("ol",[s("li",[t._v("如果图片在本地, 则上传到 Aliyun OSS;")]),t._v(" "),s("li",[t._v("如果以 "),s("code",[t._v("http://")]),t._v(" 或者 "),s("code",[t._v("https://")]),t._v(" 开头, 则根据设置判断是否上传(迁移图片到 Aliyun OSS)")])]),t._v(" "),s("p",[t._v("上传完成后:")]),t._v(" "),s("ol",[s("li",[t._v("根据设置将 "),s("code",[t._v("![](xxx)")]),t._v(" 标签转换成 "),s("code",[t._v('<a data-fancybox title="" href="http://xxxx" >![](xxx)</a>')]),t._v(" 标签")])]),t._v(" "),s("p",[t._v("这里有 2 个设置:")]),t._v(" "),s("ol",[s("li",[t._v("是否转换为 "),s("code",[t._v("<a>")]),t._v(" 标签:\n"),s("ol",[s("li",[t._v("如果开启, 在判断是否显示大图(这个主要针对 vuepress 构建的博客)")])])])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-fancybox")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://xxxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("![](http://xxxx)"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("且要修改 "),s("code",[t._v("config.js")]),t._v(" 文件, 添加如下:")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 让 Vuepress 支持图片放大功能")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" src"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" src"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stylesheet'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("ol",[s("li",[t._v("如果不开启, 则只转为普通的 "),s("code",[t._v("<a>")]),t._v(" 标签, 这样点击图片后, 能新开标签查看大图;")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://xxxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("![](http://xxxx)"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"图片压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片压缩","aria-hidden":"true"}},[t._v("#")]),t._v(" 图片压缩")]),t._v(" "),s("p",[t._v("根据设置判断上传图片是否压缩, 给出百分比.")]),t._v(" "),s("p",[t._v("获取图片时是否压缩, 这个需要在 Aliyun OSS 端设置, 设置好后填入对应的  "),s("code",[t._v("styleName")])]),t._v(" "),s("h2",{attrs:{id:"直接提供图片压缩的功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直接提供图片压缩的功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 直接提供图片压缩的功能")]),t._v(" "),s("p",[t._v("作用范围:")]),t._v(" "),s("ol",[s("li",[t._v("当前选中的图片;")]),t._v(" "),s("li",[t._v("选中的目录中的所有图片;")]),t._v(" "),s("li",[t._v("整个项目中的图片;")])]),t._v(" "),s("h2",{attrs:{id:"备份图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份图片","aria-hidden":"true"}},[t._v("#")]),t._v(" 备份图片")]),t._v(" "),s("p",[t._v("图片上传完成后, 将已上传的图片按照目录备份到 "),s("strong",[t._v("当前项目的主目录")]),t._v(" 中")]),t._v(" "),s("h2",{attrs:{id:"插件作用范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件作用范围","aria-hidden":"true"}},[t._v("#")]),t._v(" 插件作用范围")]),t._v(" "),s("p",[t._v("只会解析 "),s("code",[t._v("Markdown")]),t._v(" 文档.\n如果是单个文件, 只有是 "),s("code",[t._v("Markdown")]),t._v(" 文档才会显示 "),s("code",[t._v("upload to Aliyun OSS")]),t._v(", 其他时候不可用;")]),t._v(" "),s("p",[s("strong",[t._v("注意:")])]),t._v(" "),s("p",[t._v("文件树可以多选文件")]),t._v(" "),s("h3",{attrs:{id:"当前选中-正在编辑的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当前选中-正在编辑的文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 当前选中/正在编辑的文件")]),t._v(" "),s("ol",[s("li",[t._v("在编辑视图中直接右键 --\x3e "),s("code",[t._v("upload to Aliyun OSS")]),t._v(" ;")]),t._v(" "),s("li",[t._v("在 Tools 菜单中 --\x3e "),s("code",[t._v("upload to Aliyun OSS")]),t._v(" ;")]),t._v(" "),s("li",[t._v("在文件树选中文件后右键 --\x3e "),s("code",[t._v("upload to Aliyun OSS")]),t._v(" ;")])]),t._v(" "),s("h3",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),s("ol",[s("li",[t._v("在文件树目录上点击右键 --\x3e "),s("code",[t._v("upload to Aliyun OSS")]),t._v(" ;")])]),t._v(" "),s("h3",{attrs:{id:"项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目")]),t._v(" "),s("ol",[s("li",[t._v("在整个项目上点击右键 --\x3e "),s("code",[t._v("upload to Aliyun OSS")]),t._v(" ;")])]),t._v(" "),s("h2",{attrs:{id:"提示和日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提示和日志","aria-hidden":"true"}},[t._v("#")]),t._v(" 提示和日志")]),t._v(" "),s("p",[t._v("每一步给出日志")]),t._v(" "),s("ol",[s("li",[t._v("解析标签时;")]),t._v(" "),s("li",[t._v("拿到图片路径;")]),t._v(" "),s("li",[t._v("上传;")]),t._v(" "),s("li",[t._v("上传成功后备份图片, 不成功不备份;")]),t._v(" "),s("li",[t._v("替换标签;")])]),t._v(" "),s("p",[t._v("上传过程中给出进度条")]),t._v(" "),s("p",[t._v("所有操作完成后给出提示!")]),t._v(" "),s("h2",{attrs:{id:"设置页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置页","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置页")]),t._v(" "),s("ol",[s("li",[t._v("Aliyun OSS 设置;")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://qiniu.dong4j.info/2019-07-03-15523789570053.jpg",alt:"-w415"}}),t._v(" "),s("img",{attrs:{src:"http://qiniu.dong4j.info/2019-07-03-15523790605019.jpg",alt:"-w688"}})]),t._v(" "),s("ol",[s("li",[t._v("标签替换选项设置;")]),t._v(" "),s("li",[t._v("图片压缩设置 (上传前后上传后);")]),t._v(" "),s("li",[t._v("图床迁移设置;")])]),t._v(" "),s("h2",{attrs:{id:"aliyun-oss-控制台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aliyun-oss-控制台","aria-hidden":"true"}},[t._v("#")]),t._v(" Aliyun OSS 控制台")]),t._v(" "),s("ol",[s("li",[t._v("当前存储总量")]),t._v(" "),s("li",[t._v("本月 Put 类请求")]),t._v(" "),s("li",[t._v("本月 Get 类请求")]),t._v(" "),s("li",[t._v("SLA")])]),t._v(" "),s("h3",{attrs:{id:"刷新次数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#刷新次数","aria-hidden":"true"}},[t._v("#")]),t._v(" 刷新次数")]),t._v(" "),s("ol",[s("li",[t._v("5分钟刷新一次;")]),t._v(" "),s("li",[t._v("打开时刷新一次;")]),t._v(" "),s("li",[t._v("刷新按钮;")]),t._v(" "),s("li",[t._v("关闭后停止刷新任务;")])])])},[],!1,null,null,null);a.default=e.exports}}]);