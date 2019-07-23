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
            "address": "@ctitle(5,8)",
            "total|1000-3000": 1,
            "personCount | 100-2000":1,
            "deviveCount | 100-2000":1,
            "imageCount | 1000-20000":1,
          }
        ],
        "limit": 100,
        "offset": 0,
        "total": 30
      }
    })
  },
  //辖区人员防控
  [`POST /mock/user/v1/getPersons`](ctx) {
    const params = ctx.request.body;
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      "code": 0,
      "message": "ok",
      "data": {
        [`list|${params.limit || 330}`]: [
          {
            "id": "@id",
            "name":'@ctitle(2,3)',
            "address": "@city()",
            "idCard": "@id(18)",
            "captureTime": "2019-7-19",
            "captureAddress": "@city()",
            "days|1-30": 1,
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