---
title: 转让群主
date: 2020-08-26
---

# 应用场景

- 该接口适用于转让群主，多数用于群主转让群聊群主。

# 使用示例

```php
/**
 *
 * @param string $groupId                   群ID
 * @param string $newOwnerAccount           新群主用户id
 */

$group->operate->changeOwner('group_1314', 'evan2');

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1633)