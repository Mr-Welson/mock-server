const Mock = require('mockjs');

const demoApi = {
  // 辖区小区列表
  [`POST /mock/user/v1/getVillages`](ctx) {
    const params = ctx.request.body;
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      "code": 0,
      "message": "ok",
      "data": {
        [`list|${params.limit}`]: [
          {
            "id": "@id",
            "villageName":"@ctitle(5,8)",
            "address": "@ctitle(8,18)",
            "total|1000-3000": 1,
            "personCount|100-2000":1,
            "deviceCount|100-2000":1,
            "imageCount|1000-20000":1,
          }
        ],
        "limit": 100,
        "offset": 0,
        "total": 30
      }
    })
  },
  //辖区有轨迹人员防控
  [`POST /mock/user/v1/getPersonsHas`](ctx) {
    const params = ctx.request.body;
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      "code": 0,
      "message": "ok",
      "data": {
        [`list|${params.limit || 330}`]: [
          {
            "personId": "@id",
            "identityNumber":'162516256152122345',
            "relationShow":true,
            "personName":'@ctitle(2,3)',
            "address": "@city()",
            "lastTime": "1563510142000",
            "lastAddress": "@city()",
            "countDay|1-30": 1,
            "imgUrl":'',
            'tags':[]
          }
        ],
        "limit": 100,
        "offset": 0,
        "total": 330
      }
    })
  },
  //辖区无轨迹人员防控
  [`POST /mock/user/v1/getPersonsNo`](ctx) {
    const params = ctx.request.body;
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      "code": 0,
      "message": "ok",
      "data": {
        [`list|${params.limit || 200}`]: [
          {
            "personId": "@id",
            "identityNumber":'162516256152122345',
            "relationShow":true,
            "personName":'@ctitle(2,3)',
            "address": "@city()",
            "lastTime": "1563510142000",
            "lastAddress": "@city()",
            "countDay|1-30": 1,
            "imgUrl":'',
            'tags':[]
          }
        ],
        "limit": 100,
        "offset": 0,
        "total": 330
      }
    })
  },
  //辖区外来人员防控
  [`POST /mock/user/v1/getPersonsOut`](ctx) {
    const params = ctx.request.body;
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      "code": 0,
      "message": "ok",
      "data": {
        [`list|${params.limit || 80}`]: [
          {
            "aid":'162516256152122345',
            "relationShow":true,
            "lastTime": "1563510142000",
            "lastAddress": "@city()",
            "countDay|1-30": 1,
            "imgUrl":'',
            'tags':[]
          }
        ],
        "limit": 100,
        "offset": 0,
        "total": 330
      }
    })
  }
}

module.exports = demoApi;
