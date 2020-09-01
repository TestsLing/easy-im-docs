---
title: 拉取群历史消息
date: 2020-08-26
---

```php

/**
 * @param string   $groupId         拉取消息的群 ID
 * @param int      $reqMsgNumber    需要拉取的消息条数
 * @param int|null $reqMsgSeq       请求的消息最大 seq，返回 <=ReqMsgSeq 的消息
 */

$group->message->getMsgSimple('group_1314', 100);
```