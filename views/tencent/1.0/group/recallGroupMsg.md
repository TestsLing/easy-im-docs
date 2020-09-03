---
title: 撤回群消息
date: 2020-08-26
---

# 应用场景

- 该接口适用于撤回群消息，多数用于用户撤回群消息。

# 使用示例

```php

/**
 *
 * @param string    $groupId     群id
 * @param array     $msgSeqList  消息标识列表 一次请求最多可以撤回10条消息 seq
 */

$group->message->recallGroupMsg('group_1314', [18945]);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/12341)