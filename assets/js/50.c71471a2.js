(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{305:function(t,e,a){"use strict";a.r(e);var v=a(0),l=Object(v.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",[t._v("介绍 Java 内存模型 3 大核心")]),t._v(" "),a("ul",[a("li",[t._v("原子性")]),t._v(" "),a("li",[t._v("可见性")]),t._v(" "),a("li",[t._v("顺序性")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000000435392",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文出处 https://segmentfault.com/a/1190000000435392"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"并发编程模型的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发编程模型的分类","aria-hidden":"true"}},[t._v("#")]),t._v(" 并发编程模型的分类")]),t._v(" "),a("p",[t._v("在并发编程中, 我们需要处理两个关键问题: 线程之间如何通信及线程之间如何同步（这里的线程是指并发执行的活动实体）. 通信是指线程之间以何种机制来交换信息. 在命令式编程中, 线程之间的通信机制有两种: 共享内存和消息传递.")]),t._v(" "),a("p",[t._v("在共享内存的并发模型里, 线程之间共享程序的公共状态, 线程之间通过写-读内存中的公共状态来隐式进行通信. 在消息传递的并发模型里, 线程之间没有公共状态, 线程之间必须通过明确的发送消息来显式进行通信.")]),t._v(" "),a("p",[t._v("同步是指程序用于控制不同线程之间操作发生相对顺序的机制. 在共享内存并发模型里, 同步是显式进行的. 程序员必须显式指定某个方法或某段代码需要在线程之间互斥执行. 在消息传递的并发模型里, 由于消息的发送必须在消息的接收之前, 因此同步是隐式进行的.")]),t._v(" "),a("p",[t._v("Java的并发采用的是共享内存模型, Java线程之间的通信总是隐式进行, 整个通信过程对程序员完全透明. 如果编写多线程程序的Java程序员不理解隐式进行的线程之间通信的工作机制, 很可能会遇到各种奇怪的内存可见性问题.")]),t._v(" "),a("h2",{attrs:{id:"java-内存模型的抽象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-内存模型的抽象","aria-hidden":"true"}},[t._v("#")]),t._v(" Java 内存模型的抽象")]),t._v(" "),a("p",[t._v("在java中, 所有实例域、静态域和数组元素存储在堆内存中, 堆内存在线程之间共享（本文使用“共享变量”这个术语代指实例域, 静态域和数组元素）. 局部变量（Local variables）, 方法定义参数（java语言规范称之为formal method parameters）和异常处理器参数（exception handler parameters）不会在线程之间共享, 它们不会有内存可见性问题, 也不受内存模型的影响.")]),t._v(" "),a("p",[t._v("Java线程之间的通信由Java内存模型（本文简称为JMM）控制, JMM决定一个线程对共享变量的写入何时对另一个线程可见. 从抽象的角度来看, JMM定义了线程和主内存之间的抽象关系: 线程之间的共享变量存储在主内存（main memory）中, 每个线程都有一个私有的本地内存（local memory）, 本地内存中存储了该线程以读/写共享变量的副本. 本地内存是JMM的一个抽象概念, 并不真实存在. 它涵盖了缓存, 写缓冲区, 寄存器以及其他的硬件和编译器优化. Java内存模型的抽象示意图如下:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qiniu.dong4j.info/2019-07-02-bVbZp3..",alt:""}})]),t._v(" "),a("p",[t._v("从上图来看, 线程A与线程B之间如要通信的话, 必须要经历下面2个步骤:")]),t._v(" "),a("ol",[a("li",[t._v("首先, 线程A把本地内存A中更新过的共享变量刷新到主内存中去.")]),t._v(" "),a("li",[t._v("然后, 线程B到主内存中去读取线程A之前已更新过的共享变量.")])]),t._v(" "),a("p",[t._v("下面通过示意图来说明这两个步骤:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qiniu.dong4j.info/2019-07-02-bVbZp4..",alt:""}})]),t._v(" "),a("p",[t._v("如上图所示, 本地内存A和B有主内存中共享变量x的副本. 假设初始时, 这三个内存中的x值都为0. 线程A在执行时, 把更新后的x值（假设值为1）临时存放在自己的本地内存A中. 当线程A和线程B需要通信时, 线程A首先会把自己本地内存中修改后的x值刷新到主内存中, 此时主内存中的x值变为了1. 随后, 线程B到主内存中去读取线程A更新后的x值, 此时线程B的本地内存的x值也变为了1.")]),t._v(" "),a("p",[t._v("从整体来看, 这两个步骤实质上是线程A在向线程B发送消息, 而且这个通信过程必须要经过主内存. JMM通过控制主内存与每个线程的本地内存之间的交互, 来为java程序员提供内存可见性保证.")]),t._v(" "),a("h2",{attrs:{id:"重排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排序","aria-hidden":"true"}},[t._v("#")]),t._v(" 重排序")]),t._v(" "),a("p",[t._v("在执行程序时为了提高性能, 编译器和处理器常常会对指令做重排序. 重排序分三种类型:")]),t._v(" "),a("ol",[a("li",[t._v("编译器优化的重排序. 编译器在不改变单线程程序语义的前提下, 可以重新安排语句的执行顺序.")]),t._v(" "),a("li",[t._v("指令级并行的重排序. 现代处理器采用了指令级并行技术（Instruction-Level Parallelism,  ILP）来将多条指令重叠执行. 如果不存在数据依赖性, 处理器可以改变语句对应机器指令的执行顺序.")]),t._v(" "),a("li",[t._v("内存系统的重排序. 由于处理器使用缓存和读/写缓冲区, 这使得加载和存储操作看上去可能是在乱序执行.")])]),t._v(" "),a("p",[t._v("从java源代码到最终实际执行的指令序列, 会分别经历下面三种重排序:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qiniu.dong4j.info/2019-07-02-bVbZp9..",alt:""}})]),t._v(" "),a("p",[t._v("上述的1属于编译器重排序, 2和3属于处理器重排序. 这些重排序都可能会导致多线程程序出现内存可见性问题. 对于编译器, JMM的编译器重排序规则会禁止特定类型的编译器重排序（不是所有的编译器重排序都要禁止）. 对于处理器重排序, JMM的处理器重排序规则会要求java编译器在生成指令序列时, 插入特定类型的内存屏障（memory barriers, intel称之为memory fence）指令, 通过内存屏障指令来禁止特定类型的处理器重排序（不是所有的处理器重排序都要禁止）.")]),t._v(" "),a("p",[t._v("JMM属于语言级的内存模型, 它确保在不同的编译器和不同的处理器平台之上, 通过禁止特定类型的编译器重排序和处理器重排序, 为程序员提供一致的内存可见性保证.")]),t._v(" "),a("h2",{attrs:{id:"处理器重排序与内存屏障指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理器重排序与内存屏障指令","aria-hidden":"true"}},[t._v("#")]),t._v(" 处理器重排序与内存屏障指令")]),t._v(" "),a("p",[t._v("现代的处理器使用写缓冲区来临时保存向内存写入的数据. 写缓冲区可以保证指令流水线持续运行, 它可以避免由于处理器停顿下来等待向内存写入数据而产生的延迟. 同时, 通过以批处理的方式刷新写缓冲区, 以及合并写缓冲区中对同一内存地址的多次写, 可以减少对内存总线的占用. 虽然写缓冲区有这么多好处, 但每个处理器上的写缓冲区, 仅仅对它所在的处理器可见. 这个特性会对内存操作的执行顺序产生重要的影响: 处理器对内存的读/写操作的执行顺序, 不一定与内存实际发生的读/写操作顺序一致！为了具体说明, 请看下面示例:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Processor A\n\nProcessor B\n\na = 1; //A1\nx = b; //A2\n\nb = 2; //B1\ny = a; //B2\n\n初始状态: a = b = 0\n处理器允许执行后得到结果: x = y = 0\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("假设处理器A和处理器B按程序的顺序并行执行内存访问, 最终却可能得到x = y = 0的结果. 具体的原因如下图所示:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qiniu.dong4j.info/2019-07-02-bVbZqg..",alt:""}})]),t._v(" "),a("p",[t._v("这里处理器A和处理器B可以同时把共享变量写入自己的写缓冲区（A1, B1）, 然后从内存中读取另一个共享变量（A2, B2）, 最后才把自己写缓存区中保存的脏数据刷新到内存中（A3, B3）. 当以这种时序执行时, 程序就可以得到x = y = 0的结果.")]),t._v(" "),a("p",[t._v("从内存操作实际发生的顺序来看, 直到处理器A执行A3来刷新自己的写缓存区, 写操作A1才算真正执行了. 虽然处理器A执行内存操作的顺序为: "),a("code",[t._v("A1->A2")]),t._v(", 但内存操作实际发生的顺序却是: "),a("code",[t._v("A2->A1")]),t._v(". 此时, 处理器A的内存操作顺序被重排序了（处理器B的情况和处理器A一样, 这里就不赘述了）.")]),t._v(" "),a("p",[t._v("这里的关键是, 由于写缓冲区仅对自己的处理器可见, 它会导致处理器执行内存操作的顺序可能会与内存实际的操作执行顺序不一致. 由于现代的处理器都会使用写缓冲区, 因此现代的处理器都会允许对写-读操作重排序.")]),t._v(" "),a("p",[t._v("下面是常见处理器允许的重排序类型的列表:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}}),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Load-Load")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Load-Store")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Store-Store")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Store-Load")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("数据依赖")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("sparc-TSO")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("x86")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ia64")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PowerPC")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Y")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("N")])])])]),t._v(" "),a("p",[t._v("上表单元格中的“N”表示处理器不允许两个操作重排序, “Y”表示允许重排序.")]),t._v(" "),a("p",[t._v("从上表我们可以看出: 常见的处理器都允许Store-Load重排序；常见的处理器都不允许对存在数据依赖的操作做重排序. sparc-TSO和x86拥有相对较强的处理器内存模型, 它们仅允许对写-读操作做重排序（因为它们都使用了写缓冲区）.")]),t._v(" "),a("p",[t._v("※注1: sparc-TSO是指以TSO(Total Store Order)内存模型运行时, sparc处理器的特性.\n※注2: 上表中的x86包括x64及AMD64.\n※注3: 由于ARM处理器的内存模型与PowerPC处理器的内存模型非常类似, 本文将忽略它.\n※注4: 数据依赖性后文会专门说明.")]),t._v(" "),a("p",[t._v("为了保证内存可见性, java编译器在生成指令序列的适当位置会插入内存屏障指令来禁止特定类型的处理器重排序. JMM把内存屏障指令分为下列四类:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("屏障类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("指令示例")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("LoadLoad Barriers")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Load1; LoadLoad; Load2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("确保Load1数据的装载, 之前于Load2及所有后续装载指令的装载.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("StoreStore Barriers")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Store1; StoreStore; Store2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("确保Store1数据对其他处理器可见（刷新到内存）, 之前于Store2及所有后续存储指令的存储.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("LoadStore Barriers")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Load1; LoadStore; Store2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("确保Load1数据装载, 之前于Store2及所有后续的存储指令刷新到内存.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("StoreLoad Barriers")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Store1; StoreLoad; Load2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("确保Store1数据对其他处理器变得可见（指刷新到内存）, 之前于Load2及所有后续装载指令的装载. StoreLoad Barriers会使该屏障之前的所有内存访问指令（存储和装载指令）完成之后, 才执行该屏障之后的内存访问指令.")])])])]),t._v(" "),a("p",[t._v("StoreLoad Barriers是一个“全能型”的屏障, 它同时具有其他三个屏障的效果. 现代的多处理器大都支持该屏障（其他类型的屏障不一定被所有处理器支持）. 执行该屏障开销会很昂贵, 因为当前处理器通常要把写缓冲区中的数据全部刷新到内存中（buffer fully flush）.")]),t._v(" "),a("h2",{attrs:{id:"happens-before"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#happens-before","aria-hidden":"true"}},[t._v("#")]),t._v(" happens-before")]),t._v(" "),a("p",[t._v("从JDK5开始, java使用新的JSR -133内存模型（本文除非特别说明, 针对的都是JSR- 133内存模型）. JSR-133使用happens-before的概念来阐述操作之间的内存可见性. 在JMM中, 如果一个操作执行的结果需要对另一个操作可见, 那么这两个操作之间必须要存在happens-before关系. 这里提到的两个操作既可以是在一个线程之内, 也可以是在不同线程之间.")]),t._v(" "),a("p",[t._v("与程序员密切相关的happens-before规则如下:")]),t._v(" "),a("ul",[a("li",[t._v("程序顺序规则: 一个线程中的每个操作, happens- before 于该线程中的任意后续操作.")]),t._v(" "),a("li",[t._v("监视器锁规则: 对一个监视器锁的解锁, happens- before 于随后对这个监视器锁的加锁.")]),t._v(" "),a("li",[t._v("volatile变量规则: 对一个volatile域的写, happens- before 于任意后续对这个volatile域的读.")]),t._v(" "),a("li",[t._v("传递性: 如果A happens- before B, 且B happens- before C, 那么A happens- before C.")])]),t._v(" "),a("p",[t._v("注意, 两个操作之间具有happens-before关系, 并不意味着前一个操作必须要在后一个操作之前执行！happens-before仅仅要求前一个操作（执行的结果）对后一个操作可见, 且前一个操作按顺序排在第二个操作之前（the first is visible to and ordered before the second）. happens- before的定义很微妙, 后文会具体说明happens-before为什么要这么定义.")]),t._v(" "),a("p",[t._v("happens-before与JMM的关系如下图所示:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://qiniu.dong4j.info/2019-07-02-15016584220285.jpg",alt:""}})]),t._v(" "),a("p",[t._v("如上图所示, 一个happens-before规则通常对应于多个编译器和处理器重排序规则. 对于java程序员来说, happens-before规则简单易懂, 它避免java程序员为了理解JMM提供的内存可见性保证而去学习复杂的重排序规则以及这些规则的具体实现.")])])},[],!1,null,null,null);e.default=l.exports}}]);