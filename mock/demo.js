const Mock = require('mockjs');

const demoApi = {
  // GET请求
  [`GET /mock/user/v1/demo/resource`](ctx) {
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      "code": 0,
      "message": "ok",
    })
  },
  // 删除资源
  [`POST /mock/user/v1/demo/deleteResource`](ctx) {
    ctx.response.type = 'application/json';
    ctx.response.body = {
      "code": 0,
      "message": "ok",
    }
  },
  // 查询资源列表
  [`POST /mock/user/v1/demo/queryResources`](ctx) {
    console.log('++ 收到请求 ++');
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      "code": 0,
      "message": "ok",
      "data": {
        "list|10": [
          {
            "id": "@id",
            "name": "@ctitle(5,8)",
            "code|99999-999999": 1,
            "url": "@url",
            "description": "@csentence",
            "classify": "@pick(['分类1','分类2','分类3','分类4'])",
          }
        ],
        "limit": 100,
        "offset": 0,
        "total": 30
      }
    })
  }
}

module.exports = demoApi;