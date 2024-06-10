import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, AppStorage } from './types';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppStorage>();
