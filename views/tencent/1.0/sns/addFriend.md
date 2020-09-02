---
title: 添加好友
date: 2020-08-26
---

# 应用场景

- 该接口适用于用户添加好友。

# 使用示例

```php
use EasyIM\TencentIM\Kernel\Constant\SnsConstant;
use EasyIM\TencentIM\Sns\Parameter\AddFriendParameter;

/**
 * @param string             $fromAccount 需要为该 user_id 添加好友
 * @param string             $addType 加好友方式（默认双向加好友方式）Add_Type_Single 表示单向加好友，Add_Type_Both 表示双向加好友
 * @param int                $forceAddFlags 管理员强制加好友标记：1表示强制加好友，0表示常规加好友方式
 * @param AddFriendParameter $addFriendParameters 好友结构体对象
 */

$addFriendParameter = new AddFriendParameter();
$addFriendParameter->setToAccount('to_account');        //好友的 user_id 必填
$addFriendParameter->setAddSource('AddSource_Type_Id'); //加好友来源字段 必填
$addFriendParameter->setAddWording('加我好友吧');       //形成好友关系时的附言信息
$addFriendParameter->setGroupName('朋友');              //添加好友时只允许设置一个分组
$addFriendParameter->setRemark('二狗子');               //好友备注

$result = $sns->addFriend('from_account', SnsConstant::ADD_TYPE_BOTH, SnsConstant::NORMAL_ADD_FRIEND, $addFriendParameter...);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1643)