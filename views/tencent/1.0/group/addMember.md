---
title: 增加群成员
date: 2020-08-26
---

# 应用场景

- 该接口适用于添加群成员，多数用于群管理员同意新成员加入并设置是否通知群成员。

# 使用示例

```php
use EasyIM\TencentIM\Group\Parameter\Member\MemberListParameter;

$member1 = new MemberListParameter(['Member_Account' => 'evan1']);
$member2 = new MemberListParameter(['Member_Account' => 'evan2']);

/**
 *
 * @param string        $groupId                            操作的群 ID
 * @param ParameterList<MemberListParameter> $memberList    待添加的群成员数组 MemberListParameter对象
 * @param int|null      $silence                            是否静默加人。0：非静默加人；1：静默加人。不填该字段默认为0
 */

$group->member->addMember('group_1314', parameterList($member1, $member2, 0));

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1621)