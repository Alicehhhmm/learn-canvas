# CanvasRenderingContext2D All API 文档

## 实例属性

1. **`canvas`**：返回关联的 `HTMLCanvasElement` 或 `OffscreenCanvas` 对象。
2. **`direction`**：设置文本方向，可选值为 `"ltr"`、`"rtl"` 或 `"inherit"`。
3. **`fillStyle`**：设置填充颜色或样式。
4. **`filter`**：应用 CSS 滤镜效果。
5. **`font`**：设置文本字体。
6. **`fontKerning`**：设置字体字距调整，可选值为 `"auto"`、`"normal"` 或 `"none"`。
7. **`fontStretch`**：设置字体拉伸。
8. **`fontVariantCaps`**：设置字体变体大小写。
9. **`globalAlpha`**：设置全局透明度。
10. **`globalCompositeOperation`**：设置合成操作模式。
11. **`imageSmoothingEnabled`**：设置图像平滑是否启用。
12. **`imageSmoothingQuality`**：设置图像平滑质量。
13. **`letterSpacing`**：设置字母间距。
14. **`lineCap`**：设置线条末端样式。
15. **`lineDashOffset`**：设置虚线偏移量。
16. **`lineJoin`**：设置线条连接样式。
17. **`lineWidth`**：设置线条宽度。
18. **`miterLimit`**：设置斜接限制。
19. **`shadowBlur`**：设置阴影模糊半径。
20. **`shadowColor`**：设置阴影颜色。
21. **`shadowOffsetX`**：设置阴影水平偏移。
22. **`shadowOffsetY`**：设置阴影垂直偏移。
23. **`strokeStyle`**：设置描边颜色或样式。
24. **`textAlign`**：设置文本对齐方式。
25. **`textBaseline`**：设置文本基线。
26. **`textRendering`**：设置文本渲染方式。
27. **`wordSpacing`**：设置单词间距。

## 实例方法

1. **`arc()`**：绘制圆弧。
2. **`arcTo()`**：使用给定的控制点和半径向当前路径添加一个弧。
3. **`beginPath()`**：开始一个新的路径。
4. **`bezierCurveTo()`**：添加一个三次贝塞尔曲线到当前路径。
5. **`clearRect()`**：清除指定矩形区域。
6. **`clip()`**：创建一个剪切路径。
7. **`closePath()`**：闭合当前路径。
8. **`createConicGradient()`**：创建一个锥形渐变。
9. **`createImageData()`**：创建一个图像数据对象。
10. **`createLinearGradient()`**：创建一个线性渐变。
11. **`createPattern()`**：创建一个图案。
12. **`createRadialGradient()`**：创建一个径向渐变。
13. **`drawFocusIfNeeded()`**：绘制焦点环。
14. **`drawImage()`**：绘制图像。
15. **`ellipse()`**：绘制椭圆。
16. **`fill()`**：填充当前路径。
17. **`fillRect()`**：填充矩形。
18. **`fillText()`**：填充文本。
19. **`getContextAttributes()`**：获取上下文属性。
20. **`getImageData()`**：获取图像数据。
21. **`getLineDash()`**：获取当前虚线样式。
22. **`getTransform()`**：获取当前变换矩阵。
23. **`isContextLost()`**：检查上下文是否丢失。
24. **`isPointInPath()`**：检查点是否在路径内。
25. **`isPointInStroke()`**：检查点是否在描边内。
26. **`lineTo()`**：添加一条直线到当前路径。
27. **`measureText()`**：测量文本宽度。
28. **`moveTo()`**：移动路径起点。
29. **`putImageData()`**：将图像数据绘制到画布上。
30. **`quadraticCurveTo()`**：添加一个二次贝塞尔曲线到当前路径。
31. **`rect()`**：添加一个矩形到当前路径。
32. **`reset()`**：重置渲染上下文。
33. **`resetTransform()`**：重置变换矩阵。
34. **`restore()`**：恢复之前保存的绘图状态。
35. **`rotate()`**：旋转当前绘图状态。
36. **`roundRect()`**：绘制一个圆角矩形。
37. **`save()`**：保存当前绘图状态。
38. **`scale()`**：缩放当前绘图状态。
39. **`setLineDash()`**：设置虚线样式。
40. **`setTransform()`**：设置变换矩阵。
41. **`stroke()`**：描边当前路径。
42. **`strokeRect()`**：描边矩形。
43. **`strokeText()`**：描边文本。
44. **`transform()`**：应用变换矩阵。
45. **`translate()`**：平移当前绘图状态。
