import request from '@/utils/request'

export function getwarehouseList(data) {
  return request({
    url: '/api/warehouseList?userId='+window.sessionStorage.getItem('userId'),
    method: 'get'
  });
}


export function addWarehouse(data) {
  return request({
    url: '/api/warehouseList',
    method: 'post',
    data
  });
}

export function editWarehouse(data) {
  return request({
    url: '/api/warehouseList',
    method: 'put',
    data
  });
}


export function delWarehouse(id) {
  return request({
    url: '/api/warehouseList/'+id,
    method: 'delete',

  });
}
