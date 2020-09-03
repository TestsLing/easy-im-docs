---
title: 获取被禁言群成员列表
date: 2020-08-26
---

# 应用场景

- 该接口适用于获取被禁言群成员列表，多数用于管理员获取被禁言群成员并手动解除禁言。

# 使用示例

```php
/**
 * @param string $groupId                   群ID
 */

$group->operate->getGroupShut('group_1314');

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/2925)