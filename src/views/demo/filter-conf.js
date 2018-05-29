import AreaFilterWrap from '../components/AreaFilterWrap'

export default [
  {
    name: '小区',
    field: 'areaId, estateId',
    value: '',
    component: AreaFilterWrap,
    children: [],
  },
  {
    name: '业主',
    field: 'landlordId',
    value: '',
    component: {},
    children: [
      {
        name: '全部',
        value: '',
      },
    ],
  },
  {
    name: '排序',
    field: 'orderBy',
    value: '',
    component: {},
    children: [
      {
        name: '按申请时间从近到远',
        value: 'applyTimeAsc',
      },
      {
        name: '按申请时间从远到近',
        value: 'applyTimeDesc',
      },
      {
        name: '按联系时间从近到远',
        value: 'contractTimeAsc',
      },
      {
        name: '按联系时间从远到近',
        value: 'contractTimeDesc',
      },
    ],
  },
]
