---
title: 暗色模式适配
date: 2019-12-29
---

::: tip
主题从 1.2.0 之后，适配系统的暗色主题模式，如果你有一些关于本主题的插件或者自定义的组件的话，你需要对暗色模式进行适配。
:::

## 初始化 <Badge text="1.3.0+" />

暗色模式默认开启，为 `auto` 模式，显示模式调节按钮，你也可以自定义初始化配置：

```js
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: false // 默认 true，false 不显示模式调节按钮，true 则显示
  }
}  
```

## 颜色变量

这里是主题提供的颜色变量，请根据自己的需求选择相应的颜色变量，替换你的组件里的颜色值：

| 变量 | 亮色模式 | 暗色模式 |
|-|-|-|
|--default-color-10|rgba(0, 0, 0, 1)|rgba(255, 255, 255, 1)|
|--default-color-9|rgba(0, 0, 0, .9)|rgba(255, 255, 255, .9)|
|--default-color-8|rgba(0, 0, 0, .8)|rgba(255, 255, 255, .8)|
|--default-color-7|rgba(0, 0, 0, .7)|rgba(255, 255, 255, .7)|
|--default-color-6|rgba(0, 0, 0, .6)|rgba(255, 255, 255, .6)|
|--default-color-5|rgba(0, 0, 0, .5)|rgba(255, 255, 255, .5)|
|--default-color-4|rgba(0, 0, 0, .4)|rgba(255, 255, 255, .4)|
|--default-color-3|rgba(0, 0, 0, .3)|rgba(255, 255, 255, .3)|
|--default-color-2|rgba(0, 0, 0, .2)|rgba(255, 255, 255, .2)|
|--default-color-1|rgba(0, 0, 0, .1)|rgba(255, 255, 255, .1)|
|--background-color|#fff|#25272a|
|--box-shadow|0 1px 6px 0 rgba(0, 0, 0, 0.2)|0 1px 6px 0 rgba(0, 0, 0, .9)|
|--text-color|#2c3e50|#aaa|
|--border-color|#eaecef|rgba(0, 0, 0, .3)|
|--code-color|rgba(27, 31, 35, 0.05)|rgba(0, 0, 0, .3)|
|--mask-color|#888|#000|

## 适配方法

```stylus
.title {
  color: var(--text-color)
}
```
