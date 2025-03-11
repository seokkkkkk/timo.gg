import { createRatingApi, deleteRatingApi, getRatingApi } from '../apis/rating';

export default function useRatings() {
  // 평가 생성
  let createRating = useMutation(createRatingApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  // 평가 삭제
  let deleteRating = useMutation(deleteRatingApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  // 평가 조회
  let getRatings = useMutation(getRatingApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  return { createRating, deleteRating, getRatings };
}
