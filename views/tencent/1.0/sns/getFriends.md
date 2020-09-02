---
title: 拉取指定好友
date: 2020-08-27
---

# 应用场景

- 该接口适用于用户获取好友信息。

# 使用示例

```php

/**
 * @param string $fromAccount 指定要拉取好友数据的用户的 user_id
 * @param array  $toAccount   好友的 user_id 列表
 * @param array  $tagList     指定要拉取的资料字段及好友字段
 */

$result = $sns->getFriends('from_account', ['to_account1','to_account2',...], ['Tag_SNS_IM_Remark']);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/8609)