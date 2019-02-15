import request from '@/utils/request'

export function getInoroutRecordList(data) {
  return request({
    url: '/api/inoroutRecordList?userId='+window.sessionStorage.getItem('userId'),
    method: 'get'
  });
}


export function addInoroutRecord(data) {
  return request({
    url: '/api/inoroutRecordList',
    method: 'post',
    data
  });
}

export function editInoroutRecord(data) {
  return request({
    url: '/api/inoroutRecordList',
    method: 'put',
    data
  });
}


export function delInoroutRecord(id) {
  return request({
    url: '/api/inoroutRecordList/'+id,
    method: 'delete',
  });
}
