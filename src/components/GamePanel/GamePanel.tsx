import { useCallback, useRef } from 'react';
import { useAppDispatch, useAppSelector, shallowEqual } from 'src/redux/hooks';
import { showGameMenu, setProgress } from 'src/redux/reducer';
import { getRulesByStoryKey, getStoryByKey, getStoryKey } from 'src/utils/stories';
import {
  Root,
  Wrapper,
  Text,
  Input,
  Button,
  MenuButton,
} from './GamePanel.styles';

const getFilledText = (text: string, data: string[], pattern: string) => {
  let result = text;
  for (let i = 0; i < data.length; i++) {
    result = result.replace(pattern, data[i]);
  }
  return result;
};

const GamePanel = () => {
  const dispatch = useAppDispatch();
  const {
    progress,
    storyKey,
  } = useAppSelector(state => ({
    progress: state.reducer.progress,
    storyKey: state.reducer.storyKey,
  }), shallowEqual);
  const rules = getRulesByStoryKey(storyKey);
  const rule = rules[progress.step];
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isFinish = progress.step === rules.length;

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleMenuClick = useCallback(() => {
    dispatch(showGameMenu(true));
  }, [dispatch]);

  const handleNextClick = useCallback(() => {
    if (!inputRef.current || !inputRef.current.value) {
      return;
    }
    const word = inputRef.current.value;
    dispatch(setProgress({
      step: progress.step + 1,
      words: progress.words.concat(word),
    }));
    clearInput();
  }, [dispatch, progress]);

  if (storyKey === undefined) {
    return null;
  }

  const story = isFinish && getStoryByKey(storyKey);

  return (
    <Root>
      {
        isFinish ? (
          story
            ? (
                <Wrapper>
                  <Text>{ getFilledText(story.text, progress.words, '%s') }</Text>
                </Wrapper>
              )
            : <Text>Что-то пошло не так. Скажите об этом разработчику, и он это исправит!</Text>
        ) : (
          <Wrapper>
            <Text>{ rule }</Text>
            <Input ref={inputRef} />
            <Button onClick={handleNextClick}>Далее</Button>
          </Wrapper>
        )
      }
      <MenuButton onClick={handleMenuClick}>Меню</MenuButton>
    </Root>
  );
};

export default GamePanel;
