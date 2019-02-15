import request from '@/utils/request'

export function getwarehouseInoroutList(data) {
  return request({
    url: '/api/warehouseInoroutList?userId='+window.sessionStorage.getItem('userId'),
    method: 'get'
  });
}


export function addWarehouseInorout(data) {
  return request({
    url: '/api/warehouseInoroutList',
    method: 'post',
    data
  });
}

export function editWarehouseInorout(data) {
  return request({
    url: '/api/warehouseInoroutList',
    method: 'put',
    data
  });
}


export function delWarehouseInorout(id) {
  return request({
    url: '/api/warehouseInoroutList/'+id,
    method: 'delete',

  });
}
