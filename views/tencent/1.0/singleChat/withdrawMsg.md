---
title: 撤回单聊消息
date: 2020-08-26
---
```php

/**
* @param string $fromAccount 消息接收方 user_id
* @param string $toAccount   消息发送方 user_id
* @param string $msgKey      待撤回消息的唯一标识
*/

$result = $singleChat->withdrawMsg('from_account', 'to_account', 'msg_key');

```