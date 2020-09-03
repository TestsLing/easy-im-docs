---
title: 删除帐号
date: 2020-08-26
---

# 应用场景

- 该接口适用于删除测试的账号，仅支持删除体验版帐号，帐号删除时，该用户的关系链、资料等数据也会被删除，帐号删除后，该用户的数据将无法恢复，请谨慎使用该接口。

# 使用示例

```php

/**
* @param array $accounts 需删除的用户user_id或唯一标识
*/

$result = $account->accountDelete(['user_id1', 'user_id2', 'user_id3', ...]);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/36443)