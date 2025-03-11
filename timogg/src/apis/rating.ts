import { axiosInstance } from '.';

// 평점 매기기
export async function createRatingApi({
  ratingId,
  rating,
}: {
  ratingId: string;
  rating: any;
}) {
  const response = await axiosInstance.post('/ratings/' + ratingId, rating);
  return response.data;
}

// 평점 삭제
export async function deleteRatingApi(ratingId: string) {
  const response = await axiosInstance.delete('/ratings/' + ratingId);
  return response.data;
}

// 내 평점 조회
export async function getRatingApi() {
  const response = await axiosInstance.get('/ratings');
  return response.data;
}
