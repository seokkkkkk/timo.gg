import { axiosInstance } from '.';

// 댓글 작성
export async function createCommentApi(data: any) {
  const response = await axiosInstance.post('/comments', data);
  return response.data;
}

// 댓글 수정
export async function updateCommentApi({
  commentId,
  data,
}: {
  commentId: string;
  data: any;
}) {
  const response = await axiosInstance.put('/comments/' + commentId, data);
  return response.data;
}

// 댓글 삭제
export async function deleteCommentApi(commentId: string) {
  const response = await axiosInstance.delete('/comments/' + commentId);
  return response.data;
}

// 댓글 조회
export async function getCommentsApi(data: any) {
  const response = await axiosInstance.get('/comments/' + data);
  return response.data;
}
