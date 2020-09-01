---
title: 创建群组
date: 2020-08-26
---


```php

use EasyIM\TencentIM\Group\Parameter\Base\CommonParameter;
use EasyIM\TencentIM\Group\Parameter\Member\MemberListParameter;
use EasyIM\TencentIM\Kernel\Constant\GroupConstant;

$member = new MemberListParameter(['Member_Account' => 'evan1']);
$commonParameter = new CommonParameter(['Key' => 'GroupTestData1', 'Value' => 'GroupTestValue1']);


/**
 * @param string             $name                                      群名称
 * @param string|null        $introduction                              群简介
 * @param string|null        $notification                              群公告
 * @param string|null        $faceUrl                                   群头像
 * @param string             $type                                      群类型
 * @param string|null        $ownerAccount                              群主账号
 * @param string|null        $groupId                                   手动指定群id
 * @param int|null           $maxMemberCount                            群最大成员数
 * @param string|null        $applyJoinOption                           加群验证
 * @param ParameterList<MemberListParameter>|null $memberList           群成员自定义字段
 * @param ParameterList<CommonParameter>|null $appDefinedData           群组自定义字段
 */

$group->create(
    '群名称',
    '群简介',
    '群公告',
    '群头像',
    GroupConstant::PUBLIC,
    'test',
    500,
    parameterList($member),
    parameterList($commonParameter),
    GroupConstant::FREE_ACCESS,
    'group_1314'
);


```
