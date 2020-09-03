---
title: 设置全局禁言
date: 2020-08-26
---

# 应用场景

- 该接口适用于设置全局禁言，多数用于管理员发现恶意用户并设置全局禁言。

# 使用示例

```php

/**
 *  @param string $account                 需要设置的用户
 *  @param int    $c2cMsgNoSpeakingTime    单聊禁言时长 默认为0
 *  @param int    $groupMsgNoSpeakingTime  群组禁言时长 默认为0
 */

$speak->setGlobalNoSpeaking('tx_123')

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/4230)