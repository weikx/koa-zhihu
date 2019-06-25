#### RESTFul 风格知乎API

```tree
koa-zhihu
├── README.md
├── app
│   ├── config.js         // 依赖配置
│   ├── controllers       // 控制器
│   │   ├── home.js       // 主页模块
│   │   ├── topic.js      // 话题模块
│   │   └── users.js      // 用户模块
│   ├── index.js          // 入口文件
│   ├── models            // 数据模型
│   │   ├── topic.js      // 话题模型
│   │   └── users.js      // 用户模型
│   ├── public
│   │   └── uploads       // 存放用户上传文件
│   └── routes            // 路由
│       ├── home.js       // 首页路由
│       ├── index.js      // 路由注册方法
│       ├── topic.js      // 话题路由
│       └── users.js      // 用户路由
└── package.json          // package.json
```