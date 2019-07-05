(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{286:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",[t._v("总结 Servlet 中的几种方法的区别")])]),t._v(" "),a("h2",{attrs:{id:"sendredirect-方法和forward-方法的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendredirect-方法和forward-方法的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" sendRedirect() 方法和forward() 方法的区别")]),t._v(" "),a("h3",{attrs:{id:"sendredirect-方法原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendredirect-方法原理","aria-hidden":"true"}},[t._v("#")]),t._v(" sendRedirect() 方法原理")]),t._v(" "),a("ol",[a("li",[t._v("客户端发送请求, Servlet1做出处理.")]),t._v(" "),a("li",[t._v("Servlet1调用sendReadirect()方法, 将客户端的请求重新定位到Servlet2.")]),t._v(" "),a("li",[t._v("客户端浏览器访问Servlet2.")]),t._v(" "),a("li",[t._v("Servlet2对客户端浏览器做出响应.")])]),t._v(" "),a("h3",{attrs:{id:"forward-方法原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forward-方法原理","aria-hidden":"true"}},[t._v("#")]),t._v(" forward() 方法原理")]),t._v(" "),a("ol",[a("li",[t._v("客户端发送请求, Servlet1做出处理.")]),t._v(" "),a("li",[t._v("Servlet1调用forward()方法, 将请求转发给Servlet2来处理请求, 为客户端服务.")]),t._v(" "),a("li",[t._v("Servlet2对客户端浏览器做出响应.")])]),t._v(" "),a("h4",{attrs:{id:"区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),a("ol",[a("li",[t._v("定位与转发\n"),a("ul",[a("li",[t._v("sendRedirect(): 重新定位到另外一个资源来处理请求, URL会重新定位, 让客户端重新访问另外一个资源.")]),t._v(" "),a("li",[t._v("forward(): 转发到另外一个资源来处理请求. URL不会变化. 隐藏了处理对象的变化.")])])]),t._v(" "),a("li",[t._v("处理请求的资源的范围\nsendReadirect(): 可以跨WEB应用程序和服务器重新定位资源来处理请求.\nforward(): 只能在应用程序内部转发.")])]),t._v(" "),a("h2",{attrs:{id:"encodeurl-和-encoderedirecturl-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encodeurl-和-encoderedirecturl-的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" encodeURL() 和 encodeRedirectURL() 的区别")]),t._v(" "),a("p",[t._v("当用URL重写方式来管理Session的时候, 通过以上两个方法把session ID写到URL中.\n不同点是: 两个方法确定是否需要包含session ID的逻辑不同.\n在调用HttpServletResponse.sendRedirect前, 应该先调用encodeRedirectURL()方法, 否则可能会丢失Sesssion信息.")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("java.lang.String encodeRedirectURL(java.lang.String url)")]),t._v("\n对sendRedirect方法使用的指定URL进行编码. 如果不需要编码, 就直接返回这个URL.  之所以提供这个附加的编码方法, 是因为在redirect的情况下, 决定是否对URL进行编码 的规则和一般情况有所不同. 所给的URL必须是一个绝对URL. 相对URL不能被接收, 会抛 出一个IllegalArgumentException. 所有提供给sendRedirect方法的URL都应通过 这个方法运行, 这样才能确保会话跟踪能够在所有浏览器中正常运行.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("java.lang.String encodeURL(java.lang.String url)")]),t._v("\n对包含session ID的URL进行编码. 如果不需要编码, 就直接返回这个URL. Servlet引 擎必须提供URL编码方法, 因为在有些情况下, 我们将不得不重写URL, 例如, 在响应对应的 请求中包含一个有效的session, 但是这个session不能被非URL的（例如cookie）的手 段来维持. 所有提供给Servlet的URL都应通过这个方法运行, 这样才能确保会话跟踪能够 在所有浏览器中正常运行.")])])]),t._v(" "),a("h2",{attrs:{id:"seattribute-与s-etparameter-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seattribute-与s-etparameter-的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" seAttribute 与s etParameter 的区别")]),t._v(" "),a("p",[t._v("getAttribute表示从request范围取得设置的属性, 必须要先setAttribute设置属性, 才能通过getAttribute来取得, 设置与取得的为Object对象类型\ngetParameter表示接收参数, 参数为页面提交的参数, 包括: 表单提交的参数、URL重写（就是xxx?id=1中的id）传的参数等, 因此这个并没有设置参数的方法（没有setParameter）, 而且接收参数返回的不是Object, 而是String类型")]),t._v(" "),a("p",[t._v("HttpServletRequest类既有getAttribute()方法, 也由getParameter()方法, 这两个方法有以下区别:")]),t._v(" "),a("ul",[a("li",[t._v("HttpServletRequest 类有 setAttribute() 方法, 而没有 setParameter() 方法")]),t._v(" "),a("li",[t._v("当两个Web组件之间为链接关系时, 被链接的组件通过 getParameter() 方法来获得请求参数, 例如假定 welcome.jsp和authenticate.jsp 之间为链接关系, welcome.jsp 中有以下代码:")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("authenticate.jsp?username=weiqin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("authenticate.jsp "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("或者:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("authenticate.jsp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n请输入用户姓名: "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("提交"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v('在authenticate.jsp中通过request.getParameter("username")方法来获得请求参数username:\n'),a("code",[t._v('<% String username=request.getParameter("username"); %>')])]),t._v(" "),a("ul",[a("li",[t._v("当两个Web组件之间为转发关系时, 转发目标组件通过getAttribute()方法来和转发源组件共享request范围内的数据. 假定 authenticate.jsp和hello.jsp之间为转发关系. authenticate.jsp希望向hello.jsp传递当前的用户名字, 如何传递这一数据呢？先在authenticate.jsp中调用setAttribute()方法:")])]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v('<%\nString username=request.getParameter("username");\nrequest.setAttribute("username", username);\n%>\n'),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("jsp:")]),t._v("forward")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("page")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hello.jsp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("在hello.jsp中通过getAttribute()方法获得用户名字:")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v('<% String username=(String)request.getAttribute("username"); %>\nHello: <%=username %>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("从更深的层次考虑")]),t._v(" "),a("ul",[a("li",[t._v("request.getParameter() 方法传递的数据, 会从 Web 客户端传到 Web 服务器端, 代表 HTTP 请求数据. request.getParameter() 方法返回 String 类型的数据.")]),t._v(" "),a("li",[t._v("request.setAttribute() 和 getAttribute() 方法传递的数据只会存在于 Web 容器内部, 在具有转发关系的 Web 组件之间共享. 这两个方法能够设置 Object 类型的共享数据.")]),t._v(" "),a("li",[t._v("request.getParameter() 取得是通过容器的实现来取得通过类似 post, get 等方式传入的数据,  request.setAttribute() 和 getAttribute() 只是在 web 容器内部流转, 仅仅是请求处理阶段, 这个的确是正解.")]),t._v(" "),a("li",[t._v("getAttribute() 是返回对象, getParameter() 返回字符串")]),t._v(" "),a("li",[t._v("request.getAttribute() 方法返回 request 范围内存在的对象, 而 request.getParameter() 方法是获取 http 提交过来的数据.")])])])},[],!1,null,null,null);e.default=r.exports}}]);