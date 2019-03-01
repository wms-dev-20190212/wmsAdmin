import request from '@/utils/request'

export function getdepartAllList(data) {
  return request({
    url: '/api/departAllList?userId='+window.sessionStorage.getItem('userId'),
    method: 'get'
  });
}


export function getdepartList(data) {
  return request({
    url: '/api/departList?userId='+window.sessionStorage.getItem('userId'),
    method: 'get'
  });
}


export function addDepart(data) {
  return request({
    url: '/api/departList',
    method: 'post',
    data
  });
}

export function editDepart(data) {
  return request({
    url: '/api/departList',
    method: 'put',
    data
  });
}


export function delDepart(id) {
  return request({
    url: '/api/departList/'+id,
    method: 'delete',

  });
}
