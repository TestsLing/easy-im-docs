---
title: 入门
date: 2020-08-25
---

```php
use EasyIM\Factory;

$config = [
    'tx-im' => [
        'sdk_app_id'    => '1400306676',
        'secret'        => '3e373d1ef02ef192ee26c94760681cdf492b4b7f053fc16504d30a77a028e76d',
        'identifier'    => 'admin',                         // 管理员账号
        'expire'        => 86400,                           // 签名过期时间
        // ...
];


$factory = Factory::TencentIM($config['tx-im']);

$group       = $factory->group;
$profile     = $factory->profile;
$speak       = $factory->speak;
$single_chat = $factory->single_chat;
$sns         = $factory->sns;
$account     = $factory->account;
$operate     = $factory->operate;
```

**使用到对象都在这申明了，后续就不再重复申明**