---
title: 查询帐号在线状态
date: 2020-08-26
---
# 应用场景
- 该接口适用于查询用户在线状态。

# 使用示例
```php

/**
* @param array $accounts 需查询的用户user_id或唯一标识
* @param int $isNeedDetail 是否需要返回详细的登录平台信息。0表示不需要，1表示需要
*/

$result = $account->queryState(['user_id1', 'user_id2', 'user_id3', ...], 1);

```
# 应答示例
- 详情请参考[这里](https://cloud.tencent.com/document/product/269/2566)