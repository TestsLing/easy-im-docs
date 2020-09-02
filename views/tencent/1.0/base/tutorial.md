---
title: 快速开始
date: 2020-08-25
---


# 快速开始

在我们已经安装完成后，即可很快的开始使用它了，当然你还是有必要明白 `PHP` 基本知识，如命名空间等，我这里就不赘述了。



我们所有的应用服务都通过主入口 `EasyIM\Factory` 类来创建：

 ```php

 // 腾讯IM
 $app = Factory::TencentIM($config);

 // ...

 ```

 ## 最后

 希望你在使用本 `SDK` 的时候如果你发现 `SDK` 的不足，欢迎提交 `PR` 或者给我[提建议 & 报告问题](https://github.com/TestsLing/easy-im/issues)。
