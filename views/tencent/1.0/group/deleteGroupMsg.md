---
title: 删除指定用户发送的消息
date: 2020-08-26
---

# 应用场景

- 该接口适用于删除指定用户发送的消息，多数用于管理发现恶意用户言论并删除1000条发送消息。

# 使用示例

删除群消息，删除最近1000条消息内某个人发送的消息。

```php
/**
 *
 * @param string $groupId                   群ID
 * @param string $senderAccount             被删除消息的发送者 ID
 */

$group->message->deleteGroupMsg('group_1314', 'evan2');

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/2359)