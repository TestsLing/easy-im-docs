---
title: 校验黑名单
date: 2020-08-27
---

# 应用场景

- 该接口适用于用户聊天时判断是否存在黑名单列表内。

# 使用示例

```php
use EasyIM\TencentIM\Kernel\Constant\SnsConstant;

/**
 * @param string $fromAccount 需要校验该 user_id 的黑名单
 * @param array  $toAccount   待校验的黑名单的 user_id 列表，单次请求的 To_Account 数不得超过1000
 * @param string $checkType   校验模式
 */

$result = $sns->black_list->check('from_account', ['to_account1','to_account2',...], SnsConstant::BLACK_CHECK_RESULT_TYPE_BOTH);

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/3725)