import { axiosInstance } from '.';

// 매칭 옵션 받아오기
export async function getMatchingOptionsApi() {
  const response = await axiosInstance.get('/match/option');
  return response.data;
}

// 매칭 옵션 생성
export async function createMatchingOptionApi(data: any) {
  const response = await axiosInstance.post('/match/option/', data);
  return response.data;
}

// 매칭 시작
export async function startMatchingApi(data: any) {
  const response = await axiosInstance.post('/match/queue/', data);
  return response.data;
}

// 매칭 중단
export async function cancelMatchingApi(matchId: string) {
  const response = await axiosInstance.delete('/match/cancel/' + matchId);
  return response.data;
}

// 매칭 수락
export async function acceptMatchingApi(matchId: string) {
  const response = await axiosInstance.get('/match/accept/' + matchId);
  return response.data;
}

// 매칭 거절
export async function rejectMatchingApi(matchId: string) {
  const response = await axiosInstance.post('/match/deny/' + matchId);
  return response.data;
}

// 매칭 대기열 조회
export async function getMatchingQueueApi(gameMode: string) {
  const response = await axiosInstance.get('/match/waiting/' + gameMode);
  return response.data;
}
