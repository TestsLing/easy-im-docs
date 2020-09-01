---
title: 批量禁言和取消禁言
date: 2020-08-26
---

```php
/**
 * @param string $groupId                   群ID
 * @param array  $membersAccount            禁言用户数组
 * @param int    $shutUpTime                禁言时间 单位/s
 */

$group->operate->forbidMsg('group_1314', ['evan1'], 60);
```