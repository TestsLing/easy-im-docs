---
title: 添加黑名单
date: 2020-08-27
---
```php

/**
* @param string $fromAccount 请求为该 user_id 添加黑名单
* @param array  $toAccount   待添加为黑名单的用户 user_id 列表，单次请求的 To_Account 数不得超过1000
*/

$result = $sns->black_list->add('from_account', ['to_account1','to_account2',...]);

```