---
title: 获取用户所加入的群组
date: 2020-08-26
---


```php

use EasyIM\TencentIM\Group\Parameter\Member\ResponseFilterParameter;
use EasyIM\TencentIM\Kernel\Constant\GroupConstant;

/**
 * @param string                       $memberAccount           需要查询的用户帐号
 * @param int|null                     $withHuge                是否获取用户加入的 AVChatRoom(直播群)，0表示不获取，1表示获取。默认为0
 * @param int|null                     $withNoActive            是否获取用户已加入但未激活的 Private（即新版本中 Work，好友工作群) 群信息，0表示不获取，1表示获取。默认为0
 * @param int|null                     $limit                   单次拉取的群组数量，如果不填代表所有群组
 * @param int|null                     $offset                  从第多少个群组开始拉取
 * @param string|null                  $type                    拉取哪种群组类型，例如 Public(陌生人社交群)，Private（即新版本Work，好友工作群)，ChatRoom （即新版本Meeting，会议群），AVChatRoom(直播群)，不填为拉取所有
 * @param ResponseFilterParameter|null $filter                  分别包含 GroupBaseInfoFilter 和 SelfInfoFilter 两个过滤器； GroupBaseInfoFilter 表示需要拉取哪些基础信息字段，详情请参阅 群组系统；SelfInfoFilter 表示需要拉取用户在每个群组中的哪些个人资料，详情请参阅 群组系统
 */

$filter = new ResponseFilterParameter();
$filter->setGroupBaseInfoFilter(["Type", "Name"]);

$response = $group->member->getJoined('evan2', 0, 1, 20, 0, GroupConstant::PUBLIC, $filter);
```