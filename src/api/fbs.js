import request from '@/utils/request'


export function getfbsList(data) {
  return request({
    url: '/api/fbsList?userId='+window.sessionStorage.getItem('userId'),
    method: 'get'
  });
}


export function addfbs(data) {
  return request({
    url: '/api/fbsList',
    method: 'post',
    data
  });
}

export function editfbs(data) {
  return request({
    url: '/api/fbsList',
    method: 'put',
    data
  });
}


export function delfbs(id) {
  return request({
    url: '/api/fbsList/'+id,
    method: 'delete',

  });
}
