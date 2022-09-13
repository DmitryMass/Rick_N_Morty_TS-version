import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { TypeRootState } from '../Store/store';

const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector;

export default useTypedSelector;
