---
title: 更新好友
date: 2020-08-27
---
# 应用场景
- 该接口适用于用户获取好友信息，更新数据库信息。

# 使用示例
```php
use EasyIM\TencentIM\Kernel\Parameter\TagParameter;
use EasyIM\TencentIM\Sns\Parameter\UpdateFriendParameter;

/**
 * @param string                $fromAccount               需要为该 user_id 更新好友
 * @param UpdateFriendParameter ...$updateFriendParameters 好友结构体对象
 */

$updateFriendParameter = new UpdateFriendParameter();
$updateFriendParameter->setToAccount('to_account'); //好友的 user_id
$tagParameter = new TagParameter();
$tagParameter->setTag('Tag_SNS_Custom_Name');       //自定义好友字段的名称
$tagParameter->setValue('test1');                   //自定义好友字段的值
$updateFriendParameter->setSnsItem($tagParameter);  //自定义好友数据

$result = $sns->updateFriend('from_account', $updateFriendParameter...);

```

# 应答示例
- 详情请参考[这里](https://cloud.tencent.com/document/product/269/12525)