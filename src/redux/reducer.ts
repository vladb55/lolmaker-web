import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Progress {
  step: number;
  words: string[];
}

export interface AppStateType {
  isPlayground: boolean;
  isMainMenu: boolean;
  isGameMenu: boolean;
  storyKey: number | undefined;
  progress: Progress;
}

const initialProgress: Progress = {
  step: 0, 
  words: [],
};

const initialState: AppStateType = {
  isPlayground: false,
  isMainMenu: true,
  isGameMenu: false,
  storyKey: undefined,
  progress: initialProgress,
};

const { actions, reducer } = createSlice({
  name: 'reducer',
  initialState,
  reducers: {
    startGame: (state, { payload }: PayloadAction<number>) => {
      state.isMainMenu = false;
      state.isGameMenu = false;
      state.isPlayground = true;
      state.storyKey = payload;
      state.progress = {
        ...initialProgress,
      };
    },
    showGameMenu: (state, { payload }: PayloadAction<boolean>) => {
      state.isGameMenu = payload;
    },
    showMainMenu: () => {
      return {
        ...initialState,
      };
    },
    setProgress: (state, { payload }: PayloadAction<Progress>) => {
      state.progress = payload;
    },
  },
});

export const {
  startGame,
  showGameMenu,
  showMainMenu,
  setProgress,
} = actions;

export default reducer;
