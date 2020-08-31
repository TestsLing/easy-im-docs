---
title: 导入单聊消息
date: 2020-08-26
---
```php

/**
* @param string           $toAccount         消息发送方 user_id
* @param string           $fromAccount       消息接收方 user_id
* @param MessageInterface $message           消息内容
* @param int              $syncFromOldSystem 1表示实时消息导入，消息加入未读计数，2表示历史消息导入，消息不计入未读
*/

$message  = new \EasyIM\TencentIM\Kernel\Messages\TIMCustomElem('发送自定义消息');
$message1 = new \EasyIM\TencentIM\Kernel\Messages\TIMTextElem('发送消息');

$combinationMessage = new \EasyIM\TencentIM\Kernel\Messages\TIMCombinationElem($message, $message1);

$result = $singleChat->importMsg('to_account', 'from_account', $combinationMessage);

```