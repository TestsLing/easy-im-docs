---
title: 批量禁言和取消禁言
date: 2020-08-26
---

# 应用场景

- 该接口适用于批量禁言和取消禁言，多数用于直播间管理员批量禁言违规用户以及解除禁言用户。

# 使用示例

```php
/**
 * @param string $groupId                   群ID
 * @param array  $membersAccount            禁言用户数组
 * @param int    $shutUpTime                禁言时间 单位/s
 */

$group->operate->forbidMsg('group_1314', ['evan1'], 60);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1626)