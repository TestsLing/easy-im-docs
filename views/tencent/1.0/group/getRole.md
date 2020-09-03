---
title: 查询用户在群组中的身份
date: 2020-08-26
---

# 应用场景

- 该接口适用于用户查询在群组中的身份，多数用于用户查看自己在群的身份。

# 使用示例

```php

/**
 *
 * @param string $groupId           群id
 * @param array  $memberAccount     要获取的用户id
 */
$group->member->getRole('group_1314', ['evan2']);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1626)