const Mock = require('mockjs');

const onlineMonitorApi = {
  // GET请求
  [`GET /mock/user/v1/onlineMonitor/resource`](ctx) {
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      "code": 0,
      "message": "ok",
    })
  },
  // 删除资源
  [`POST /mock/user/v1/getVillages`](ctx) {
    ctx.response.type = 'application/json';
    ctx.response.body = {
      "code": 0,
      "message": "ok",
      "data":[]
    }
  },
  [`POST /mock/user/v1/getPersons`](ctx) {
    ctx.response.type = 'application/json';
    ctx.response.body = {
      "code": 0,
      "message": "ok",
    }
  },
}

module.exports = onlineMonitorApi;