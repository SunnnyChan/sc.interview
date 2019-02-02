# Profile

* 一个线程如果出现了运行时异常会怎么样
```md
	如果这个异常没有被捕获的话，这个线程就停止执行了
	如果这个线程持有某个某个对象的监视器，那么这个对象监视器会被立即释放
```

* 如何获取到线程dump文件
```md
死循环、死锁、阻塞、页面打开慢等问题
	打线程dump是最好的解决问题的途径
	所谓线程dump也就是线程堆栈
两步
	获取到线程的pid
		可以通过使用jps命令，在Linux环境下还可以使用ps -ef | grep java
	打印线程堆栈
		可以通过使用jstack pid命令，在Linux环境下还可以使用kill -3 pid

	Thread类提供了一个getStackTrace()方法也可以用于获取线程堆栈
		这是一个实例方法，因此此方法是和具体线程实例绑定的
		每次获取获取到的是具体某个线程当前运行的堆栈。
```

* 查找哪个线程使用CPU最长
```md
	获取项目的pid，jps或者ps -ef | grep java
	top -H -p pid
```