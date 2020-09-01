---
title: 删除分组
date: 2020-08-27
---
```php

/**
* @param string $fromAccount 需要删除该 user_id 的分组
* @param array  $groupName   要删除的分组列表
*/

$result = $sns->group->delGroup('from_account', ['同事',...]);

```