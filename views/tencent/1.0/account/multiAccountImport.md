---
title: 导入多个帐号
date: 2020-08-26
---

# 应用场景

- 该接口适用于用户迁移账号到腾讯IM时使用，将用户的唯一标识导入腾讯IM中，为该账号创建一个对应的内部ID。

# 使用示例

```php

/**
* @param array $accounts 需批量导入的用户user_id或唯一标识
*/

$result = $account->multiAccountImport(['user_id1', 'user_id2', 'user_id3', ...]);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/4919)