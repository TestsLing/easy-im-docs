---
title: 删除所有好友
date: 2020-08-27
---
```php
use EasyIM\TencentIM\Kernel\Constant\SnsConstant;

/**
* @param string $fromAccount 指定要清除好友数据的用户的 UserID
* @param string $deleteType  删除模式，默认删除单向好友
*/

$result = $sns->deleteAllFriend('from_account', SnsConstant::DELETE_TYPE_BOTH);

```