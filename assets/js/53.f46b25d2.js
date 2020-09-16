(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{295:function(t,r,v){"use strict";v.r(r);var _=v(28),a=Object(_.a)({},(function(){var t=this,r=t.$createElement,v=t._self._c||r;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"oom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#oom"}},[t._v("#")]),t._v(" OOM")]),t._v(" "),v("h2",{attrs:{id:"什么是omm？什么时候会出现omm"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是omm？什么时候会出现omm"}},[t._v("#")]),t._v(" 什么是OMM？什么时候会出现OMM?")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("Java堆溢出")])]),t._v(" "),v("li",[v("ul",[v("li",[t._v("内存泄漏")])])]),t._v(" "),v("li",[v("ul",[v("li",[t._v("不存在泄露")])])])]),t._v(" "),v("p",[t._v("就是内存中的对象确实都还必须存活着，那就应当检查虚拟机的堆参数（-Xmx与-Xms）\n与机器物理内存对比看是否还可以调大，从代码上检查是否存在某些对象生命周期过长、持有状态时间过长的情况，"),v("br"),t._v("\n尝试减少程序运行期的内存消耗。")]),t._v(" "),v("ul",[v("li",[t._v("虚拟机栈和本地方法栈溢出")])]),t._v(" "),v("p",[t._v("对于HotSpot来说，虽然-Xoss参数（设置本地方法栈大小）存在，但实际上是无效的，栈容量只由-Xss参数设定。")]),t._v(" "),v("p",[t._v("在单线程下，无论由于栈帧太大还是虚拟机栈容量太小，当内存无法分配的时候，虚拟机抛出的都是StackOverflowError异常。")]),t._v(" "),v("p",[t._v("如果是多线程导致的内存溢出，与栈空间是否足够大并不存在任何联系。"),v("br"),t._v("\n这个时候每个线程的栈分配的内存越大，反而越容易产生内存溢出异常，"),v("br"),t._v("\n解决的时候是在不能减少线程数或更换64为的虚拟机的情况下，就只能通过减少最大堆和减少栈容量来换取更多的线程。")]),t._v(" "),v("ul",[v("li",[t._v("方法区和运行时常量池溢出")])]),t._v(" "),v("p",[t._v("由于常量池分配在永久代中，可以通过-XX:PermSize和-XX:MaxPermSize限制方法区大小，从而间接限制其中常量池的容量。")]),t._v(" "),v("p",[t._v("String.intern()是一个Native方法"),v("br"),t._v("\n它的作用是：如果字符串常量池中已经包含一个等于此String对象的字符串，则返回代表池中这个字符串的String对象，"),v("br"),t._v("\n否则，将此String对象包含的字符串添加到常量池中，并且返回此String对象的引用。")]),t._v(" "),v("h2",{attrs:{id:"oom-如何-debug？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#oom-如何-debug？"}},[t._v("#")]),t._v(" OOM 如何 Debug？")]),t._v(" "),v("p",[t._v("可进一步通过工具查看泄漏对象到GC Roots的引用链"),v("br"),t._v("\n掌握了泄漏对象的类型信息及GC Roots引用链的信息，就可以比较准确地定位出泄漏代码的位置。")]),t._v(" "),v("h2",{attrs:{id:"创建一段有内存泄漏的代码？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建一段有内存泄漏的代码？"}},[t._v("#")]),t._v(" 创建一段有内存泄漏的代码？")]),t._v(" "),v("p",[t._v("只要不断的创建对象，并且保证GC Roots到对象之间有可达路径来避免垃圾回收机制清除这些对象，"),v("br"),t._v("\n那么在数量到达最大堆的容量限制后就会产生内存溢出异常。")])])}),[],!1,null,null,null);r.default=a.exports}}]);