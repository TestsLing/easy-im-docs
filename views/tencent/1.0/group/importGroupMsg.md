---
title: 导入群消息
date: 2020-08-26
---

# 应用场景

- 该接口适用于导入群消息，多数用于APP从其他即时通讯系统迁移到即时通讯IM。

# 使用示例

```php
use EasyIM\TencentIM\Kernel\Messages\TIMFaceElem;
use EasyIM\TencentIM\Kernel\Messages\TIMTextElem;
use EasyIM\TencentIM\Group\Parameter\Import\ImportMsgListParameter;

/**
 * @param string                 $groupId               要导入消息的群 ID
 * @param ImportMsgListParameter ...$msgListParameters  导入的消息列表
 */

$text = new TIMTextElem('hahhhh');
$face = new TIMFaceElem(1, 'abc\u0000\u0001');

$importMsgListParameter = new ImportMsgListParameter();
$importMsgListParameter->setFromAccount('evan2');
$importMsgListParameter->setSendTime(time());
$importMsgListParameter->setMsgBody($text, $face);

// $importMsgListParameter 可以传递多个 可以通过数组使用 ... 写入
$response = $this->group->import->importGroupMsg('group_1314', $importMsgListParameter, $importMsgListParameter);

// or

$messages = [$importMsgListParameter, $importMsgListParameter];
$response = $this->group->import->importGroupMsg('group_1314', ...$messages);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1635)