const Mock = require('mockjs');

const demoApi = {
  // 获取生命周期
  [`POST /mock/user/v1/organization/queryChildOrganizationsById`](ctx) {
    const params = ctx.request.body;
    const rootId = Mock.mock("@id");
    const rootOrg = Mock.mock({
      "id": rootId,
      "createTime": "@now",
      "operationCenterId": "1001",
      "organizationCode": "@integer(100000, 999999)",
      "organizationDescription": "@csentence",
      "organizationName": "根组织",
      "organizationSort": 1,
      "isMerchant": "false",
    })
    const Lv1_org = Mock.mock({
      "list|10-20": [{
        "id": "@id",
        "createTime": "@now",
        "operationCenterId": "1001",
        "organizationCode": "@integer(100000, 999999)",
        "organizationDescription": "@csentence",
        "organizationName": "二级组织" + "@increment" ,
        "organizationSort": 1,
        "isMerchant": "false",
        "parentId": rootId
      }]
    })
    const Lv2_ID = Lv1_org.map(v => v.id);
    const length = Lv2_ID.length;
    const Lv2_org = Mock.mock({
      "list|100-150": [{
        "id": "@id",
        "createTime": "@now",
        "operationCenterId": "1001",
        "organizationCode": "@integer(100000, 999999)",
        "organizationDescription": "@csentence",
        "organizationName": "三级组织" + "@ctitle" ,
        "organizationSort": 1,
        "isMerchant": "false",
        "parentId": function () {
          return Lv2_ID[`@natural(0, ${length})`]
        }
      }]
    })
    const list = [].concat([rootOrg], Lv1_org, Lv2_org);
    ctx.response.type = 'application/json';
    ctx.response.body = {
      "code": 0,
      "message": "ok",
      "data": {
        "list": list,
        "limit": 100,
        "offset": 0,
        "total": 30
      }
    }
  },
}

module.exports = demoApi;