(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{296:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",[t._v("volatile 关键字的 2 个语义")]),t._v(" "),s("ul",[s("li",[t._v("内存可见性")]),t._v(" "),s("li",[t._v("阻止重排序")])]),t._v(" "),s("p",[t._v("volatile 不能保证原子性")])]),t._v(" "),s("p",[s("strong",[t._v("volatile 关键字的2层含义:")])]),t._v(" "),s("p",[t._v("用volatile修饰的变量, 线程在每次使用变量的时候, 都会读取变量修改后的最新的值.\n作为指令关键字, 确保本条指令不会因编译器的优化而省略, 且要求每次直接读值.")]),t._v(" "),s("h2",{attrs:{id:"可见性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可见性","aria-hidden":"true"}},[t._v("#")]),t._v(" 可见性")]),t._v(" "),s("p",[t._v("可见性是指 当一个线程修改了一个共享变量,其他线程能够立刻得知这个修改.\n这里有必要了解一下 Java 的内存模型")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://qiniu.dong4j.info/006y8lVagw1fbd6lm7oc0j30br0ahmxc.jpg",alt:""}})]),t._v(" "),s("p",[t._v("被 volatile 修饰的变量,当线程需要使用这个变量时,回去主内存中读取,然后加载到自己的工作线程中,\n工作线程中的变量只是主存变量的一个拷贝,当使用完这个变量后,会刷新会主存中.")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://qiniu.dong4j.info/006y8lVagw1fbd6ur604jj30mq0hcaac.jpg",alt:""}})]),t._v(" "),s("p",[t._v("当数据中主内存复制到工作内存存储时,必须出现两个动作:")]),t._v(" "),s("ol",[s("li",[t._v("由主内存执行的 read 操作")]),t._v(" "),s("li",[t._v("有工作内存执行相应的 load 操作")])]),t._v(" "),s("p",[t._v("当数据从工作内存拷贝到主内存时,也会有两个操作:")]),t._v(" "),s("ol",[s("li",[t._v("用工作内存执行的 store 操作")]),t._v(" "),s("li",[t._v("用主内存执行相应的 write 操作")])]),t._v(" "),s("p",[t._v("volatile的特殊规则就是read、load、use必须连续出现. assign、store、write动作必须连续出现. 所以使用volatile变量能够保证必须先从主内存刷新最新的值, 每次修改后必须立即同步回主内存当中.")]),t._v(" "),s("p",[t._v("所以 colatile 的可见性很适合用来控制并发:")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VolatileDemo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n\t\tflag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VolatileDemo")]),t._v(" m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VolatileDemo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("               \n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n\t\t\t\t\t\t  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aaa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("p",[t._v("当调用 shutdown() 时,能保证所有线程立刻停止.")]),t._v(" "),s("h2",{attrs:{id:"volatile的禁止指令重排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile的禁止指令重排序","aria-hidden":"true"}},[t._v("#")]),t._v(" volatile的禁止指令重排序")]),t._v(" "),s("p",[t._v("指令重排是 编译器和 cup 在不影响执行结果的情况下,进行的一种优化策略.")]),t._v(" "),s("p",[t._v("在Java中普遍的变量仅仅会保证在该方法的执行过程中所有依赖的赋值结果的地方都能获取到正确的结果, 而不能保证变量赋值操作的顺序与程序代码中的执行顺序一致. 因为在一个线程的方法执行过程中无法感知到这点, 这也就是Java内存模型中描述的所谓“线程内表现为串行的语义”.")]),t._v(" "),s("h3",{attrs:{id:"有序性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有序性","aria-hidden":"true"}},[t._v("#")]),t._v(" 有序性")]),t._v(" "),s("p",[t._v("计算机在执行代码时,不一定按照程序的顺序来执行.")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderExample")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n\t\ta "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t\tflag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("比如上述代码, 两个方法分别被两个线程调用.\n按照常理, 写线程应该先执行a=1, 再执行flag=true.\n当读线程进行读的时候, i=2；\n但是因为a=1和flag=true, 并没有逻辑上的关联.\n所以有可能执行的顺序颠倒, 有可能先执行flag=true, 再执行a=1.\n这时当flag=true时, 切换到读线程, 此时a=1还没有执行, 那么读线程将i=1.")]),t._v(" "),s("p",[s("strong",[t._v("指令重排可以使流水线更加顺畅")])]),t._v(" "),s("p",[t._v("当然指令重排的原则是不能破坏串行程序的语义, 例如a=1,b=a+1, 这种指令就不会重排了, 因为重排的串行结果和原先的不同.")]),t._v(" "),s("p",[t._v("在Java里面, 可以通过volatile关键字来保证一定的“有序性”. 另外可以通过synchronized和Lock来保证有序性, 很显然, synchronized和Lock保证每个时刻是有一个线程执行同步代码, 相当于是让线程顺序执行同步代码, 自然就保证了有序性.")]),t._v(" "),s("h3",{attrs:{id:"happen-before"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#happen-before","aria-hidden":"true"}},[t._v("#")]),t._v(" Happen-Before")]),t._v(" "),s("p",[t._v("Java内存模型具备一些先天的“有序性”, 即不需要通过任何手段就能够得到保证的有序性, 这个通常也称为 happen-before 原则. 如果两个操作的执行次序无法从happen-before原则推导出来, 那么它们就不能保证它们的有序性, 虚拟机可以随意地对它们进行重排序.")]),t._v(" "),s("ul",[s("li",[t._v("程序顺序原则: 一个线程内保证语义的串行性(写在前面的先发生,用来保证单线程结果的正确性)")]),t._v(" "),s("li",[t._v("volatile规则: volatile变量的写, 先发生于读, 这保证了volatile变量的可见性")]),t._v(" "),s("li",[t._v("锁规则: 解锁（unlock）必然发生在随后的加锁（lock）前")]),t._v(" "),s("li",[t._v("传递性: A先于B, B先于C, 那么A必然先于C")]),t._v(" "),s("li",[t._v("线程的start()方法先于它的每一个动作")]),t._v(" "),s("li",[t._v("线程的所有操作先于线程的终结（Thread.join()）")]),t._v(" "),s("li",[t._v("线程的中断（interrupt()）先于被中断线程的代码")]),t._v(" "),s("li",[t._v("对象的构造函数执行结束先于finalize()方法")])]),t._v(" "),s("p",[s("strong",[t._v("为什么 Happen-Before 原则不被指令重排影响?")]),t._v("\n例如你让一个volatile的integer自增（i++）, 其实要分成3步: 1）读取volatile变量值到local； 2）增加变量的值；3）把local的值写回, 让其它的线程可见. 这3步的jvm指令为:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mov   \n0xc(%r10),%r8d\n ; Load\ninc   \n %r8d           ; Increment\nmov   \n %r8d,0xc(%r10)\n ; Store\nlock\n addl $0x0,(%rsp)\n ; StoreLoad Barrier\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("StoreLoad Barrier 就是内存屏障")]),t._v(" "),s("p",[t._v("内存屏障（memory barrier）是一个CPU指令. 基本上, 它是这样一条指令:")]),t._v(" "),s("ol",[s("li",[t._v("确保一些特定操作执行的顺序；")]),t._v(" "),s("li",[t._v("影响一些数据的可见性(可能是某些指令执行后的结果).")])]),t._v(" "),s("p",[t._v("编译器和CPU可以在保证输出结果一样的情况下对指令重排序, 使性能得到优化.\n插入一个内存屏障, 相当于告诉CPU和编译器先于这个命令的必须先执行, 后于这个命令的必须后执行.")]),t._v(" "),s("p",[t._v("内存屏障另一个作用是强制更新一次不同CPU的缓存.")]),t._v(" "),s("p",[t._v("例如, 一个写屏障会把这个屏障前写入的数据刷新到缓存, 这样任何试图读取该数据的线程将得到最新值, 而不用考虑到底是被哪个cpu核心或者哪颗CPU执行的.")]),t._v(" "),s("p",[s("strong",[t._v("内存屏障和 volatile 的关系")])]),t._v(" "),s("p",[t._v("上面的虚拟机指令里面有提到, 如果你的字段是volatile, Java内存模型将在写操作后插入一个"),s("strong",[t._v("写屏障指令")]),t._v(", 在读操作前插入一个"),s("strong",[t._v("读屏障指令")]),t._v(".\n这意味着如果你对一个volatile字段进行写操作, 你必须知道:")]),t._v(" "),s("ol",[s("li",[t._v("一旦你完成写入, 任何访问这个字段的线程将会得到最新的值.")]),t._v(" "),s("li",[t._v("在你写入前, 会保证所有之前发生的事已经发生, 并且任何更新过的数据值也是可见的, 因为内存屏障会把之前的写入值都刷新到缓存.")])]),t._v(" "),s("p",[t._v("明白了内存屏障这个CPU指令, 回到前面的JVM指令: 从load 到 use 到 assign 到 store到内存屏障, 一共4步, 其中最后一步jvm让这个最新的变量的值在所有线程可见, 也就是最后一步让所有的CPU内核都获得了最新的值, 但中间的几步（从Load到Store）是不安全的, 中间如果其他的CPU修改了值将会丢失.")]),t._v(" "),s("h3",{attrs:{id:"volatile-禁止指令重排的两层含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile-禁止指令重排的两层含义","aria-hidden":"true"}},[t._v("#")]),t._v(" volatile 禁止指令重排的两层含义")]),t._v(" "),s("ol",[s("li",[t._v("当程序执行到 volatile 变量的读操作或者写操作时,在其前面的操作肯定已经全部进行,且结果对后面的操作可见;且后面的操作还没有进行;")]),t._v(" "),s("li",[t._v("在进行指令优化时,不能将对 volatile 变量的访问语句放在气候执行,也不能把 volatile 变量后面的语句放在其前面执行.")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//x、y为非volatile变量  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//flag为volatile变量  ")]),t._v("\nx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//语句1  ")]),t._v("\ny "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//语句2  ")]),t._v("\nflag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//语句3  ")]),t._v("\nx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//语句4  ")]),t._v("\ny "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//语句5 ")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("由于flag变量为volatile变量, 那么在进行指令重排序的过程的时候, 不会将语句3放到语句1、语句2前面, 也不会讲语句3放到语句4、语句5后面. 但是要注意语句1和语句2的顺序、语句4和语句5的顺序是不作任何保证的.")]),t._v(" "),s("p",[t._v("并且volatile关键字能保证, 执行到语句3时, 语句1和语句2必定是执行完毕了的, 且语句1和语句2的执行结果对语句3、语句4、语句5是可见的")]),t._v(" "),s("h2",{attrs:{id:"vloatile-的并发问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vloatile-的并发问题","aria-hidden":"true"}},[t._v("#")]),t._v(" vloatile 的并发问题")]),t._v(" "),s("p",[t._v("volatile 能保证可见性和禁止指令重排,但是却不能保证原子性,\n其实通过上面的分析也能得出这个结论.")]),t._v(" "),s("p",[t._v("比如 i++操作:")]),t._v(" "),s("ol",[s("li",[t._v("读取 volatile 变量值到当前线程的工作内存中")]),t._v(" "),s("li",[t._v("进行 i+1 计算")]),t._v(" "),s("li",[t._v("将工作内存中的值写会到主内存,让其他线程可见")])]),t._v(" "),s("p",[t._v("现在有2个线程同时对 volatile 变量进行操作,\n当第一个变量从主内存中读取了变量,但是还未进行 i+1 操作,\n此时第二个线程也从主存中读取了这个变量,但是和线程一读取的值一样,因为线程一还未将计算过的值刷新到主内存中,此时2个线程都对变量进行+1操作,然后刷新到主内存,此时,主内存中的值只是做了一次+1操作,而不是2次.")]),t._v(" "),s("p",[t._v("**某个线程将一个共享值优化到了内存中, 而另一个线程将这个共享值优化到了缓存中, 当修改内存中值的时候, 缓存中的值是不知道这个修改的. **")])])},[],!1,null,null,null);a.default=e.exports}}]);