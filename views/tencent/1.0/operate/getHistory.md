---
title: 下载最近消息记录
date: 2020-08-26
---

```php

/**
 * @param string $chatType 消息类型，C2C 表示单发消息 Group 表示群组消息
 * @param string $msgTime 需要下载的消息记录的时间段，2015120121表示获取2015年12月1日21:00 - 21:59的消息的下载地址。该字段需精确到小时。每次请求只能获取某天某小时的所有单发或群组消息记录
 */

$operate->getHistory('C2C', 2020080121)

```
