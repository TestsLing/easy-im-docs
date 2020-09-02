---
title: 撤回单聊消息
date: 2020-08-26
---
# 应用场景
- 该接口适用于用户撤回与另一个用户聊天记录，也可以撤回营销类消息、系统通知 tips 等时效性较强的消息。

# 使用示例
```php

/**
 * @param string $fromAccount 消息接收方 user_id
 * @param string $toAccount   消息发送方 user_id
 * @param string $msgKey      待撤回消息的唯一标识
 */

$result = $singleChat->withdrawMsg('from_account', 'to_account', 'msg_key');

```
# 应答示例
- 详情请参考[这里](https://cloud.tencent.com/document/product/269/38980)
