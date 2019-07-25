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
  },
  //在线状态监控
  [`POST /mock/user/v1/queryOnlineMonitor`](ctx) {
    const params = ctx.request.body;
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      "code": 0,
      "message": "ok",
      "data": {
        [`list|${params.limit || 30}`]: [
          {
            "id": "@id",
            "name": "@cname",
            "sn|8": 1,
            "cid|12": 1,
            "status|[0,1]":1,
            'deviceType|5':1,
            'functionType|5':1,
            'vendor':'@ctitle',
            'orgenization':'@ctitle',
            'address':'@city@county',
            'placeId':'@city@county',
            'lifeCycle':[
              {
                'date':'2019-07-20',
                'list':[
                  {
                    'startTime':'2019-07-16 12:22:22',
                    'endTime':'2019-07-17 02:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-17 02:22:22',
                    'endTime':'2019-07-17 09:22:22',
                    'status': 0
                  },
                  {
                    'startTime':'2019-07-17 09:22:22',
                    'endTime':'2019-07-18 06:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-18 06:22:22',
                    'endTime':'2019-07-20 02:22:22',
                    'status': 0
                  },
                ]
              }
            ]
          }
        ],
        "limit": 10,
        "offset": 0,
        "total": 30
      }
    })
  },
  //在线状态监控详情
  [`POST /mock/user/v1/queryOnlineMonitorDetail`](ctx) {
    const params = ctx.request.body;
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      "code": 0,
      "message": "ok",
      "data": {
        list: [
              {
                'date':'2019-07-16',
                'list':[
                  {
                    'startTime':'2019-07-16 00:00:00',
                    'endTime':'2019-07-16 02:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-16 02:22:22',
                    'endTime':'2019-07-16 09:22:22',
                    'status': 0
                  },
                  {
                    'startTime':'2019-07-16 09:22:22',
                    'endTime':'2019-07-16 18:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-16 18:22:22',
                    'endTime':'2019-07-16 23:59:59',
                    'status': 0
                  },
                ]
              },
              {
                'date':'2019-07-17',
                'list':[
                  {
                    'startTime':'2019-07-17 00:00:00',
                    'endTime':'2019-07-17 02:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-17 02:22:22',
                    'endTime':'2019-07-17 16:22:22',
                    'status': 0
                  },
                  {
                    'startTime':'2019-07-17 16:22:22',
                    'endTime':'2019-07-17 18:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-17 18:22:22',
                    'endTime':'2019-07-17 23:59:59',
                    'status': 0
                  },
                ]
              },
              {
                'date':'2019-07-18',
                'list':[
                  {
                    'startTime':'2019-07-18 00:00:00',
                    'endTime':'2019-07-18 08:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-18 08:22:22',
                    'endTime':'2019-07-18 14:22:22',
                    'status': 0
                  },
                  {
                    'startTime':'2019-07-18 14:22:22',
                    'endTime':'2019-07-18 18:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-18 18:22:22',
                    'endTime':'2019-07-18 23:59:59',
                    'status': 0
                  },
                ]
              },
              {
                'date':'2019-07-18',
                'list':[
                  {
                    'startTime':'2019-07-18 00:00:00',
                    'endTime':'2019-07-18 02:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-18 02:22:22',
                    'endTime':'2019-07-18 09:22:22',
                    'status': 0
                  },
                  {
                    'startTime':'2019-07-18 09:22:22',
                    'endTime':'2019-07-18 18:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-18 18:22:22',
                    'endTime':'2019-07-18 23:59:59',
                    'status': 0
                  },
                ]
              },
              {
                'date':'2019-07-19',
                'list':[
                  {
                    'startTime':'2019-07-19 00:00:00',
                    'endTime':'2019-07-19 02:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-19 02:22:22',
                    'endTime':'2019-07-19 15:22:22',
                    'status': 0
                  },
                  {
                    'startTime':'2019-07-19 15:22:22',
                    'endTime':'2019-07-19 18:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-19 18:22:22',
                    'endTime':'2019-07-19 23:59:59',
                    'status': 0
                  },
                ]
              },
              {
                'date':'2019-07-20',
                'list':[
                  {
                    'startTime':'2019-07-20 00:00:00',
                    'endTime':'2019-07-20 02:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-20 02:22:22',
                    'endTime':'2019-07-20 09:22:22',
                    'status': 0
                  },
                  {
                    'startTime':'2019-07-20 09:22:22',
                    'endTime':'2019-07-20 18:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-20 18:22:22',
                    'endTime':'2019-07-20 23:59:59',
                    'status': 0
                  },
                ]
              },
              {
                'date':'2019-07-21',
                'list':[
                  {
                    'startTime':'2019-07-21 00:00:00',
                    'endTime':'2019-07-21 04:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-21 04:22:22',
                    'endTime':'2019-07-21 13:22:22',
                    'status': 0
                  },
                  {
                    'startTime':'2019-07-21 13:22:22',
                    'endTime':'2019-07-21 19:22:22',
                    'status': 1
                  },
                  {
                    'startTime':'2019-07-21 19:22:22',
                    'endTime':'2019-07-21 23:59:59',
                    'status': 0
                  },
                ]
              }
            ],
        "limit": 10,
        "offset": 0,
        "total": 30
      }
    })
  }
}

module.exports = demoApi;