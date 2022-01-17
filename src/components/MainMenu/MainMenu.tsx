import { useCallback } from 'react';
import { useAppDispatch } from 'src/redux/hooks';
import {
  Root,
} from './MainMenu.styles';
import { startGame } from 'src/redux/reducer';
import { getStoryKey } from 'src/utils/stories';

const MainMenu = () => {
  const dispatch = useAppDispatch();
  const handleClick = useCallback(() => {
    const storyKey = getStoryKey();
    if (storyKey === undefined) {
      return;
    }
    dispatch(startGame(storyKey));
  }, [dispatch]);
  return (
    <Root>
      <button 
        className='btn'
        onClick={handleClick}
      >
        Start the game
      </button>
    </Root>
  );
};

export default MainMenu;
