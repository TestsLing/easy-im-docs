module.exports = {
  'zh': Object.assign({}, {
    '/views/tencent/1.0/': [
      {
        title: '腾讯IM开始使用',
        collapsable: false,
        children: [
          'base/',
          'base/installation',
          'base/integration',
          'base/troubleshooting',
          'base/introduction',
          'base/tutorial',
          'base/configuration',
        ]
      },
      {
        title: '账号管理',
        collapsable: false,
        children: [
          'account/accountImport',
          'account/multiAccountImport',
          'account/accountDelete',
          'account/accountCheck',
          'account/kick',
          'account/queryState',
        ]
      },
      {
        title: '单聊消息',
        collapsable: false,
        children: [
          'singleChat/queryMsg',
          'singleChat/withdrawMsg',
          'singleChat/sendMsg.md',
          'singleChat/batchSendMsg',
          'singleChat/importMsg',
        ]
      },
      {
        title: '资料管理',
        collapsable: false,
        children: [
          'profile/getPortrait',
          'profile/setPortrait',
        ]
      },
      {
        title: '关系链管理',
        collapsable: false,
        children: [
          'sns/addFriend',
          'sns/importFriend',
          'sns/updateFriend',
          'sns/deleteFriend',
          'sns/deleteAllFriend',
          'sns/checkFriend',
          'sns/getFriends',
          'sns/getFriendList',
          'sns/addBlackList',
          'sns/delBlackList',
          'sns/pullBlackList',
          'sns/checkBlackList',
          'sns/addGroup',
          'sns/delGroup',
        ]
      },
      {
        title: '群组管理',
        collapsable: false,
        children: [
          'group/addMember',
          'group/changeOwner',
          'group/create',
          'group/deleteGroupMsg',
          'group/deleteMember',
          'group/destroy',
          'group/forbidMsg',
          'group/get',
          'group/getGroupShut',
          'group/getJoined',
          'group/getMember',
          'group/getMsgSimple',
          'group/getRole',
          'group/importGroup',
          'group/importGroupMember',
          'group/importGroupMsg',
          'group/modify',
          'group/modifyMember',
          'group/recallGroupMsg',
          'group/sendMsg',
          'group/sendNotification',
          'group/setUnreadMsgNum',
        ]
      },
      {
        title: '全局禁言管理',
        collapsable: false,
        children: [
            'speak/getGlobalNoSpeaking',
            'speak/setGlobalNoSpeaking',
        ]
      },
      {
        title: '运营管理',
        collapsable: false,
        children: [
          'operate/getAppInfo',
          'operate/getHistory',
          'operate/getIPList',
        ]
      }
    ],
    // '/views/0.x/': [
    //   {
    //     title: '基础',
    //     collapsable: false,
    //     children: [
    //       '',
    //       'installUse',
    //       'category',
    //       'tag',
    //     ]
    //   },
    //   {
    //     title: '进阶',
    //     collapsable: false,
    //     children: [
    //       'timeline',
    //       'valine',
    //       'password',
    //       'configJs',
    //       'home'
    //     ]
    //   },
    //   {
    //     title: '其他',
    //     collapsable: false,
    //     children: [
    //       'abstract',
    //     ]
    //   }
    // ],
    // '/views/plugins/': [
    //   {
    //     title: '插件',
    //     collapsable: true,
    //     children: [
    //       '',
    //       'backToTop',
    //       'pagation',
    //       'screenfull',
    //       'loadingPage',
    //       'kanbanniang',
    //       'comments',
    //       'extractCode',
    //       'rss',
    //       'bgmPlayer'
    //     ]
    //   }
    // ]
  }),
}
