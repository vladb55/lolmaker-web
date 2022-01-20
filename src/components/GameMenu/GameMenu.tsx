import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { startGame, showMainMenu, showGameMenu } from 'src/redux/reducer';
import { getStoryKey } from 'src/utils/stories';
import {
  Layer,
  Root,
} from './GameMenu.styles';

const GameMenu = () => {
  const dispatch = useAppDispatch();
  const currentStoryKey = useAppSelector(state => state.reducer.storyKey);

  const handleRetryClick = useCallback(() => {
    const storyKey = getStoryKey(currentStoryKey);
    if (storyKey === undefined) {
      return;
    }
    dispatch(startGame(storyKey));
  }, [dispatch, currentStoryKey]);

  const handleMenuClick = useCallback(() => {
    dispatch(showMainMenu());
  }, [dispatch]);

  const handleContinueClick = useCallback(() => {
    dispatch(showGameMenu(false));
  }, [dispatch]);

  return (
    <>
      <Layer />
      <Root>
        <button
          className='btn btn-primary'
          onClick={handleRetryClick}
        >Ещё раз!</button>
        <button
          className='btn btn-primary'
          onClick={handleMenuClick}
        >В главное меню</button>
        <button
          className='btn btn-primary'
          onClick={handleContinueClick}
        >Продолжить</button>
      </Root>
    </>
  );
};

export default GameMenu;
