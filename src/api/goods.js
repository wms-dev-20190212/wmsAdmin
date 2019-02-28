import request from '@/utils/request'

export function getGoodsList(data) {
  return request({
    url: '/api/goodsList?userId='+window.sessionStorage.getItem('userId'),
    method: 'get'
  });
}


export function addGoods(data) {
  return request({
    url: '/api/goodsList',
    method: 'post',
    data
  });
}

export function editGoods(data) {
  return request({
    url: '/api/goodsList',
    method: 'put',
    data
  });
}
export function setGoodsSize(data) {
  return request({
    url: '/api/goodsSize',
    method: 'post',
    data
  });
}


export function delGoods(id) {
  return request({
    url: '/api/goodsList/'+id,
    method: 'delete',

  });
}
export function uploadFile(data) {//封面
  return request({
    url: 'api/file/upload',
    method: 'post',
    data
  });
}
