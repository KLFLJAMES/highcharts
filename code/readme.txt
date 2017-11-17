本目录包含所有 Highcharts 相关文件及源代码。

另外包含两个版本的 Highcharts，传统的 JS 版本和 CSS 版本，两者的文件引用及区别说明如下：

1、JS 版本的 Highcharts 所有相关文件存放在当前目录，即下载包的 /code 目录，如 /code/highcharts.js。
  在这个版本中，所有配置是写在 JS 中的，也就是大家所熟悉的代码配置。

2、CSS 版本的 Highcharts 所有相关文件存放在 /code/js/ 目录下，如 /code/js/highcharts.js。
  使用这个版本时，必须引入 highcharts.css 并且样式必须写在 css 中，如果没有引入 highcharts.js 或写任何样式，那么图表会渲染出一整块黑色。

3、CSS 版本默认的样式文件在  /code/css/highcharts.css，这个文件是由 SCSS 文件转换而来，对应的源文件可以在 Highcharts 官方 github 仓库中可以找到。