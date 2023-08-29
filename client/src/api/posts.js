import { redirect } from 'react-router-dom'
import { baseApi } from './base'

export function getPosts(options) {
  return baseApi.get('posts', options).then((res) => res.data)
}

export function getPost(postId, options) {
  return baseApi.get(`posts/${postId}`, options).then((res) => {
    if (res.status === 200) return res.data

    throw redirect('posts')
  })
}

export function getPostsOfUser(userId, options) {
  return baseApi.get(`posts?userId=${userId}`, options).then((res) => res.data)
}
