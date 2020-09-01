---
title: 导入群基础资料
date: 2020-08-26
---


```php
use EasyIM\TencentIM\Group\Parameter\Base\CommonParameter;
use EasyIM\TencentIM\Kernel\Constant\GroupConstant;

/**
 * @param string             $name                      群名称，最长30字节
 * @param string             $type                      群组形态，包括 Public（公开群），Private（私密群）， ChatRoom（聊天室）
 * @param string|null        $ownerAccount              群主 ID，自动添加到群成员中。如果不填，群没有群主
 * @param string|null        $groupId                   群组的 ID
 * @param string|null        $notification              群公告，最长300字节
 * @param string|null        $introduction              群简介，最长240字节
 * @param string|null        $faceUrl                   群头像 URL，最长100字节
 * @param int|null           $maxMemberCount            最大群成员数量
 * @param string|null        $applyJoinOption           申请加群处理方式。包含 FreeAccess（自由加入），NeedPermission（需要验证），DisableApply（禁止加群）
 * @param ParameterList|null $appDefined                默认情况是没有的。开通群组维度的自定义字段详情请参见 自定义字段
 * @param int|null           $createTime                群组的创建时间
 */

$tag = new CommonParameter(['Key' => 'MemberDefined3', 'Value' => 'ModifyData3']);
$group->import->importGroup(
            'EasyIM-2群',
            GroupConstant::PUBLIC,
            'test',
            null,
            'easyIM群公告',
            'easyIM群简介',
            'www.easyim.cn/profile.jpg',
            500,
            GroupConstant::FREE_ACCESS,
            parameterList($tag),
            time() - 1
        );
```