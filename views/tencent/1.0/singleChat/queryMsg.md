---
title: 查询单聊消息
date: 2020-08-26
---
# 应用场景
- 该接口适用于用户查询与另一个用户聊天记录。

# 使用示例
```php

/**
 * @param string $fromAccount 消息接收方 user_id
 * @param string $toAccount   消息发送方 user_id
 * @param int    $minTime     请求的消息时间范围的最小值
 * @param int    $maxTime     请求的消息时间范围的最大值
 * @param string $lastMsgKey  上一次拉取到的最后一条消息的 MsgKey，续拉时需要填该字段
 */

$result = $singleChat->queryMsg('from_account', 'to_account', 1598853600, 1598854597);

```
# 应答示例
- 详情请参考[这里](https://cloud.tencent.com/document/product/269/42794)