import request from '@/utils/request'

export function getCompanyList(data) {
  return request({
    url: '/api/companyList?userId='+window.sessionStorage.getItem('userId'),
    method: 'get'
  });
}

export function addCompany(data) {
  return request({
    url: '/api/companyList',
    method: 'post',
    data
  });
}

export function editCompany(data) {
  return request({
    url: '/api/companyList',
    method: 'put',
    data
  });
}


export function delCompany(id) {
  return request({
    url: '/api/companyList/'+id,
    method: 'delete',

  });
}
