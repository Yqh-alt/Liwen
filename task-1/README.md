# ==*Markdown语法笔记*==

#一级标题

#+空格+标题名称

##二级标题，依此类推，最高六级

--------

## 1.字体

**hello world!加粗**

~~hello world!删除~~

*hello world!斜体*

***hello world!斜体加粗***

==hello world!高亮==

牛^蛙^ , 2^n^(上标,必须用英文字符)

H~2~O (下标,必须用英文字符)

--------

## 2.引用

> 哈哈哈哈哈哈哈哈
> > 哈哈哈哈哈哈哈哈哈哈
> > >哈哈哈哈哈哈哈哈哈哈
> > >
> > >>哈哈哈哈哈哈哈哈哈哈

## 3.分割线

---

***

## 4.图片

![截图](E:\code\vscode\img\pic3.jpg)

![截图2](https://seopic.699pic.com/photo/50046/0542.jpg_wh1200.jpg)

----------

## 5.超链接

[点击打开百度网站](www.baidu.com)

-------

## 6.列表

### 有序列表

1. a

2. b

3. c

### 无序列表

- 1,用-加空格
- 2
- 3

+ 4 ,用+加空格也可以

----------

## 7.表格

### way1:

打出|表头|表头|····|·····|敲回车，再选表格大小m*n

### way2:

直接鼠标右键插入表格，鼠标右键插入，可以插入很多东西（代码块，图片，水平分割线，链接引用，公式块等）

eg:

|  姓名  | 性别 | 年龄 |
| :----: | :--: | :--: |
| 任怡樊 |  男  |  19  |

----------

## 8.代码

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

--------

# ==*git操作*==

### 1.初始化一个新的git仓库

1. 创建文件夹（mkdir + 名称）

2. 在文件内初始化git（创建git仓库）
   - cd + 名称(进入文件夹)
   - git init(生成.git文件)

### 2.向仓库中添加文件

- 先创建一个文件，在所在文件夹鼠标右键打开 Git Bash Here
- git status 显示哪些⽂件已被staged、未被staged以
  及未跟踪(untracked)。
- git add + 文件名称/文件夹名称    将指定⽬录的所有修改加⼊到下⼀次commit（暂存区）中。
- git commit -m "add+空格+文件名称" 将文件从暂存区提交到仓库
- 再通过git status验证一哈
- 注：ls查看文件，pwd查看路径

### 3.修改仓库文件

1. vi + 空格 + 文件名
2. cat + 文件名 （查看文件内容）
3. 再用git statue查看是否修改成功
4. git add + 文件名称/文件夹名称    将指定⽬录的所有修改加⼊到下⼀次commit（暂存区）中。
5. git commit -m "add+空格+文件名称" 将文件从暂存区提交到仓库
6. 再通过git status验证一哈

### 4.删除仓库文件

1. 鼠标右键选择删除
2. rm -rf + 空格 + 文件名
3. git rm + 空格 + 文件名
4. git commit -m "备注信息"
5. 再通过git status验证一哈

### ==5.git远程管理仓库==

1. $ git clone +仓库地址  #将出现以仓库名命名的新文件夹，假设为test（克隆）![仓库地址由来](C:\Users\15599\AppData\Roaming\Typora\typora-user-images\image-20210518230236428.png)
2. #将要上传的文件复制到test文件夹下 再 cd test
3. git branch -a查看所有分支以及当前所指分支
4. git checkout +分支名 指到到该分支
5. git add . #.表示添加全部，也可git add my.text添加单个文件或文件夹，git add -A 同步所有变化
6. git commit -m "备注信息"  #将改动提交到github仓库
7. git push -u origin master   #首次关联本地master分支与github仓库的master分支需要-u,之后推送和拉取不用
8. 之后就直接用git push即可
9. ![git分支的一些操作](C:\Users\15599\AppData\Roaming\Typora\typora-user-images\image-20210519131150453.png)

# ==*github操作*==

### 1.Github Pages 搭建网站

个人站点

访问

https://用户名.github.io

#### 搭建步骤

1. 创建个人站点  ->   新建仓库 （注：仓库名必须是[用户名.github.io]）
2. 在仓库下新建index.html的文件即可
3. 之后就写代码

# ==*PS笔记*==

