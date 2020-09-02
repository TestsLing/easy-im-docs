---
title: 拉取好友
date: 2020-08-27
---

# 应用场景

- 该接口适用于用户拉取好友列表。

# 使用示例

```php

/**
 * @param string $fromAccount      指定要拉取好友数据的用户的 user_id
 * @param int    $startIndex       分页的起始位置
 * @param int    $standardSequence 上次拉好友数据时返回的 StandardSequence
 * @param int    $customSequence   上次拉好友数据时返回的 CustomSequence
 */

$result = $sns->getFriendList('from_account', 0, 0, 0);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1647)