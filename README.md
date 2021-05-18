# Markdown语法笔记

#一级标题

#+空格+标题名称

##二级标题，依此类推，最高六级

## 字体

**hello world!加粗**

~~hello world!删除~~

*hello world!斜体*

***hello world!斜体加粗***

==hello world!高亮==

牛^蛙^ , 2^n^(上标,必须用英文字符)

H~2~O (下标,必须用英文字符)

## 引用

> 哈哈哈哈哈哈哈哈
> > 哈哈哈哈哈哈哈哈哈哈
> > >哈哈哈哈哈哈哈哈哈哈
> > >
> > >>哈哈哈哈哈哈哈哈哈哈

## 分割线

---

***

## 图片

![截图](E:\code\vscode\img\pic3.jpg)

![截图2](https://seopic.699pic.com/photo/50046/0542.jpg_wh1200.jpg)

## 超链接

[点击跳转到百度网站][www.baidu.com]

[大苏打](www.baidu.com)

## 列表

### 有序列表

1. a

2. b

3. c

### 无序列表

- 1,用-加空格
- 2
- 3

+ 4 ,用+加空格也可以

## 表格

### way1:

打出|表头|表头|····|·····|敲回车，再选表格大小m*n

### way2:

直接鼠标右键插入表格，鼠标右键插入，可以插入很多东西（代码块，图片，水平分割线，链接引用，公式块等）

eg:

|  姓名  | 性别 | 年龄 |
| :----: | :--: | :--: |
| 任怡樊 |  男  |  19  |

## 代码

```c
#include <stdio.h>
{
    printf("hello world!\n");
	return 0;
}
```

~~~python
import numpy as np
n, m = map(int, input().split(' '))
a = np.zeros((1,n))
a[0][m-1] = 1
print(a)
~~~

