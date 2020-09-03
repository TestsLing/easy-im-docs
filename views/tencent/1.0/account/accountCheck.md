---
title: 查询帐号
date: 2020-08-26
---

# 应用场景

- 该接口适用于老用户判断是否已导入腾讯IM，否则重新使用导入接口导入，支持批量查询。

# 使用示例

```php

/**
* @param array $accounts 需查询的用户user_id或唯一标识
*/

$result = $account->accountCheck(['user_id1', 'user_id2', 'user_id3', ...]);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/38417)