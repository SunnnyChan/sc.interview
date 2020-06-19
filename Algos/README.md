# 算法  

## int 类型数 反转

* 问题详述:   

```
Input: 123
Output: 321
```

* 算法思路  

1. 将各位上的数字入栈，再出栈，出栈过程中需要判断是否溢出  
2. 将各位上的数字存入字符串数组，分别从头部和尾部逆向交换，得到转换后的数字，再判断是否溢出。  

* 注意点  

1. 正负数  
转成正数，统一处理。  

2. 反转后的数字可能会溢出  

## String 类型小数 加法

* 问题详述:   

```
Input: "123.7899" "2321.233"
Output: "2445.0132"
```

* 算法思路    

先对输入数据做预处理，以做统一的处理。  
以小数点为基准对两个输入数的整数部分和小数部分分别用0进行补齐，得到"0123.7899" "2321.2330"，  
从左侧开始按位采用字符的ASCII码做加法，同时需要记录进位，最后单独处理最高位的进位。  

* 注意点  

1. 注意符号位  