const Mock = require('mockjs');

const demoApi = {
  // 获取生命周期
  [`POST /mock/user/v1/queryLifecycle`](ctx) {
    const params = ctx.request.body;
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      "code": 0,
      "message": "ok",
      "data": {
        [`list|${params.limit}`]: [
          {
            "id": "@id",
            "organization": "@ctitle(5,8)",
            "total|1000-3000": 1,
            "running": function () {
              return parseInt(this.total * 0.7)
            },
            "abort": function () {
              return parseInt(this.total * 0.01)
            },
            "repair": function () {
              return parseInt(this.total * 0.03)
            },
            "notAcceptance": function () {
              return parseInt(this.total * 0.1)
            },
            "scrap": function () {
              return parseInt(this.total * 0.06)
            },
            "sparepart": function () {
              return (
                this.total - this.running - this.abort - this.repair - this.notAcceptance - this.scrap
              )
            },
          }
        ],
        "limit": 100,
        "offset": 0,
        "total": 30
      }
    })
  },
  [`POST /mock/user/v1/queryInstallList`](ctx) {
    const params = ctx.request.body;
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      "code": 0,
      "message": "ok",
      "data": {
        [`list|${params.limit || 30}`]: [
          {
            "id": "@id",
            "groupName": "@city()",
            "onlineCount|1000-3000": 1,
            "offlineCount|50-500": 1,
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