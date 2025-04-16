# Canvas Path API

下面的方法用来操作对象的路径。

MDN 原文 [CanvasRenderingContext2D](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D#paths) 汇总分类

基础路径方法：

-   **beginPath()**

    > 开启路径, 当你想创建一个新的路径时，调用此方法。

-   **closePath()**
    > 闭合路径，用于表示当前绘制的路径结束

直线路径方法:

-   **moveTo(x,y)**

    > 定义路径的起始位置, 将新的子路径的起点移动到（x,y） 坐标

-   **lineTo(x,y)**

    > 绘制直线段, 使用直线连接子路径的最后一个点到（x, y）坐标。

图形路径方法:

-   **arc(x, y, radius, startAngle, endAngle, anticlockwise)**

    > 用于绘制圆弧（圆）路径。

        - (x, y): 圆心坐标
        - radius: 圆弧的半径
        - startAngle: 起始角度（弧度）
        - endAngle: 结束角度（弧度）
        - anticlockwise: 绘制方向（布尔值：false为顺时针，true为逆时针）

-   **ellipse()**

    > 用于绘制椭圆路径

-   **rect()**

    > 用于绘制矩形路径

曲线路径方法:

**quadraticCurveTo()**
**bezierCurveTo()**
