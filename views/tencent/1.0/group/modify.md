---
title: 修改群基础资料
date: 2020-08-26
---

# 应用场景

- 该接口适用于修改群基础资料，多数用于设置群名称、群公告、群简介之类，也可用于设置全体禁言。

# 使用示例

```php
use EasyIM\TencentIM\Group\Parameter\Base\CommonParameter;
use EasyIM\TencentIM\Kernel\Constant\GroupConstant;

/**
 * @param string             $groupId                               需要修改基础信息的群组的 ID
 * @param string|null        $name                                  群名称，最长30字节
 * @param string|null        $introduction                          群简介，最长240字节
 * @param string|null        $notification                          群公告，最长300字节
 * @param string|null        $faceUrl                               群头像 URL，最长100字节
 * @param int|null           $maxMemberNum                          最大群成员数量
 * @param string|null        $applyJoinOption                       申请加群处理方式。包含 FreeAccess（自由加入），NeedPermission（需要验证），DisableApply（禁止加群）
 * @param ParameterList<CommonParameter>|null $appDefinedData       默认情况是没有的。开通群组维度的自定义字段详情请参见 自定义字段
 * @param string|null        $shutUpAll                             设置全员禁言（选填）:"On"开启，"Off"关闭
 */

$tag = new CommonParameter(['Key' => 'MemberDefined3', 'Value' => 'ModifyData3']);
$group->modify('group_1314', 'EasyIM-1群', '欢迎使用easyIM','easyIM群公告', 'www.easyim.cn/profile.jpg', 500, 'Off', GroupConstant::FREE_ACCESS, parameterList($tag))

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1620)