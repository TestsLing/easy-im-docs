---
title: 设置成员未读消息计数
date: 2020-08-26
---

```php

/**
 *
 * @param string $groupId           群id
 * @param string $memberAccount     用户id
 * @param int    $unreadMsgNum      该成员的未读消息数
 */
$group->operate->setUnreadMsgNum('group_1314', 'evan2', 5)
```