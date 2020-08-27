---
title: 导入好友
date: 2020-08-26
---
# 功能说明
支持批量导入单向好友。  
往同一个用户导入好友时建议采用批量导入的方式，避免并发写导致的写冲突。

# 调用说明

:::tip
$fromAccount：需要为该 UserID 添加好友  
$parameterList：好友结构体对象  
$toAccount：好友的 UserID  
$addSource：加好友来源字段，详情可参见[这里](https://cloud.tencent.com/document/product/269/1501#.E6.A0.87.E9.85.8D.E5.A5.BD.E5.8F.8B.E5.AD.97.E6.AE.B5)  
$remark：$fromAccount 对 $toAccount 的好友备注，详情可参见[这里](https://cloud.tencent.com/document/product/269/1501#.E6.A0.87.E9.85.8D.E5.A5.BD.E5.8F.8B.E5.AD.97.E6.AE.B5)  
$remarkTime：$fromAccount 对 $toAccount 的好友备注时间  
$groupName：$fromAccount 对 $toAccount 的分组信息，添加好友时只允许设置一个分组，因此使用 String 类型即可，详情可参见[这里](https://cloud.tencent.com/document/product/269/1501#.E6.A0.87.E9.85.8D.E5.A5.BD.E5.8F.8B.E5.AD.97.E6.AE.B5)  
$addWording：$fromAccount 和 $toAccount 形成好友关系时的附言信息，详情可参见[这里](https://cloud.tencent.com/document/product/269/1501#.E6.A0.87.E9.85.8D.E5.A5.BD.E5.8F.8B.E5.AD.97.E6.AE.B5)  
$addTime：$fromAccount 和 $toAccount 形成好友关系的时间  
:::


```php
use EasyIM\Factory;
use EasyIM\Kernel\ParameterList;
use EasyIM\TencentIM\Sns\Parameter\AddFriendParameter;
use EasyIM\TencentIM\Sns\Parameter\CustomItemParameter;

$custom1 = new CustomItemParameter();
$custom1->setTag('Tag_SNS_Custom_Name');
$custom1->setValue('test');
$custom2 = new CustomItemParameter();
$custom2->setTag('Tag_SNS_Custom_Time');
$custom2->setValue(0);

$factory               = Factory::tencentIm(config('easyim.tx-im'));
$importFriendParameter = new ImportFriendParameter();
//必传
$importFriendParameter->setToAccount($toAccount);
$importFriendParameter->setAddSource($addSource);
//非必传
$importFriendParameter->setRemark($remark);
$importFriendParameter->setRemarkTime($remarkTime);
$importFriendParameter->setGroupName($groupName);
$importFriendParameter->setAddWording($addWording);
$importFriendParameter->setAddTime($addTime);
$importFriendParameter->setCustomItem($custom1,$custom2);

$parameterList = new ParameterList($importFriendParameter);
$response      = $factory->sns->importFriend($fromAccount, $parameterList);
```