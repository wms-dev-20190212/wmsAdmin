import request from '@/utils/request'

export function getUserList(data) {
  return request({
    url: 'api/user/userList',
    method: 'get'
  });
}

export function addUser(data) {
  return request({
    url: 'api/user/add',
    method: 'post',
    data
  });
}
export function saveUser(data) {
  return request({
    url: 'api/user/edit',
    method: 'put',
    data
  });
}

export function delUser(id) {
  return request({
    url: 'api/user/'+id,
    method: 'delete',

  });
}

export function resetPwd(data) {
  return request({
    url: 'api/user/resetPwd',
    method: 'PUT',
    data
  });
}


export function resetPwdFac(data) {//恢复出厂密码
  return request({
    url: 'api/user/resetPwdFac',
    method: 'PUT',
    data
  });
}
