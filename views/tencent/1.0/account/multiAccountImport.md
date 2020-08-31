---
title: 导入多个帐号
date: 2020-08-26
---


```php

/**
* @param array $accounts 需批量导入的用户user_id或唯一标识
*/

$result = $account->multiAccountImport(['user_id1', 'user_id2', 'user_id3', ...]);

```