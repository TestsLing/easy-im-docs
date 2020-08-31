---
title: 失效帐号登录态
date: 2020-08-26
---

```php

/**
* @param string $id 需失效的用户user_id或唯一标识
*/

$result = $account->kick('your user_id');

```