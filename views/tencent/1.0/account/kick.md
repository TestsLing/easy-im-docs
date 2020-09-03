---
title: 失效帐号登录态
date: 2020-08-26
---

# 应用场景

- 该接口适用于开发者判断一个用户为恶意帐号后，可以调用本接口将该用户当前的登录态失效，这样用户使用历史 UserSig 登录即时通信 IM 会失败。

# 使用示例

```php

/**
* @param string $id 需失效的用户user_id或唯一标识
*/

$result = $account->kick('your user_id');

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/3853)