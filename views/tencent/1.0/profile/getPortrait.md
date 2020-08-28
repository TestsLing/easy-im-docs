---
title: 拉取资料
date: 2020-08-26
---

Tag 支持[标配资料字段](https://cloud.tencent.com/document/product/269/1500#.E6.A0.87.E9.85.8D.E8.B5.84.E6.96.99.E5.AD.97.E6.AE.B5)
和[自定义资料字段](https://cloud.tencent.com/document/product/269/1500#.E8.87.AA.E5.AE.9A.E4.B9.89.E8.B5.84.E6.96.99.E5.AD.97.E6.AE.B5)

```php

/**
 * @param array $accounts 需要拉取这些 UserID 的资料 注意：每次拉取的用户数不得超过100，避免因回包数据量太大以致回包失败
 * @param array $tags 指定要拉取的资料字段的 Tag
 */

$tagList = [
   "Tag_Profile_IM_Nick",
   "Tag_Profile_IM_AllowType",
   "Tag_Profile_IM_SelfSignature",
   "Tag_Profile_Custom_Test"
];

$profile->getPortrait(['id1', 'id2'], tagList)

```
