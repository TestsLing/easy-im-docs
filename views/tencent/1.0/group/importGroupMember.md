---
title: 导入群成员
date: 2020-08-26
---

# 应用场景

- 该接口适用于导入群成员，多数用于APP从其他即时通讯系统迁移到即时通讯IM。

# 使用示例

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

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1636)