---
title: 拉取黑名单
date: 2020-08-27
---
```php

/**
* @param string $fromAccount  需要拉取该 user_id 的黑名单
* @param int    $startIndex   拉取的起始位置
* @param int    $maxLimited   每页最多拉取的黑名单数
* @param int    $lastSequence 上一次拉黑名单时后台返回给客户端的 Seq，初次拉取时为0
*/

$result = $sns->black_list->pull('from_account', 0, 10, 0);

```