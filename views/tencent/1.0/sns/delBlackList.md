---
title: 删除黑名单
date: 2020-08-27
---

# 应用场景

- 该接口适用于用户删除黑名单。

# 使用示例

```php

/**
 * @param string $fromAccount 需要删除该 user_id 的黑名单
 * @param array  $toAccount   待删除的黑名单的 user_id 列表，单次请求的 To_Account 数不得超过1000
 */

$result = $sns->black_list->del('from_account', ['to_account1','to_account2',...]);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/3719)