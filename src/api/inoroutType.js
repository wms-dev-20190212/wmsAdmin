import request from '@/utils/request'

export function getInoroutTypeList(data) {
  return request({
    url: '/api/inoroutTypeList?userId='+window.sessionStorage.getItem('userId'),
    method: 'get'
  });
}


export function addInoroutType(data) {
  return request({
    url: '/api/inoroutTypeList',
    method: 'post',
    data
  });
}

export function editInoroutType(data) {
  return request({
    url: '/api/inoroutTypeList',
    method: 'put',
    data
  });
}


export function delInoroutType(id) {
  return request({
    url: '/api/inoroutTypeList/'+id,
    method: 'delete',

  });
}
