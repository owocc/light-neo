export default function () {
  const menuConfig = useState('menuConfig', () => [
    {
      label: '首页',
      to: '/',
      key: 'home',
    },
    {
      label: '全部灯具',
      to: '/all',
      key: 'all',
    },
    {
      label: '分类搜索',
      to: '/category',
      key: 'category',
    },
    {
      label: '星光评说',
      to: '/comment',
      key: 'comment',
    },
  ])
  return {
    menuConfig,
  }
}
