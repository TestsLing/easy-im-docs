---
title: 查询用户在群组中的身份
date: 2020-08-26
---

```php

/**
 *
 * @param string $groupId           群id
 * @param array  $memberAccount     要获取的用户id
 */
$group->member->getRole('group_1314', ['evan2']);

```