---
title: 删除指定用户发送的消息
date: 2020-08-26
---

删除群消息，删除最近1000条消息内某个人发送的消息。

```php
/**
 *
 * @param string $groupId                   群ID
 * @param string $senderAccount             被删除消息的发送者 ID
 */

$group->message->deleteGroupMsg('group_1314', 'evan2');
```