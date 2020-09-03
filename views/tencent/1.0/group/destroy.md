---
title: 解散群组
date: 2020-08-26
---

# 应用场景

- 该接口适用于解散群组，多数用于某种特定情况下：直播间关播时聊天室自动解散，也可以用户手动解散群聊。

# 使用示例

```php

/**
 * @param string $groupId                   群ID
 */

$group->destroy('group_1314');

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1624)