---
title: 拉取好友
date: 2020-08-27
---
```php

/**
* @param string $fromAccount      指定要拉取好友数据的用户的 user_id
* @param int    $startIndex       分页的起始位置
* @param int    $standardSequence 上次拉好友数据时返回的 StandardSequence
* @param int    $customSequence   上次拉好友数据时返回的 CustomSequence
*/

$result = $sns->getFriendList('from_account', 0, 0, 0);

```