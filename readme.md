Highcharts JS 中文版

### 此仓库存在的目的

1. 修改默认配置，使其更适合中文环境中使用，例如时区问题、时间格式化等内容
2. 生成中文 API 文档，详见下面说明

### 如何生成中文 API 文档

[官方的文档](https://api.highcharts.com/highcharts/) 是通过 `jsDoc` 生成的，对应仓库是：https://github.com/highcharts/api-docs，其本质是根据 JS 代码中的注释生成文档，所以我们只需要将本仓库的中的 JS 代码中注释进行修改，然后通过对应的工具即可生成需要的中文文档，使用说明见：https://github.com/highcharts/highcharts/tree/master/tools/jsdoc


    git clone https://github.com/hcharts/highcharts
    git clone https://github.com/highcharts/api-docs
    git clone https://github.com/highcharts/highcharts-docstrap

    cd  highcharts 
    gulp jsdoc --watch

### 使用方法

1、同步官方仓库代码

    git fetch upstream
    git merge upstream/master
