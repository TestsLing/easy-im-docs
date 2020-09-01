---
title: 添加分组
date: 2020-08-27
---
```php

/**
* @param string $fromAccount 需要为该 user_id 添加新分组
* @param array  $groupName   新增分组列表
* @param array  $toAccount   需要加入新增分组的好友的 user_id 列表
*/

$result = $sns->group->addGroup('from_account', ['同事',...], ['to_account1','to_account2',...]);

```