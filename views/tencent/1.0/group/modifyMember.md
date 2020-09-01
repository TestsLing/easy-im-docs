---
title: 修改群成员资料
date: 2020-08-26
---

```php

use EasyIM\TencentIM\Group\Parameter\Base\CommonParameter;

/**
 * @param string             $groupId                                   操作的群 ID
 * @param string             $memberAccount                             要操作的群成员
 * @param string|null        $role                                      成员身份，Admin/Member 分别为设置/取消管理员
 * @param string|null        $msgFlag                                   消息屏蔽类型 AcceptAndNotify 代表接收并提示消息，Discard 代表不接收也不提示消息，AcceptNotNotify 代表接收消息但不提示
 * @param string|null        $nameCard                                  群名片（最大不超过50个字节）
 * @param ParameterList<CommonParameter>|null $appDefinedDataMember     群成员维度的自定义字段，默认情况是没有的，需要开通，详情请参阅 群组系统
 * @param int|null           $shuntUpTime                               需禁言时间，单位为秒，0表示取消禁言
 */

$tag = new CommonParameter(['Key' => 'MemberDefined3', 'Value' => 'ModifyData3']);
$group->member->modifyMember('group_1314', 'evan2', 'Admin', 'AcceptAndNotify', '群名片', parameterList($tag), 10);
```