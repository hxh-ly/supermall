import Mock from 'mockjs'
var Random = Mock.Random

Random.image('200x100', '#4A7BF7', 'Hello')
const data2 = {
  'person|2-4': {
    'from': 'CN',
    'go': 'BZ',
    'tIME': 'yestoday',
    'friend': 'jj',
    'where': 'DG'
  },
  'numb': /^1\d{4,6}$/,
  'banner': {
    'list':
      [{ image: "@image('200x100', '#4A7BF7', 'Hello')", height: 390, link: "", title: '焕新女装节' }, { image: "@image('200x100', '#02adea', 'Good')", height: 390, link: "", title: '焕新女装节' }, { image: "@image('200x100', '#00405d', 'Sept')", height: 390, link: "", title: '焕新女装节' }, { image: "@image('200x100', '#ffcc33', 'excle')", height: 390, link: "", title: '焕新女装节' }],
    'recommends': [{ image: "@image('120x60', '#4A7BF7', 'Hello')", height: 390, link: "", title: '十点抢卷' },
    { image: "@image('120x60', '#02adea', 'Good')", height: 390, link: "", title: '好物特卖' },
    { image: "@image('120x60', '#00405d', 'Sept')", height: 390, link: "", title: '内购福利' },
    { image: "@image('120x60', '#ffcc33', 'Sept')", height: 390, link: "", title: '初秋上新' }],
    'isEnd': true,
    "nextPage": 1
  }

}

const goodsData = {
  'pop': {
    'page': 1, 'list': []
  },
  'news': { 'page': 1, 'list': [] },
  'sell': { 'page': 1, 'list': [] }
}

let mockUserInfo = {
  "code": 0,
  "data": {
    "fullName": "@CNAME", // 随机生成中文人名
    "userId": 1000234234001,
  }
};

//get请求
/* Mock.mock(RegExp('/home/data' + ".*"), "get", (options) => {
  console.log(options);

  return Mock.mock(mockUserInfo);
}); */
//Mock.mock('/home/multidata', 'post', data2)
Mock.mock('/home/multidata', (options) => {


  return Mock.mock(data2);
})

/* Mock.mock('', (op) => {
  return Mock.mock(goodsData)
}) */

export default Mock;