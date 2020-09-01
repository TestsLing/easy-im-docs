---
title: 删除帐号
date: 2020-08-26
---

```php

/**
* @param array $accounts 需删除的用户user_id或唯一标识
*/

$result = $account->accountDelete(['user_id1', 'user_id2', 'user_id3', ...]);

```