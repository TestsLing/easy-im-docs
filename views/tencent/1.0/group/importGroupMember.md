---
title: 导入群成员
date: 2020-08-26
---

```php
use EasyIM\TencentIM\Group\Parameter\Import\ImportMemberParameter;

/**
 * @param string                 $groupId               要导入消息的群 ID
 * @param ImportMemberParameter ...$memberParameters    待添加的群成员
 */

$importMemberParameter = new ImportMemberParameter();
$importMemberParameter->setMemberAccount('test');               // 成员id
$importMemberParameter->setJoinTime(time());                    // 加入时间
$importMemberParameter->setRole('Admin');                       // 角色
$importMemberParameter->setUnreadMsgNum(10);                    // 未读消息数量

$group->import->importGroupMember('group_1314', $importMemberParameter);
```