---
title: 在群组中发送普通消息
date: 2020-08-26
---

# 应用场景

- 该接口适用于群组发送普通消息，多数用于用户发送普通消息以及发送离线推送。

# 使用示例

如果有在后台配置离线推送的，可以传递推送对象，没有配置的默认传null就好

```php
use EasyIM\TencentIM\Kernel\Messages\TIMTextElem;
use EasyIM\TencentIM\Kernel\OfflinePushInfo\AndroidInfo;
use EasyIM\TencentIM\Kernel\OfflinePushInfo\ApnsInfo;
use EasyIM\TencentIM\Kernel\OfflinePushInfo\OfflinePushElem;

/**
 * @param string               $groupId                     群组id
 * @param MessageInterface     $msgBody                     消息
 * @param string|null          $fromAccount                 发送者用户id
 * @param string|null          $msgPriority                 消息优先级
 * @param array|null           $forbidCallbackControl       消息回调禁止开关，只对单条消息有效，ForbidBeforeSendMsgCallback 表示禁止发消息前回调，ForbidAfterSendMsgCallback 表示禁止发消息后回调
 * @param OfflinePushElem|null $offlinePushInfo             离线推送
 * @param int|null             $onlineOnlyFlag              1表示消息仅发送在线成员，默认0表示发送所有成员，AVChatRoom(直播群)不支持该参数
 */

$text = new TIMTextElem('欢迎来到easyIM!');

$offlinePushElem = new OfflinePushElem([
    "PushFlag" => 0,
    "Title" => "这是推送标题",
    "Desc" => "这是离线推送内容",
    "Ext" => "这是透传的内容",
]);

$androidInfo = new AndroidInfo(["Sound" => "android.mp3", "OPPOChannelID" => "test_OPPO_channel_id"]);
$apns = new ApnsInfo([
    "Sound" => "apns.mp3",
    "BadgeMode" => 1,
    "Title" => "apns title",
    "SubTitle" =>"apns subtitle",
    "Image" => "www.image.com"
]);

$offlinePushElem->setAndroidInfo($androidInfo);
$offlinePushElem->setApnsInfo($apns);

$group->message->sendMsg('group_1314', $text, 'evan2', 1, [], $offlinePushElem, 1);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1629)