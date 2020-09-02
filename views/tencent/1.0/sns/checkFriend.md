---
title: 校验好友
date: 2020-08-27
---

# 应用场景

- 该接口适用于用户判断某用户是否存在好友关系。

# 使用示例

```php
use EasyIM\TencentIM\Kernel\Constant\SnsConstant;

/**
 * @param string $fromAccount 需要校验该 user_id 的好友
 * @param array  $toAccount   请求校验的好友的 user_id 列表
 * @param string $checkType   校验模式
 */

$result = $sns->checkFriend('from_account', ['to_account1','to_account2',...], SnsConstant::CHECK_RESULT_TYPE_BOTH);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1646)