---
home: true
heroImage: /icon_vuepress_reco.png
heroImageStyle: {
  maxWidth: '200px',
  width: '100%',
  display: block,
  margin: '5rem auto 2rem',
  borderRadius: '1rem',
}
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
features:
- title: 生命
  details: 就像一盒巧克力，结果往往出人意料
- title: 希望
  details: 是一个好东西，也许是最好的，好东西是不会消亡的
- title: 那时候
  details: 我只会想自己想要什么，从不想自己拥有什么
---

## Requirement

1. PHP >= 7.2
2. [Composer](https://getcomposer.org/)
3. Openssl拓展

## Installation

```shell
$ composer require longing/easy-im:~1.0 -vvv
```
## Usage

基本使用（以服务端为例）:

```php
use EasyIM\Factory;

$options = [
    'sdk_app_id'    => '1400306676',                                                        // sdkAppId
    'secret'        => '3e373d1ef02ef192ee26c94760681cdf492b4b7f053fc16504d30a77a028e76d',  // secret
    'identifier'    => 'admin',                                                             // 管理员账号
    'expire'        => 86400,                                                               // 签名过期时间
    // ...
];

$app = Factory::TencentIM($options);
```

[更多](https://github.com/TestsLing/easy-im)


# Status 

欢迎查阅 [项目进度板](https://github.com/TestsLing/easy-im/projects)。


# Contributors

这个项目的存在多亏了所有的贡献者。 

This project exists thanks to all the people who contribute. 

<a href="https://github.com/TestsLing"><img style="width:82px;hieght:82px;" src="https://avatars1.githubusercontent.com/u/40593646?s=400&u=23b56590213003dbaea677cb14b1fc7f8cc62209&v=4" /></a>
<a href="https://github.com/DDDecade0715"><img style="width:82px;hieght:82px;" src="https://avatars1.githubusercontent.com/u/29270630?s=400&u=91f7c75ae86ddfa650d55e9a6874def716829fbd&v=4" /></a>

# Sponsor 赞助

> 🙏 感谢所有金主爸爸，如有意向请通过 Open Collective 赞助我们！

# Backers 支持者

感谢我们所有的支持者！ 

Thank you to all our backers! 🙏 [[Become a backer]()]


# License

MIT

# 鸣谢

- [午后南杂](https://www.recoluan.com)          感谢如此优秀的博客框架
- [easywechat](https://www.easywechat.com)     感谢如此优秀的`Wechat SDK`