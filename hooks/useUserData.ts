import { useAppSelector } from '@/store/hooks';

// Simplify get user data selector
const useUserData = () => {
  return useAppSelector((state) => state.userData);
};

export default useUserData;
