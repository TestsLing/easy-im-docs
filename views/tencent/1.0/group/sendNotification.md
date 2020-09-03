---
title: 在群组中发送系统通知
date: 2020-08-26
---

# 应用场景

- 该接口适用于群组中发送系统通知，多数用于管理员发送通知消息到全部或部分群成员。

# 使用示例

```php

/**
 *
 * @param string     $groupId           群id
 * @param string     $content           内容 可以放入json
 * @param array|null $toMembersAccount  发送给指定群用户，为null默认群发
 */

$group->message->sendNotification('group_1314', 'hahhh', ['evan2'])

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1630)