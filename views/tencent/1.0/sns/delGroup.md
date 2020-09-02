---
title: 删除分组
date: 2020-08-27
---

# 应用场景

- 该接口适用于用户将指定分组删除。

# 使用示例

```php

/**
 * @param string $fromAccount 需要删除该 user_id 的分组
 * @param array  $groupName   要删除的分组列表
 */

$result = $sns->group->delGroup('from_account', ['同事',...]);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/10108)