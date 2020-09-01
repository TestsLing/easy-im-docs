---
title: 导入好友
date: 2020-08-26
---
```php
use EasyIM\TencentIM\Kernel\Parameter\TagParameter;
use EasyIM\TencentIM\Sns\Parameter\ImportFriendParameter;

/**
* @param string                $fromAccount               需要为该 user_id 导入好友
* @param ImportFriendParameter ...$importFriendParameters 好友结构体对象
*/

$importFriendParameter = new ImportFriendParameter();
$importFriendParameter->setToAccount('to_account');        //好友的 user_id
$importFriendParameter->setAddSource('AddSource_Type_Id'); //加好友来源字段
$importFriendParameter->setAddWording('加我好友吧');       //形成好友关系时的附言信息
$importFriendParameter->setGroupName(['朋友']);            //分组信息
$importFriendParameter->setRemark('二狗子');               //好友备注
$importFriendParameter->setRemarkTime(1598925928);         //好友备注时间
$importFriendParameter->setAddTime(1598925928);            //形成好友关系的时间

$tagParameter = new TagParameter();
$tagParameter->setTag('Tag_SNS_Custom_Name');             //自定义好友字段的名称
$tagParameter->setValue('Test');                          //自定义好友字段的值
$importFriendParameter->setCustomItem($tagParameter);     //自定义好友数据

$result = $sns->importFriend('from_account', $importFriendParameter...);
```