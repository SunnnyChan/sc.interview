# Java 设计思想

## Java中有没有虚函数？   

虚函数的作用--实现多态，指向基类的指针在操作它的多态类对象时，  
会根据不同的类对象，调用其相应的函数，这个函数就是虚函数。  

## 为什么Java中不支持多重继承？  

1. 围绕钻石形继承问题产生的歧义  
考虑一个类 A 有 foo() 方法, 然后 B 和 C 派生自 A, 并且有自己的 foo() 实现，  
现在 D 类使用多个继承派生自 B 和C，如果我们只引用 foo(), 编译器将无法决定它应该调用哪个 foo()。  
这也称为 Diamond 问题，因为这个继承方案的结构类似于菱形。  

2. 高可维护和更清晰的设计是驱动因素  

3. Java 可以通过使用接口支持多继承来避免这种歧义  

## 为什么Java不支持运算符重载？

Java里面的String可以使用“+”进行连接的问题，藐视看起来像是重载了运算符，其实这个只是JVM做的语法糖。  

运算符重载，将为同一运算符赋予多种含义，这将使任何开发人员的学习曲线变得陡峭，事情变得更加混乱。  

1. 简单性和清晰性  
2. 避免编程错误  
据观察，当语言支持运算符重载时，编程错误会增加，从而增加了开发和交付时间。  
3. JVM复杂性  
从JVM的角度来看，支持运算符重载使问题变得更加困难。  
通过更直观，更干净的方式使用方法重载也能实现同样的事情，因此不支持 Java 中的运算符重载是有意义的。  


