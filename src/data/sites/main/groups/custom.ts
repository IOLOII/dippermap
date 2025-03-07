import { IGroup } from '../../../types'

export const Custom: IGroup = {
  icon: 'icon-ditupeise',
  name: '资源采集',
  en_name: 'Custom',
  order: 0,
  children: [
    {
      icon: 'https://www.shuzixs.com/favicon.ico',
      name: '数字像素',
      en_name: 'PicPark',
      description:
        '数字像素(shuzixs.com)是国内专业可视化设计、开发综合服务平台，我们秉承让可视化更有价值的经营理念，致力于构建可视化所需要的一切。 我们主要在元宇宙、可视化、物联网、人工智能、AR/VR等产品设计、开发领域耕作，致力于打造领先的可视化',
      en_description: `Digital Pixel (shuzixs.com) is China's premier comprehensive service platform for visual design and development. Guided by our philosophy of "making visualization more valuable," we are committed to building everything required for next-generation visualization systems. Specializing in product design and development across metaverse applications, data visualization, IoT solutions, AI integration, and AR/VR technologies, we aim to establish cutting-edge visualization capabilities that redefine industry standards.`,
      site_url: 'https://www.shuzixs.com/#/home',
      order: 1,
      tags: ['数字孪生', '大屏', 'Three', 'Cesium']
    },
    {
      icon: 'https://geojson.io/img/favicon.png',
      name: 'GeoJSON Editor',
      en_name: 'PicPark',
      description:
        '帮助用户创建、查看和编辑 GeoJSON 格式的地理空间数据。该网站提供直观的界面，允许用户在地图上绘制点、线、多边形等要素，并实时生成相应的 GeoJSON 数据。',
      en_description: `Helps users create, view, and edit geospatial data in GeoJSON format. The website provides an intuitive interface that allows users to draw points, lines, polygons, and other elements on a map and generate corresponding GeoJSON data in real time.`,
      site_url: 'https://geojson.io',
      order: 1,
      tags: ['geojson', 'mapBox']
    },
    {
      icon: 'https://github.githubassets.com/favicons/favicon-dark.png',
      name: 'git',
      en_name: 'git-guide',
      description:
        'Git 是一个分布式版本管理工具，版本管理工具就是大家在写东西的时候都用过 回撤这个功能，但是回撤只能回撤几步，假如想要找回我三天之前的修改，光用回撤是找不回来的。而版本管理工具能记录每次的修改，只要提交到版本仓库，就可以找到之前任何时刻的状态（文本状态）。',
      en_description: `Git is a distributed version management tool, which means that everyone has used the rollback function when writing, but rollback can only be done a few steps. If you want to retrieve my modifications from three days ago, using rollback alone cannot retrieve them. Version management tools can record every modification, and as long as it is submitted to the version repository, the status (text status) of any previous moment can be found.`,
      site_url: 'https://rogerdudler.github.io/git-guide/index.zh.html',
      order: 1,
      tags: ['git']
    }
  ]
}
