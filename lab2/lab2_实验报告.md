# 2022年夏季《移动软件开发》实验报告



<center>姓名：经选  学号：21010022019</center>

| 姓名和学号         | 经选，21010022019                                            |
| ------------------ | ------------------------------------------------------------ |
| 本实验属于哪门课程 | 中国海洋大学22夏《移动软件开发》                             |
| 实验名称           | 实验2：天气查询小程序                                        |
| 博客地址           | [移动软件开发lab2 - 中原白也 - 博客园 (cnblogs.com)](https://www.cnblogs.com/makabakaJ/articles/18369528) |
| Github仓库地址     | [233MAKA/yidong_lab2 (github.com)](https://github.com/233MAKA/yidong_lab2) |

## **一、实验目标**

1.掌握服务器域名配置和临时服务器部署

2。掌握wx.request接口的用法

## 二、实验步骤

### 1. 准备工作

#### 1.1 API密钥申请

账号信息地址：[控制台 | 和风天气 (qweather.com)](https://console.qweather.com/#/console)

#### 1.2 API调用方法

免费用户调用接口常见语法格式：

https://devapi.qweather.com/v7/weather/3d?location=101010100&key=这里替换成你的key

测试：

https://devapi.qweather.com/v7/weather/3d?location=101010100&key=95a5b63cbd544b48a175cf69d7088f6b

测试结果：

![image-20240820095307500](C:\Users\HUAWEI\AppData\Roaming\Typora\typora-user-images\image-20240820095307500.png)

#### 1.3 服务器域名配置

域名配置完成：

<img src="C:\Users\HUAWEI\AppData\Roaming\Typora\typora-user-images\image-20240820100357300.png" alt="image-20240820100357300" style="zoom:50%;" />

### 2. 项目创建

### 3. 页面配置

#### 3.1 创建页面文件

#### 3.2 删除和修改文件

初始化完成：

<img src="C:\Users\HUAWEI\AppData\Roaming\Typora\typora-user-images\image-20240820101521624.png" alt="image-20240820101521624" style="zoom:50%;" />

#### 3.3 创建其他文件

### 4. 视图设计

#### 4.1 导航栏设计

<img src="C:\Users\HUAWEI\AppData\Roaming\Typora\typora-user-images\image-20240820102423979.png" alt="image-20240820102423979" style="zoom:50%;" />

#### 4.2 页面设计

按照手册要求逐步完成页面布局设计

### 5. 逻辑实现

#### 5.1 修改地址信息

<img src="C:\Users\HUAWEI\AppData\Roaming\Typora\typora-user-images\image-20240820105350600.png" alt="image-20240820105350600" style="zoom:33%;" />

#### 5.2 获取实时天气信息

获取城市ID

![image-20240820144626324](C:\Users\HUAWEI\AppData\Roaming\Typora\typora-user-images\image-20240820144626324.png)



console.log(res.data);

![image-20240820135153273](C:\Users\HUAWEI\AppData\Roaming\Typora\typora-user-images\image-20240820135153273.png)

(获取成功)

> 此处源代码无法获取正确的地址，因为该API只能通过城市ID或者经纬度获得实时温度，而location内原有的是城市具体名称，故而新增了一个API接口（也是由和风天气提供的location接口），先获得城市ID，再将城市ID输入天气的参数中，从而达到获得城市实时天气的功能。

that.setData({now:res.data.HeWeather6[0].now});//微信版本变动，该代码无用，修改成以下代码即可运行

that.setData({now:res.data.now});

![image-20240820140142165](C:\Users\HUAWEI\AppData\Roaming\Typora\typora-user-images\image-20240820140142165.png)

成功写入

#### 5.3 更新页面天气信息

将WXML页面上所有的临时数据都替换成{{now.属性}}的形式，让数据能够随时更新。

代码如手册所示。

> 部分代码有修改，根据上一小节中输出在console中的名称修改动态显示的名字即可

## 三、程序运行结果

网络良好，显示图片如下所示：

![image-20240820141414950](C:\Users\HUAWEI\AppData\Roaming\Typora\typora-user-images\image-20240820141414950.png)

切换城市：

![image-20240820153447419](C:\Users\HUAWEI\AppData\Roaming\Typora\typora-user-images\image-20240820153447419.png)

## 四、问题总结与体会

Q：在实时获取天气的时候，由于和风天气有更新，手册上的代码无法正确运行，不能通过城市名称直接获取天气数据。

A：通过和风天气提供的另一个API，获取城市名称相对应的城市ID，再将该ID输出给后面的参数，从而获得天气数据。

体会：深入了解了API的大致运行过程，能够借用API实现简单的小程序功能，丰富了小程序的功能。非常有用的一次实验！
