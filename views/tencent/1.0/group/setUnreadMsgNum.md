---
title: 设置成员未读消息计数
date: 2020-08-26
---

# 应用场景

- 该接口适用于设置成员未读消息计数，多数用于APP从其他即时通讯系统迁移到即时通讯IM。

# 使用示例

```php

/**
 *
 * @param string $groupId           群id
 * @param string $memberAccount     用户id
 * @param int    $unreadMsgNum      该成员的未读消息数
 */

$group->operate->setUnreadMsgNum('group_1314', 'evan2', 5);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1637)