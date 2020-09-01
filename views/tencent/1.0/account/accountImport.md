---
title: 导入单个帐号
date: 2020-08-26
---

```php

/**
 *  @param string $account 需导入的用户user_id或唯一标识
 *  @param string $name 需要导入的用户昵称
 *  @param string $avatar 需要导入的用户头像
 */

 $result = $account->accountImport('your user_id', 'your name', 'your avatar');

```