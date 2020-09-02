---
title: 配置
date: 2020-08-25
---

下面是一个完整的配置样例

```php
use EasyIM\Factory;

$config = [
    'tx-im' => [
        'sdk_app_id'    => '1400306676',                    // sdkAppId
        'secret'        => '3e373d1ef02ef192ee26c94760681cdf492b4b7f053fc16504d30a77a028e76d',  // secret
        'identifier'    => 'admin',                         // 管理员账号
        'expire'        => 86400,                           // 签名过期时间
        
        
        /**
         * 指定 API 调用返回结果的类型：array(default)/collection/object/raw/自定义类名
         * 使用自定义类名时，构造函数将会接收一个 `EasyWeChat\Kernel\Http\Response` 实例
         */
        'response_type' => 'array',

        /**
         * 日志配置
         *
         * level: 日志级别, 可选为：
         *         debug/info/notice/warning/error/critical/alert/emergency
         * path：日志文件位置(绝对路径!!!)，要求可写权限
         */

        'log'           => [
            'default'  => 'dev', // 默认使用的 channel，生产环境可以改为下面的 prod
            'channels' => [
                // 测试环境
                'dev'  => [
                    'driver' => 'single',
                    'path'   => '/tmp/logs/easyim.log',
                    'level'  => 'debug',
                ],
                // 生产环境
                'prod' => [
                    'driver' => 'daily',
                    'path'   => '/tmp/logs/easyim.log',
                    'level'  => 'info',
                ],
            ],
        ],


        /**
         * 接口请求相关配置，超时时间等，具体可用参数请参考：
         * http://docs.guzzlephp.org/en/stable/request-config.html
         *
         * - retries: 重试次数，默认 1，指定当 http 请求失败时重试的次数。
         * - retry_delay: 重试延迟间隔（单位：ms），默认 500
         * - log_template: 指定 HTTP 日志模板，请参考：https://github.com/guzzle/guzzle/blob/master/src/MessageFormatter.php
         */
        'http'          => [
            'max_retries' => 1,
            'retry_delay' => 500,
            'timeout'     => 5.0,
            'base_uri' => 'https://console.tim.qq.com/v4/',
        ],
    ]
];

$factory = Factory::TencentIM($config['tx-im']);
```


## 日志配置

你可以配置多个日志的 `channel` ，每个 `channel` 里的 `driver` 对应不同的日志驱动，内置可用的 `driver` 如下表：

名称 | 描述
------------- | -------------
`stack` | 复合型，可以包含下面多种驱动的混合模式
`single` | 基于 `StreamHandler` 的单一文件日志，参数有 `path`，`level`
`daily` | 基于 `RotatingFileHandler` 按日期生成日志文件，参数有 `path`，`level`，`days`(默认 7 天)
`slack` | 基于 `SlackWebhookHandler` 的 Slack 组件，参数请参考源码：[LogManager.php](https://github.com/overtrue/wechat/blob/master/src/Kernel/Log/LogManager.php#L247)
`syslog` | 基于 `SyslogHandler` Monolog 驱动，参数有 `facility` 默认为 `LOG_USER`，`level`
`errorlog` | 记录日志到系统错误日志，基于 `ErrorLogHandler`，参数有 `type`，默认为 `ErrorLogHandler::OPERATING_SYSTEM`

### 自定义日志驱动

由于日志使用的是 [Monolog](https://github.com/Seldaek/monolog)，所以，除了默认的文件式日志外，你可以自定义日志处理器：

```php
use Monolog\Logger;
use Monolog\Handler\RotatingFileHandler;


// 注册自定义日志
$app->logger->extend('mylog', function($app, $config){
    return new Logger($this->parseChannel($config), [
        $this->prepareHandler(new RotatingFileHandler(
            $config['path'], $config['days'], $this->level($config)
        )),
    ]);
});
```

> {info} 在你自定义的闭包函数中，可以使用 `EasyWeChat\Kernel\Log\LogManager` 中的方法，具体请查看 SDK 源代码。

配置文件中在 `driver` 部分即可使用你自定义的驱动了：

```php
'log' => [
    'default' => 'dev', // 默认使用的 channel，生产环境可以改为下面的 prod
    'channels' => [
        // 测试环境
        'dev' => [
            'driver' => 'mylog',
            'path' => '/tmp/easywechat.log',
            'level' => 'debug', 
            'days' => 5,
        ],

        //...
    ],
],
```
