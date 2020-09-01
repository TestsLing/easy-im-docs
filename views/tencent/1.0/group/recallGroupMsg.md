---
title: 撤回群消息
date: 2020-08-26
---


```php

/**
 *
 * @param string    $groupId     群id
 * @param array     $msgSeqList  消息标识列表 一次请求最多可以撤回10条消息 seq
 */
$group->message->recallGroupMsg('group_1314', [18945]);
```