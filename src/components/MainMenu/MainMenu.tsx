import { useCallback } from 'react';
import { useAppDispatch } from 'src/redux/hooks';
import {
  Root,
  Title,
} from './MainMenu.styles';
import { startGame } from 'src/redux/reducer';
import { getStoryKey } from 'src/utils/stories';

const TITLE_LETTERS = ['l', 'o', 'l', 'm', 'a', 'k', 'e', 'r'];

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
      <Title>
        {
          TITLE_LETTERS.map((letter, index) => (
            <span key={index}>{letter}</span>
          ))
        }
      </Title>
      <button 
        className='btn btn-primary'
        onClick={handleClick}
      >
        Начать игру!
      </button>
    </Root>
  );
};

export default MainMenu;
