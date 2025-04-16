# CanvasRenderingContext2D API 文档

## 目录

-   [实例属性](#实例属性)
    -   [颜色与样式](#颜色与样式)
    -   [阴影效果](#阴影效果)
    -   [文本渲染](#文本渲染)
    -   [路径样式](#路径样式)
    -   [图像平滑](#图像平滑)
    -   [全局设置](#全局设置)
    -   [其他属性](#其他属性)
-   [实例方法](#实例方法)
    -   [路径绘制](#路径绘制)
    -   [图形绘制](#图形绘制)
    -   [文本处理](#文本处理)
    -   [图像处理](#图像处理)
    -   [变换操作](#变换操作)
    -   [状态管理](#状态管理)
    -   [剪切与合成](#剪切与合成)
    -   [实用方法](#实用方法)

---

## 实例属性

### 颜色与样式

1. **`fillStyle`**：填充颜色或样式（纯色/渐变/图案）。
2. **`strokeStyle`**：描边颜色或样式（纯色/渐变/图案）。
3. **`globalAlpha`**：全局透明度（0.0-1.0）。

### 阴影效果

4. **`shadowBlur`**：阴影模糊半径。
5. **`shadowColor`**：阴影颜色。
6. **`shadowOffsetX`**：阴影水平偏移量。
7. **`shadowOffsetY`**：阴影垂直偏移量。

### 文本渲染

8. **`font`**：文本字体（语法同 CSS `font`）。
9. **`textAlign`**：文本对齐方式（`"left"`/`"right"`/`"center"`等）。
10. **`textBaseline`**：文本基线对齐（`"top"`/`"middle"`/`"bottom"`等）。
11. **`direction`**：文本方向（`"ltr"`/`"rtl"`/`"inherit"`）。
12. **`fontKerning`**：字体字距调整（`"auto"`/`"normal"`/`"none"`）。
13. **`fontStretch`**：字体拉伸（如 `"condensed"`/`"expanded"`）。
14. **`fontVariantCaps`**：字体变体大小写（如 `"small-caps"`）。
15. **`letterSpacing`**：字母间距。
16. **`wordSpacing`**：单词间距。
17. **`textRendering`**：文本渲染优化方式（如 `"optimizeLegibility"`）。

### 路径样式

18. **`lineCap`**：线条末端样式（`"butt"`/`"round"`/`"square"`）。
19. **`lineJoin`**：线条连接样式（`"bevel"`/`"round"`/`"miter"`）。
20. **`lineWidth`**：线条宽度（单位：像素）。
21. **`miterLimit`**：斜接限制（防止尖角过长）。
22. **`lineDashOffset`**：虚线模式的偏移量。

### 图像平滑

23. **`imageSmoothingEnabled`**：是否启用图像平滑（抗锯齿）。
24. **`imageSmoothingQuality`**：图像平滑质量（`"low"`/`"medium"`/`"high"`）。

### 全局设置

25. **`globalCompositeOperation`**：合成模式（如 `"source-over"`/`"multiply"`）。

### 其他属性

26. **`canvas`**：关联的 `HTMLCanvasElement` 或 `OffscreenCanvas` 对象。
27. **`filter`**：应用 CSS 滤镜效果（需浏览器支持）。

---

## 实例方法

### 路径绘制

1. **`beginPath()`**：开始新路径。
2. **`closePath()`**：闭合当前路径（连接起点和终点）。
3. **`moveTo(x, y)`**：移动路径起点到坐标 `(x, y)`。
4. **`lineTo(x, y)`**：从当前点绘制直线到 `(x, y)`。
5. **`arc(x, y, radius, startAngle, endAngle, anticlockwise)`**：绘制圆弧。
6. **`arcTo(x1, y1, x2, y2, radius)`**：通过控制点绘制圆弧。
7. **`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`**：三次贝塞尔曲线。
8. **`quadraticCurveTo(cpx, cpy, x, y)`**：二次贝塞尔曲线。
9. **`ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)`**：绘制椭圆。
10. **`rect(x, y, width, height)`**：添加矩形路径。
11. **`roundRect(x, y, width, height, radii)`**：添加圆角矩形路径（实验性 API）。

### 图形绘制

12. **`fill()`**：填充当前路径。
13. **`stroke()`**：描边当前路径。
14. **`fillRect(x, y, width, height)`**：填充矩形。
15. **`strokeRect(x, y, width, height)`**：描边矩形。
16. **`clearRect(x, y, width, height)`**：清除矩形区域。

### 文本处理

17. **`fillText(text, x, y [, maxWidth])`**：填充文本。
18. **`strokeText(text, x, y [, maxWidth])`**：描边文本。
19. **`measureText(text)`**：测量文本尺寸（返回 `TextMetrics` 对象）。

### 图像处理

20. **`drawImage(image, dx, dy [, dWidth, dHeight])`**：绘制图像到画布。
21. **`createImageData(width, height)`**：创建空图像数据对象。
22. **`getImageData(sx, sy, sw, sh)`**：获取像素数据。
23. **`putImageData(imageData, dx, dy)`**：写入像素数据。

### 变换操作

24. **`translate(x, y)`**：平移坐标系。
25. **`rotate(angle)`**：旋转坐标系。
26. **`scale(sx, sy)`**：缩放坐标系。
27. **`transform(a, b, c, d, e, f)`**：应用变换矩阵。
28. **`setTransform(a, b, c, d, e, f)`**：重置并应用变换矩阵。
29. **`resetTransform()`**：重置为默认变换矩阵。

### 状态管理

30. **`save()`**：保存当前绘图状态（样式/变换等）。
31. **`restore()`**：恢复上一次保存的绘图状态。
32. **`reset()`**：重置渲染上下文（实验性 API）。

### 剪切与合成

33. **`clip()`**：将当前路径设为剪切区域。
34. **`globalCompositeOperation`**：属性，控制图形叠加方式。

### 实用方法

35. **`createLinearGradient(x0, y0, x1, y1)`**：创建线性渐变。
36. **`createRadialGradient(x0, y0, r0, x1, y1, r1)`**：创建径向渐变。
37. **`createConicGradient(startAngle, x, y)`**：创建锥形渐变。
38. **`createPattern(image, repetition)`**：创建图案（平铺图像）。
39. **`isPointInPath(x, y)`**：判断点是否在路径内。
40. **`isPointInStroke(x, y)`**：判断点是否在描边内。
41. **`getLineDash()`**：获取当前虚线模式。
42. **`setLineDash(segments)`**：设置虚线模式（数组）。
43. **`getTransform()`**：获取当前变换矩阵。
44. **`getContextAttributes()`**：获取上下文属性（如 `alpha` 支持）。
45. **`isContextLost()`**：检查上下文是否丢失（如内存不足）。
46. **`drawFocusIfNeeded(element)`**：为焦点元素绘制高亮环。
