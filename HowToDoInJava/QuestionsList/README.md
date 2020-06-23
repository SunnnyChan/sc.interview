# Java Interview Questions List

[Java Interview Questions](https://howtodoinjava.com/java-interview-questions/)  

## 1.1 核心Java面试问题系列

### 第一部分 

[Core Java Interview Questions – Part 1](https://howtodoinjava.com/interview-questions/core-java-interview-questions-series-part-1/)  

#### 如何在Java中创建不可变对象？使用不可变对象的收益是什么？  

不可变类是指一旦创建，其状态就不能更改的类。  
在这里，对象的状态本质上是指存储在实例变量中的值，无论它们是基本类型还是引用类型。   

要使类不可变，需要遵循以下步骤：  

1. 不提供 setter方法，避免对象的字段被修改  
2. 所有字段声明为final和private  
3. 不允许子类重写父类方法
最简单的方法是将类声明为final，以限制子类继承父类。 
更好点的方式是将构造方法设为private，同时通过工厂方法来创建实例。  
4. 如果域包含其他可变类的对象，也要禁止这些对象被修改：
（1）不提供修改可变对象的方法  
（2）不要共享指向可变对象的引用
不要存储那些传进构造方法的外部可变对象的引用；如果需要，创建拷贝，保存指向拷贝的引用。  
类似的，在创建方法返回值时，避免返回原始的内部可变对象，而是返回可变对象的拷贝。  

[参考：A Strategy for Defining Immutable Objects](https://docs.oracle.com/javase/tutorial/essential/concurrency/imstrat.html)
[参考：How to create immutable class in Java](https://howtodoinjava.com/java/basics/how-to-make-a-java-class-immutable/)

不可变类的优势： 

1. 创建、测试和使用都很简单。  
2. 线程安全，没有同步问题  
3. 不需要拷贝构造方法  
4. 不需要实现Clone方法  
5. 可以缓存类的返回值，允许hashCode使用惰性初始化方式  
6. 不需要防御式复制  
7. 适合用作Map的key和Set的元素（因为集合里这些对象的状态不能改变）
8. 类一旦构造完成就是不变式，不需要再次检查  
9. 总是“failure atomicity”（原子性失败）：
如果一个不可变对象抛出异常，它从不会保留一个烦人的或者不确定的状态  

[示例代码](https://github.com/SunnnyChan/java-demo/blob/master/demo-interview/src/main/java/me/sunny/demo/interview/howtodoinjava/ImmutableClass.java)  

#### Java是引用传递还是值传递？  

Java 规范说，Java没有引用传递，所有都是值传递。  
***Java是值传递而不是引用传递***  
如果Java是引用传递，我们应该可以像C语言一样交换对象，而这在Java中是做不到的。  

向方法传递实例时，它的内存地址会被1比特1比特的复制到一个新的引用变量中，它们都指向相同的实例。 
但是如果你在方法内改变这个引用，原始引用不会改变。  
如果是引用传递，原始引用也会改变。  

[参考：Java Pass-by-Value vs. Pass-by-Reference](https://howtodoinjava.com/java/basics/java-is-pass-by-value-lets-see-how/)  

注：  
值就直接保存在变量中，而String等是引用类型，变量中保存的只是实际对象的地址。  
一般称这种变量为"引用"，引用指向实际对象，实际对象中保存着内容。  

#### finally块的用途是什么？finally块是否可以确保被调用？如果不能，何时不被调用？  

try块退出时，finally块始终执行，这样可以确保即使发生异常，finally块也会被执行。  
finally 不仅仅对异常处理有用，它使得程序员可以避免因return，continue或break而意外绕过执行清理代码。  
将清理代码放在finally块中是一个好习惯，即使可能没有异常发生。  

如果在执行try或catch代码时JVM退出，则finally块可能不会执行。 
同样，如果执行try或catch代码的线程被中断或杀死，即使整个应用程序继续运行，finally块也可能不会执行。  

#### 为什么有两个Date类？一个在java.util包中，另一个在java.sql中？  



* 什么是标记界面？  

* 为什么Java中的main（）被声明为public static void main？  

* 将String创建为new()和原义文字有什么区别？  

* String中的substring()如何工作？  

* 解释HashMap的工作。  

* 接口和抽象类之间的区别？   

* 什么时候重写hashCode()和equals()？    

### 第二部分  

* 为什么要避免使用finalize()方法？  

* 为什么不应该在多线程环境中使用HashMap？它也会引起无限循环吗？  

* 解释抽象和封装？们有什么关系？  

* 接口和抽象类之间的区别？

* StringBuffer如何保存内存？

* 为什么在对象类而不是线程中声明了wait and notify？  

* 编写Java程序以在Java中创建死锁并修复死锁？  

* 如果您的 Serializable 类包含一个不可序列化的成员，该怎么办？如何解决？  

* 解释Java中的 transient 和 volatile 关键字？  

* Iterator和ListIterator之间的区别？  

### 第三部分

* 什么是同步？类级别锁定和对象级别锁定？  

* sleep()和wait()之间的区别？  

* 可以给 this 引用变量赋值null吗？  

不可以。  
在java中，赋值语句的左边必须是一个变量。  
this 是一个表示当前实例的特殊关键字，它不是变量。类似地，null也不能分配给 super 等类似关键字。  

* &&和＆之间的区别？  

&是位运算，&&是逻辑运算  

＆评估计算的双方。  
&&评估计算对象的左侧，如果是，则继续并评估右侧。  

* 如何重写equals和hashCode()方法？  

* 解释所有访问修饰符？

* 什么是垃圾收集？我们可以执行吗？
* 什么是原生关键字？  

* 什么是序列化？解释渔获物？  


## 1.2 对象初始化的最佳做法

在Java中，对象初始化被认为是一个很重的过程，你需要知道每个新创建的对象是如何影响内存和应用程序性能的。  
一个简单的例子是Java包装类，它从外部看起来非常简单，就像原语一样，但实际上它们并没有看上去那么简单。  

了解Java如何帮助你在包装类(如Double、Long或Integer)内部缓存对象。  

## 1.3 HashMap 是如何工作的

* HashMap如何存储键值对？  
* HashMap如何解决冲突？  
* HashMap中如何使用hashCode（）和equals（）方法？  
* 密钥的随机/固定hashCode（）值的影响？  
* 在多线程环境中使用HashMap？  

## 1.4 HashMap Key 好的设计

* 为什么String是HashMap的好钥匙？  
* 您将如何设计一个用作键的类？    
* 您将重写Key类中的hashCode（）方法吗？ 有什么影响？  
* 为可以作为HashMap关键对象的类编写语法？  

## 1.5 ConcurrentHashMap 相关问题

HashMap不是线程安全的。  
可以在并发应用程序中使用HashTable，但是它会影响应用程序性能。  
所以有ConcurrentHashMap，它是HashMap的并发版本，具有与HashMap相同的性能，同时也是线程安全的。  

## 1.6 Java 集合框架 相关问题  

* 解释 Collections 层次？  
* 集和列表之间的区别？  
* Vector和ArrayList之间的区别？
* HashMap和HashTable之间的区别？
* Iterator和ListIterator之间的区别？
* 为什么Map接口没有扩展Collection接口？
* 如何将String数组转换为ArrayList？
* 如何反转列表？  
* HashSet如何存储元素？  
* 是否可以将null元素添加到TreeSet或HashSet中？
* 什么是IdentityHashMap和WeakHashMap？
* 什么时候使用HashMap或TreeMap？
* 如何使 collection 只读？
* 如何使 collection 线程安全？  
* fail-fast 和 fail-safe 之间有什么区别？
* 什么是 Comparable 和 Comparator 接口？
* 什么是Collections和Arrays类？
* 什么是队列和堆栈？ 列出他们的差异？

## 1.7 什么是Java中的多态性

简而言之，多态就是我们可以创建在不同程序环境下表现不同的函数或引用变量的能力。  
与继承，抽象和封装一样，多态是面向对象编程的主要构建块之一。  

## 1.8 Java中的抽象是什么  


## 1.9 抽象 和 封装

了解抽象和封装之间的区别是深入理解这两个概念的关键，不能孤立地学习两者。  

## 1.10 接口和抽象类之间的区别？

自从Java语言诞生以来，就已经清晰地把抽象类和接口相分离。  
但到了Java 8，发生了很多变化，它的核心概念之一是功能接口。  

功能接口完全改变了我们看待Java语言的两个基本构建块的方式。 

## 1.11 枚举的相关问题

枚举已成为核心构建块很长时间了，在大多数流行的Java库中都可以看到它们。  
它帮助你以更加面向对象的方式管理常量。  

* 枚举与枚举类之间的区别？  
* 枚举可以与String一起使用吗？  
* 我们可以扩展枚举吗？  
* 写枚举的语法？  
* 如何在枚举中实现反向查找？  
* 什么是EnumMap和EnumSet？  

## 1.12 Java序列化和 Serializable 接口

* 什么是serialVersionUID？  
* 什么是readObject和writeObject？  
* 您将序列化和反序列化一个类吗？  
* 您将如何对类进行更改，以使序列化不中断？  
* 我们可以序列化静态字段吗？  

## 1.13. Java Main 方法

* Java main 方法语法？
* 为什么main方法是 公有的（public）？
* 为什么main方法是 静态的（static）？
* 为什么main方法返回值是 void？
* 当调用main方法时，内部会发生什么？

## 1.14. Java 对象克隆

* clone（）方法如何工作？
* Java中的浅拷贝是什么？
* 什么是复制构造函数？
* Java中的深拷贝是什么？
* 创建对象的深拷贝的不同方法？  

## 1.15 什么是 CountDownLatch?


## 1.16 为什么字符串是不可变的?  

不变对象意味着对象的状态一旦初始化，就永远无法更改。  
Java中的String类和wrapper类为不可变类。  

接下来我们来回答为什么字符串是不可变的：  
1. 最重要的原因是安全性  
Java类加载机制对作为参数传递的类名称起作用，然后在类路径中搜索这些类。  
如果字符串是可变的，那么任何人都可以轻松地注入自己的类加载机制。  
2. 性能  
String类的不可变性，使得字符串池发挥作用，提高了性能。  
3. 线程安全  
不可变对象在多线程应用程序中的多个线程之间共享时是安全的。  

## 1.17 怎样才能使得一个Java类不可变

通常，通过以下步骤可实现Java的不变性：  
1. 不要给类中的字段提供任何的赋值方法；
2. 使所有字段为final 和 private；
3. 不允许子类覆盖方法  
最简单的方法是将类声明为final，Java中的final类无法被继承。  
4. 返回深拷贝的对象，其中包含类中所有可变字段的拷贝内容  
永远记住，实例变量要么是可变的，要么是不可变的。  
标识它们并为所有可变对象返回带有拷贝内容的新对象。

复杂巧妙的的方法是使构造函数私有，并在工厂方法中构造实例。  

* JDK中的不可变类：  
String  
Wrapper（包装类） Integer, Long, Double etc等
Immutable collection classes 如 Collections.singletonMap() 等.
java.lang.StackTraceElement
Java enums (理想情况下应该如此)
java.util.Locale
java.util.UUID  

* 使类不可变的好处  
1. 易于构建，测试和使用  
2. 自动是线程安全的，并且没有同步问题
3. 不需要复制构造函数  do not need a copy constructor
4. 不需要拷贝的实现 do not need an implementation of clone
5. 允许hashCode*()使用延迟初始化，并缓存其返回值
6. 用作字段时不需要防御性地拷贝
7. 作为更好的Map Key 和Set元素（这些对象在集合中时不得更改状态）
8. 在构造时就建立了其类不变式，因此无需再次检查
9. 总是具有“失败原子性”（ “failure atomicity”，约书亚·布洛赫（Joshua Bloch）使用的术语）： 
如果不可变的对象抛出异常，则永远不会处于不希望的状态或不确定的状态。  

[参考](https://howtodoinjava.com/java/basics/how-to-make-a-java-class-immutable/)  

## 2.1 什么是线程安全？  

* 线程安全的正确性是什么？  
* 举个线程安全类的例子吗？  
* 您将如何设计线程安全的Java类？  
* 不变类线程安全吗？  

## 2.2 对象级锁与类级锁


## 2.3 “implements Runnable” and “extends Thread”的区别？

* Thread and Runnable的区别?  
* 通过 Runnable interface 创建可以运行线程？
* 两者之间应首选哪种方法？  

## 2.4 Compare and Swap [CAS] 算法

* 什么是乐观锁定和悲观锁定？  
* 什么是CAS算法？  
* 什么是原子操作？  
* AtomicInteger和AtomicLong如何工作？  

## 2.5 Fork / Join框架是什么?


## 2.6 什么是ThreadPoolExecutor？  

## 2.7 Java executor 框架  

## 2.8 如何用Java编写死锁并解决  

## 3.1 最佳实践指南  

## 3.2 一些难题

## 3.3 刷设计模式  

## 3.4 随机浏览核心Java主题  

## 4.1 Spring Core 的面试问题  

* 什么是控制反转（IoC）和依赖注入（DI）？

* BeanFactory和ApplicationContext之间的区别？

* 什么是基于Spring Java的配置？

* 解释Spring Bean的生命周期？

* Spring Bean范围有哪些不同？

* 在Spring Framework中，Singleton bean线程安全吗？

* 解释Bean自动装配的不同模式？

* 用示例解释@Qualifier注释？

* 构造函数注入和setter注入之间的区别？

* 列举一下Spring框架中使用的一些设计模式吗？

## 4.2. Spring AOP

* 关注点和跨领域关注点之间的区别？

* 有哪些可用的AOP实现？

* Spring AOP中 有哪些不同的建议类型？

* 什么是Spring AOP代理？

* 什么是连接点和切点？

* 什么是纵横编织？

## 4.3. Spring MVC

* 什么是MVC架构？

* 什么是DispatcherServlet和ContextLoaderListener？

* 如何使用基于Java的配置？

* 我们如何使用Spring创建返回JSON响应的Restful Web Service？

* <context：annotation-config>与<context：component-scan>之间的区别？

* @Component，@ Controller，@ Repository和@Service批注之间的区别？

* Spring MVC如何提供验证支持？

* 什么是Spring MVC拦截器以及如何使用？

* 如何在Spring MVC Framework中处理异常？

* 如何在Spring MVC应用程序中实现本地化？

## 5.1 针对Oracle企业管理项目的Java面试问题  

* 您可以开始讲述自己和您的项目吗？

* 什么是Java中的抽象和封装？

* 方法重载规则？

* Java的扩大和缩小？

* 我可以只尝试代码块吗？

* 线程：生产者和消费者有问题吗？

* 为什么在Object类中定义了wait（），notify（）和notifyAll（）？

* 我们可以覆盖wait（）或notify（）方法吗？

* wait（），sleep（）和yield（）之间的区别？

* 解释一下线程类中的join（）方法？

* 您是否遇到了内存不足错误？ 如果是，您如何解决？ 告诉不同的情况为什么会这样？

* 数据库连接泄漏？

* 编写程序以使用第三个变量交换两个数字？

* 编写程序对数组进行排序并删除重复项？

* 在Singleton上编写程序？

* 写一个程序合并两个数组？

* final和final关键字有什么用？

* 我可以将类声明为静态还是私有的吗？

* 为什么你想要改变公司？

## 5.2 中级开发人员的Java面试问题  

## 6.1. Java Puzzlers

## 6.2. Java Concurrency in Practice

## 6.3. Effective Java by Joshua Bloch
