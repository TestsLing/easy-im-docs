---
title: 设置资料
date: 2020-08-26
---
# 应用场景
- 该接口适用于设置用户个人信息。

# 使用示例
```php

use EasyIM\TencentIM\Kernel\Parameter\TagParameter;

/**
 * @param array $accounts 需要拉取这些 UserID 的资料 注意：每次拉取的用户数不得超过100，避免因回包数据量太大以致回包失败
 * @param array $tags 指定要拉取的资料字段的 Tag
 */

$tag1 = new TagParameter(['Tag' => 'Tag_Profile_IM_Nick', 'Value' => 'hi easyIM']);
$tag2 = new TagParameter(['Tag' => 'Tag_Profile_IM_SelfSignature', 'Value' => 'hi easyIM!!!']);


$profile->getPortrait(['id1', 'id2'], $tag1, $tag2);

```
# 应答示例
- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1640)