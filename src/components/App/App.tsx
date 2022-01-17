import { useAppSelector, shallowEqual } from 'src/redux/hooks';
import {
  Root,
} from './App.styles';
import MainMenu from 'src/components/MainMenu'
import GamePanel from 'src/components/GamePanel';
import GameMenu from 'src/components/GameMenu';

const App = () => {
  const {
    isMainMenu,
    isPlayground,
    isGameMenu,
  } = useAppSelector(state => ({
    isMainMenu: state.reducer.isMainMenu,
    isPlayground: state.reducer.isPlayground,
    isGameMenu: state.reducer.isGameMenu,
  }), shallowEqual);
  return (
    <Root>
      {isMainMenu && <MainMenu />}
      {isPlayground && <GamePanel />}
      {isGameMenu && <GameMenu />}
    </Root>
  );
};

export default App;
