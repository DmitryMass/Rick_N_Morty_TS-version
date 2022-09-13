import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { eachCharacterActions } from '../Store/Slices/episodeCharacterSlice';

const actions = {
  ...eachCharacterActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};

export default useActions;
