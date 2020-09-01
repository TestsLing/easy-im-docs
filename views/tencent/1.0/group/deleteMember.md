---
title: 删除群成员
date: 2020-08-26
---


```php

/**
 *
 * @param string      $groupId           群id
 * @param array       $memberList        待删除的群成员
 * @param int|null    $silence           是否静默删人。0表示非静默删人，1表示静默删人。静默即删除成员时不通知群里所有成员，只通知被删除群成员。不填写该字段时默认为0
 * @param string|null $reason            踢出用户原因
 */
$group->member->deleteMember('group_1314', ['evan1'], 0, '不写代码！');

```