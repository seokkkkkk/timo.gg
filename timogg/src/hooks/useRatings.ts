import { useMutation } from '@tanstack/react-query';
import { createRatingApi, deleteRatingApi, getRatingApi } from '../apis/rating';

export default function useRatings() {
  // 평가 생성
  let createRating = useMutation({
    mutationFn: createRatingApi,
    onSuccess: data => {
      console.log('평가 생성 성공', data);
    },
    onError: error => {
      console.log('평가 생성 실패', error);
    },
  });
  // 평가 삭제
  let deleteRating = useMutation({
    mutationFn: deleteRatingApi,
    onSuccess: data => {
      console.log('평가 삭제 성공', data);
    },
    onError: error => {
      console.log('평가 삭제 실패', error);
    },
  });
  // 평가 조회
  let getRatings = useMutation({
    mutationFn: getRatingApi,
    onSuccess: data => {
      console.log('평가 조회 성공', data);
    },
    onError: error => {
      console.log('평가 조회 실패', error);
    },
  });
  return { createRating, deleteRating, getRatings };
}
