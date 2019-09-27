const Mock = require('mockjs');

const mockApi = {
  [`POST /mock/alarm/v1/monitorLib/queryMonitorLibs`](ctx) {
    // get 请求参数
    console.log(ctx.request.body); // { a:'1', b:'2' }
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      "code": 0,
      "message": "ok",
      "data": {
        "total|10": 1,
        "limit": 500,
        "offset": 0,
        "list|10": [
          {
            "id": "@guid",
            "name": "@ctitle(5,8)",
            "personCount|0-10": 1,
            "creatorId": "@guid",
            "libType": 1,
            "userIds": function () {
              return [this.creatorId]
            }
          },
        ],
        "other": {}
      }
    })
  },
  [`POST /mock/alarm/v1/monitorLib/monitorLibs/:id`](ctx) {
    // get 请求参数
    console.log(ctx.request.body); // { a:'1', b:'2' }
    const params = ctx.request.body;
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      "code": 0, 
      "message": "ok", 
      "data": 
        { 
          "id": params.id, 
          "name": "@ctitle(5,8)", 
          "creatorId": "@id", 
          "creatorName": "运营中心管理员", 
          "libType": 1, 
          "personCount|0-10": 1, 
          "userIds": function () {
            return [this.creatorId]
          }, 
          "managers": [
            { "id": "101000000805", "name": "运营中心管理员" }
          ], 
          "objectMainList": [], 
          "objectInfoList": [], 
          "createTime": new Date()*1, 
          "updateTime": new Date()*1 
        }
    })
  },
  [`POST /mock/alarm/v1/alarmResult/queryAlarmResults`](ctx) {
    // 请求参数
    ctx.response.type = 'application/json';
    const libArr = ['产品布控库', '测试人员布控库', '运维人员布控库', '开发人员布控库']
    const ruleArr = ['本地出现报警人员', '本地长期未出现报警人员', '辖区外出现报警人员']
    const params = ctx.request.body;
    ctx.response.body = Mock.mock({
      "code": 0, 
      "message": "ok", 
      "data": {
        "limit": params.limit,
        "offset": params.offset,
        "total|1000-2000": 1,
        [`list|${params.limit}`]: [
          { 
            "id": "@guid", 
            "name": "@cname", 
            "libName|": function () {
              let length = Mock.Random.natural(1, 4);
              return libArr.slice(0, length);
            },
            "taskRule|": function () {
              let length = Mock.Random.natural(1, 3);
              return ruleArr.slice(0, length);
            },
            "idCard": Mock.Random.id(), 
            "deviceName": "@ctitle(5, 10)",
            "captureTime|1561910400000-1563763153977": 1,
            "isHandle|0-1": 1,
            "imageUrl": "/staticResource/v1/oss/type/object/objId/5d3804072ce79e03101039f7/cid/753376771?signature=2ea5186c64286fba583ba115750bf571&expire=1564210800000&watermark=E5BA94E794A8E7B3BBE7BB9FE7AEA1E79086E59198&location=2",
            "faceUrl": "/staticResource/v1/img/cid/753374962/objId/5d3851fd2ce796f210104e92?signature=64b02dc51a51b1898c8a7b78f74af1ac&expire=1564210800000&crop=x_987,y_456,w_200,h_224&watermark=E5BA94E794A8E7B3BBE7BB9FE7AEA1E79086E59198&location=2"
          }
        ]
      }
    })
  },
}

module.exports = mockApi;