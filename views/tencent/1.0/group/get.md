---
title: 获取群详细资料
date: 2020-08-26
---

# 应用场景

- 该接口适用于获取群详情，用于展示群资料页面以及方便设置群资料。

# 使用示例

```php
/**
 * @param array      $groupIds                              群id数组
 * @param array|null $groupBaseInfoFilter                   基础信息字段过滤器，指定需要获取的基础信息字段，基础信息字段详情请参阅 https://cloud.tencent.com/document/product/269/1502#.E7.BE.A4.E5.9F.BA.E7.A1.80.E8.B5.84.E6.96.99
 * @param array|null $memberInfoFilter                      成员信息字段过滤器，指定需要获取的成员信息字段，成员信息字段详情请参阅 群成员资料 https://cloud.tencent.com/document/product/269/1502#.E7.BE.A4.E6.88.90.E5.91.98.E8.B5.84.E6.96.99
 * @param array|null $appDefinedDataFilterGroup             该字段用来群组维度的自定义字段过滤器，指定需要获取的群组维度的自定义字段，详情请参阅 自定义字段 https://cloud.tencent.com/document/product/269/1502#.E8.87.AA.E5.AE.9A.E4.B9.89.E5.AD.97.E6.AE.B5
 * @param array|null $appDefinedDataFilterGroupMember       该字段用来群成员维度的自定义字段过滤器，指定需要获取的群成员维度的自定义字段，详情请参阅 自定义字段 https://cloud.tencent.com/document/product/269/1502#.E8.87.AA.E5.AE.9A.E4.B9.89.E5.AD.97.E6.AE.B5
 */

$group->get(
            ['group_1314'],
            ["Type", "Name", "Introduction", "Notification"], ["Account", "Role"],
            ["GroupTestData1", "GroupTestData2"],
            ["MemberDefined2", "MemberDefined1"]
        );

```

# 应答示例

- 详情请参考[这里](https://cloud.tencent.com/document/product/269/1616)