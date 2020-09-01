---
title: 获取群成员详细资料
date: 2020-08-26
---

```php

/**
 * @param string     $groupId               需要拉取成员信息的群组的 ID
 * @param int|null   $limit                 一次最多获取多少个成员的资料，不得超过10000。如果不填，则获取群内全部成员的信息
 * @param int|null   $offset                从第几个成员开始获取，如果不填则默认为0，表示从第一个成员开始获取
 * @param array|null $memberInfo            需要获取哪些信息， 如果没有该字段则为群成员全部资料
 * @param array|null $memberRole            拉取指定身份的群成员资料。如没有填写该字段，默认为所有身份成员资料，成员身份可以为：“Owner”，“Admin”，“Member”
 * @param array|null $appDefinedDataMember  默认情况是没有的。该字段用来群成员维度的自定义字段过滤器，指定需要获取的群成员维度的自定义字段，群成员维度的自定义字段详情请参阅 自定义字段
 */

$response = $group->member->getMember('group_1314', 100, 0, ["Role", "JoinTime", "MsgSeq"], ["Owner", "Member"], ['MemberDefined1']);
```