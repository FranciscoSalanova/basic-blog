import { redirect } from 'react-router-dom'
import { baseApi } from './base'

export function getUsers(options) {
  return baseApi.get('users', options).then((res) => res.data)
}

export function getUser(userId, options) {
  return baseApi.get(`users/${userId}`, options).then((res) => {
    if (res.status === 200) return res.data

    throw redirect('users')
  })
}
