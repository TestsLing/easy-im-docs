---
title: 群组管理
date: 2020-08-26
---
# 功能说明
添加好友，支持批量添加好友。

# 调用说明

:::tip
$fromAccount：需要为该 UserID 添加好友
$parameterList：好友结构体对象
$toAccount：好友的 UserID
$addSource：加好友来源字段，详情可参见[这里](https://cloud.tencent.com/document/product/269/1501#.E6.A0.87.E9.85.8D.E5.A5.BD.E5.8F.8B.E5.AD.97.E6.AE.B5)
$remark：$fromAccount 对 $toAccount 的好友备注，详情可参见[这里](https://cloud.tencent.com/document/product/269/1501#.E6.A0.87.E9.85.8D.E5.A5.BD.E5.8F.8B.E5.AD.97.E6.AE.B5)
$groupName：$fromAccount 对 $toAccount 的分组信息，添加好友时只允许设置一个分组，因此使用 String 类型即可，详情可参见[这里](https://cloud.tencent.com/document/product/269/1501#.E6.A0.87.E9.85.8D.E5.A5.BD.E5.8F.8B.E5.AD.97.E6.AE.B5)
$addWording：$fromAccount 和 $toAccount 形成好友关系时的附言信息，详情可参见[这里](https://cloud.tencent.com/document/product/269/1501#.E6.A0.87.E9.85.8D.E5.A5.BD.E5.8F.8B.E5.AD.97.E6.AE.B5)
$addType：加好友方式（默认双向加好友方式）：Add_Type_Single 表示单向加好友，Add_Type_Both 表示双向加好友
$forceAddFlags：管理员强制加好友标记：1表示强制加好友，0表示常规加好友方式
:::


```php
use EasyIM\Factory;
use EasyIM\Kernel\ParameterList;
use EasyIM\TencentIM\Sns\Parameter\AddFriendParameter;

$factory            = Factory::tencentIm(config('easyim.tx-im'));

$addFriendParameter = new AddFriendParameter();
//必传
$addFriendParameter->setToAccount($toAccount);
$addFriendParameter->setAddSource($addSource);
//非必传
$addFriendParameter->setRemark($remark);
$addFriendParameter->setGroupName($groupName);
$addFriendParameter->setAddWording($addWording);

$parameterList = new ParameterList($addFriendParameter);
$response      = $factory->sns->addFriend($fromAccount, $parameterList, $addType, $forceAddFlags);
```
