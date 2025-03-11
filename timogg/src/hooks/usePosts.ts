import { useMutation } from '@tanstack/react-query';
import {
  createPostApi,
  deletePostApi,
  getPostsApi,
  updatePostApi,
} from '../apis/post';

export default function usePosts() {
  // 포스트 생성
  let createPost = useMutation(createPostApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  // 포스트 업데이트
  let updatePost = useMutation(updatePostApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  // 포스트 삭제
  let deletePost = useMutation<void, Error, string>(deletePostApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  //포스트 상세 조회
  let getPost = useMutation(
    //todo: 포스트 상세 조회 api 호출
    api,
    {
      onSuccess: data => {},
      onError: error => {},
    },
  );
  // 포스트 페이지 검색 조회
  let getPosts = useMutation(getPostsApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  return { createPost, updatePost, deletePost, getPost, getPosts };
}
