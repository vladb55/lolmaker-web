import { TypedUseSelectorHook, useDispatch, useSelector, shallowEqual } from 'react-redux';
import type { AppState, AppDispatch } from 'src/redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export { shallowEqual };
