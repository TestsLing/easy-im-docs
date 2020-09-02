---
title: 添加分组
date: 2020-08-27
---

# 应用场景

- 该接口适用于用户将指定好友加入到新增分组中。

# 使用示例

```php

/**
 * @param string $fromAccount 需要为该 user_id 添加新分组
 * @param array  $groupName   新增分组列表
 * @param array  $toAccount   需要加入新增分组的好友的 user_id 列表
 */

$result = $sns->group->addGroup('from_account', ['同事',...], ['to_account1','to_account2',...]);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/10107)