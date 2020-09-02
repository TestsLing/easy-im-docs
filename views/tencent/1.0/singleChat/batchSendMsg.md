---
title: 批量发单聊消息
date: 2020-08-26
---

# 应用场景

- 该接口适用于营销类消息、系统通知 tips 等时效性较强的消息。

# 使用示例

```php

/**
 * @param array            $toAccount             消息发送方 user_id
 * @param MessageInterface $message               消息内容
 * @param string           $fromAccount           消息发送方 user_id
 * @param int              $msgLifeTime           消息离线保存时长（单位：秒），最长为7天（604800秒）
 * @param int              $syncOtherMachine      1：把消息同步到 From_Account 在线终端和漫游上，2：消息不同步至 From_Account；
 * @param OfflinePushElem  $offlinePushInfo       离线推送信息配置
 * @param array            $forbidCallbackControl ForbidBeforeSendMsgCallback 表示禁止发消息前回调，ForbidAfterSendMsgCallback 表示禁止发消息后回调
 */

$message = new \EasyIM\TencentIM\Kernel\Messages\TIMTextElem('发送消息');

$message1 = new \EasyIM\TencentIM\Kernel\Messages\TIMTextElem('发送第二条消息');

$combinationMessage = new \EasyIM\TencentIM\Kernel\Messages\TIMCombinationElem($message, $message1);

$result = $singleChat->batchSendMsg(['to_account1', 'to_account2', 'to_account3',...], $combinationMessage);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1612)