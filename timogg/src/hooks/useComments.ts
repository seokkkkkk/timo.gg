import { useMutation } from '@tanstack/react-query';
import {
  createCommentApi,
  deleteCommentApi,
  getCommentsApi,
  updateCommentApi,
} from '../apis/comment';

export default function useComments() {
  // 댓글 생성
  let createComment = useMutation(createCommentApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  // 댓글 업데이트
  let updateComment = useMutation(updateCommentApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  // 댓글 삭제
  let deleteComment = useMutation(deleteCommentApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  // 댓글 조회
  let getComments = useMutation(getCommentsApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  return { createComment, updateComment, deleteComment, getComments };
}
