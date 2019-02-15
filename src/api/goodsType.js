import request from '@/utils/request'

export function getGoodsList(data) {
  return request({
    url: '/api/goodsTypeList?userId='+window.sessionStorage.getItem('userId'),
    method: 'get'
  });
}


export function addGoodsType(data) {
  return request({
    url: '/api/goodsTypeList',
    method: 'post',
    data
  });
}

export function editGoodsType(data) {
  return request({
    url: '/api/goodsTypeList',
    method: 'put',
    data
  });
}


export function delGoodsType(id) {
  return request({
    url: '/api/goodsTypeList/'+id,
    method: 'delete',

  });
}
