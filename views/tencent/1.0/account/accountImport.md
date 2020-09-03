---
title: 导入单个帐号
date: 2020-08-26
---

# 应用场景

- 该接口适合于用户在注册账号时使用，将用户的唯一标识导入腾讯IM中，为该账号创建一个对应的内部ID。

# 使用示例

```php

/**
 *  @param string $account 需导入的用户user_id或唯一标识
 *  @param string $name 需要导入的用户昵称
 *  @param string $avatar 需要导入的用户头像
 */

 $result = $account->accountImport('your user_id', 'your name', 'your avatar');

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1608)