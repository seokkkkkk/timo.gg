import { axiosInstance } from '.';

export const myInfo = async () => {
  try {
    const res = await axiosInstance.get('/members/me', {
      withAuth: true,
    });

    return res.data.data.memberProfile;
  } catch (error) {
    throw error;
  }
};
