const Mock = require('mockjs');

const demoApi = {
  // GET请求
  [`GET /mock/user/getCode`](ctx) {
    // get 请求参数
    console.log(ctx.request.querystring); // a=1&b=2
    console.log(ctx.request.query); // { a:'1', b:'2' }
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      code: 0,
      message: 'ok',
      data: '@integer(100000, 999999)',
    });
  },
  // 查询用户列表
  [`POST /mock/user/queryUserList`](ctx) {
    console.log('== queryUserList ==');
    const params = ctx.request.body;
    const { pageSize = 10 } = params;
    ctx.response.type = 'application/json';
    ctx.response.body = Mock.mock({
      code: 0,
      message: 'ok',
      data: {
        [`list|${pageSize}`]: [
          {
            id: '@id',
            name: '@ctitle(5,8)',
            'code|99999-999999': 1,
            url: '@url',
            description: '@csentence',
            tag: "@pick(['标签1','标签2','标签3','标签4'])",
          },
        ],
        pageSize: pageSize,
        pageNo: 1,
        total: 100,
      },
    });
  },
  // 查询组织树
  [`POST /mock/user/queryOrganizationTree`](ctx) {
    console.log('== queryOrganizationTree ==');
    const rootId = Mock.mock('@id');
    const rootOrg = Mock.mock({
      id: rootId,
      createTime: '@now',
      orgCode: '@integer(100000, 999999)',
      description: '@csentence',
      orgName: '根组织',
      sort: 1,
    });
    const Lv1_org = Mock.mock({
      'list|10-20': [
        {
          id: '@id',
          createTime: '@now',
          orgCode: '@integer(100000, 999999)',
          description: '@csentence',
          orgName: '二级组织' + '@increment',
          sort: 1,
          parentId: rootId,
        },
      ],
    });
    const Lv2_ID = Lv1_org.map((v) => v.id);
    const length = Lv2_ID.length;
    const Lv2_org = Mock.mock({
      'list|100-150': [
        {
          id: '@id',
          createTime: '@now',
          orgCode: '@integer(100000, 999999)',
          description: '@csentence',
          orgName: '三级组织' + '@ctitle',
          sort: 1,
          parentId: function () {
            return Lv2_ID[`@natural(0, ${length})`];
          },
        },
      ],
    });
    const list = [].concat([rootOrg], Lv1_org, Lv2_org);
    ctx.response.type = 'application/json';
    ctx.response.body = {
      code: 0,
      message: 'ok',
      data: {
        list: list,
      },
    };
  },
};

module.exports = demoApi;
