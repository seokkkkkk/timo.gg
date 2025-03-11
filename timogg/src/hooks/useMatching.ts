import { useMutation } from '@tanstack/react-query';

import {
  acceptMatchingApi,
  cancelMatchingApi,
  createMatchingOptionApi,
  getMatchingOptionsApi,
  getMatchingQueueApi,
  rejectMatchingApi,
  startMatchingApi,
} from '../apis/matching';

export default function useMatching() {
  // 매칭 옵션 받아오기
  let getMatchingOptions = useMutation(getMatchingOptionsApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  // 매칭 옵션 생성
  let createMatchingOption = useMutation(createMatchingOptionApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  // 매칭 시작
  let startMatching = useMutation(startMatchingApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  // 매칭 중단
  let cancelMatching = useMutation(cancelMatchingApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  // 매칭 수락
  let acceptMatching = useMutation(acceptMatchingApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  // 매칭 거절
  let rejectMatching = useMutation(rejectMatchingApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  // 매칭 대기열 조회
  let getMatchingQueue = useMutation(getMatchingQueueApi, {
    onSuccess: data => {},
    onError: error => {},
  });
  return {
    getMatchingOptions,
    createMatchingOption,
    startMatching,
    cancelMatching,
    acceptMatching,
    rejectMatching,
    getMatchingQueue,
  };
}
