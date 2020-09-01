---
title: 在群组中发送系统通知
date: 2020-08-26
---


```php

/**
 *
 * @param string     $groupId           群id
 * @param string     $content           内容 可以放入json
 * @param array|null $toMembersAccount  发送给指定群用户，为null默认群发
 */
$group->message->sendNotification('group_1314', 'hahhh', ['evan2'])
```