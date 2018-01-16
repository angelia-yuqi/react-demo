export const allMenu = [
  {
    name: '首页',
    url: 'index',
    icon: 'home',
  }, {
    name: '产品列表',
    url: 'list',
    icon: 'bars',
  }, {
    name: '产品区间',
    url: 'all',
    icon: 'tool',
  }, {
    name: '模块3',
    url: 'pic',
    icon: 'edit',
    children: [
      { name: '系列1', url: 'album' },
    ],
  }, {
    name: '模块4',
    url: 'search',
    icon: 'search',
    children: [
      { name: '系列1', url: 'searchEngine' },
    ],
  }, {
    name: '模块5',
    url: 'dev',
    icon: 'apple-o',
    children: [
      { name: '系列1', url: 'todo' },
    ],
  }]