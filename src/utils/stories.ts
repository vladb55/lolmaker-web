import stories from 'stories/stories.json';

export const getRandomIntInclusive = (start: number, end: number): number => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getAllKeysOfStories = (): number | undefined => {
  if (!stories.data) {
    return undefined;
  }
  return Object.keys(stories.data).length - 1;
};

export const getRandomStoryKey = (): number | undefined => {
  const keys = getAllKeysOfStories();
  return keys ? getRandomIntInclusive(0, keys) : undefined;
};

export const getStoryByKey = (storyKey: number) => {
  return stories.data[storyKey];
};

export const getRulesByStoryKey = (storyKey: number | undefined) => {
  if (storyKey === undefined) {
    return [];
  }
  return stories.data[storyKey].rules;
};

export const getStoryKey = (storyKey?: number) => {
  if (storyKey === undefined) {
    return getRandomStoryKey();
  }
  const keys = Object.keys(stories.data)
    .filter(key => key !== storyKey.toString());
  const key = keys[Math.floor(Math.random() * keys.length)];
  return parseInt(key, 10);
};
