---
title: 添加黑名单
date: 2020-08-27
---

# 应用场景

- 该接口适用于用户添加黑名单。

# 使用示例

```php

/**
 * @param string $fromAccount 请求为该 user_id 添加黑名单
 * @param array  $toAccount   待添加为黑名单的用户 user_id 列表，单次请求的 To_Account 数不得超过1000
 */

$result = $sns->black_list->add('from_account', ['to_account1','to_account2',...]);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/3718)