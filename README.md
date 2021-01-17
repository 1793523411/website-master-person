# 个人主页信息接口

## 字段分析

### 顶部导航栏

抽象出来的的字段：

```json
{
  "logo-children": "https://wx-xly-1301545895.cos.ap-beijing.myqcloud.com/my-website/logo.png",
  "logo-href": "http://www.ygjie.icu",
  "menu-children": [
    {
      "name": "item0",
      "children": {
        "href": "http://doc1.ygjie.icu/",
        "children": [{ "children": "文档", "name": "text" }]
      },
      "subItem": [
        {
          "name": "sub0",
          "children": {
            "href": "http://serveless_mymaster.ygjie.icu/",
            "children": [
              {
                "children": "地址一"
              }
            ]
          }
        },
        {
          "name": "sub0",
          "children": {
            "href": "http://serveless_mymaster.ygjie.icu/",
            "children": [
              {
                "children": "地址一"
              }
            ]
          }
        }
      ]
    }
  ]
}
```

```js
const Nav00DataSource = {
  wrapper: { className: "header0 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header0-logo",
    children:
      "https://wx-xly-1301545895.cos.ap-beijing.myqcloud.com/my-website/logo.png",
    href: "http://www.ygjie.icu",
  },
  Menu: {
    className: "header0-menu",
    children: [
      {
        name: "item0",
        className: "header0-item",
        children: {
          href: "https://www.cnblogs.com/ygjzs",
          children: [{ children: "待定", name: "text" }],
        },
      },
      {
        name: "item1",
        className: "header0-item",
        children: {
          href: "https://www.cnblogs.com/ycoder",
          children: [{ children: "待定", name: "text" }],
        },
      },
      {
        name: "item2",
        className: "header0-item",
        children: {
          href: "http://doc1.ygjie.icu/",
          children: [{ children: "文档", name: "text" }],
        },
      },
      {
        name: "item3",
        className: "header0-item",
        children: {
          children: [{ children: "控制台", name: "text" }],
        },
        subItem: [
          {
            name: "sub0",
            className: "item-sub",
            children: {
              className: "item-sub-item",
              href: "http://mymaster.ygjie.icu/",
              children: [
                // {
                //   name: 'image0',
                //   className: 'item-image',
                //   children:
                //     'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                // },
                {
                  name: "title",
                  className: "item-title",
                  children: "地址一",
                },
                // {
                //   name: 'content',
                //   className: 'item-content',
                //   children: '无',
                // },
              ],
            },
          },
          {
            name: "sub1",
            className: "item-sub",
            children: {
              className: "item-sub-item",
              href: "http://serveless_mymaster.ygjie.icu/",
              children: [
                // {
                //   name: 'image0',
                //   className: 'item-image',
                //   children:
                //     'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                // },
                {
                  name: "title",
                  className: "item-title",
                  children: "地址二",
                },
                // {
                //   name: 'content',
                //   className: 'item-content',
                //   children: '无',
                // },
              ],
            },
          },
        ],
      },
    ],
  },
  mobileMenu: { className: "header0-mobile-menu" },
};
```
