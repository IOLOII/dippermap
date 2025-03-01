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
      name: '数字像素',
      en_name: 'PicPark',
      description:
        '帮助用户创建、查看和编辑 GeoJSON 格式的地理空间数据。该网站提供直观的界面，允许用户在地图上绘制点、线、多边形等要素，并实时生成相应的 GeoJSON 数据。',
      en_description: `Helps users create, view, and edit geospatial data in GeoJSON format. The website provides an intuitive interface that allows users to draw points, lines, polygons, and other elements on a map and generate corresponding GeoJSON data in real time.`,
      site_url: 'https://geojson.io',
      order: 1,
      tags: ['geojson', 'mapBox']
    }
  ]
}
