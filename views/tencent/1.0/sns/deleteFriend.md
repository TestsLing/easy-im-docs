---
title: 删除好友
date: 2020-08-27
---
```php
use EasyIM\TencentIM\Kernel\Constant\SnsConstant;

/**
*
* @param string $fromAccount 需要删除该 user_id 的好友
* @param array  $toAccount   待删除的好友的 UserID 列表
* @param string $deleteType  删除模式，默认删除单向好友
*/

$result = $sns->deleteFriend('from_account', ['to_account1','to_account2',...], SnsConstant::DELETE_TYPE_BOTH);

```