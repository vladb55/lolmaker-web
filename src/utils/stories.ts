import stories from 'stories/stories.json';

interface Story {
  text?: string;
  rules?: string[];
}

export const getRandomIntInclusive = (start: number, end: number): number => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const hasStories = (): boolean => {
  return Boolean(stories && stories.data);
}

export const isStoryExist = (storyKey: number): boolean => {
  return Boolean(stories.data && stories.data[storyKey]);
};

export const getAllKeysOfStories = (): number | undefined => {
  if (!hasStories()) {
    return undefined;
  }
  return Object.keys(stories.data).length - 1;
};

export const getRandomStoryKey = (): number | undefined => {
  const keys = getAllKeysOfStories();
  return keys ? getRandomIntInclusive(0, keys) : undefined;
};

export const getStoryByKey = (storyKey?: number): Story | undefined => {
  if (storyKey === undefined || !isStoryExist(storyKey)) {
    return undefined;
  }
  return stories.data[storyKey];
};

export const getStoryKey = (storyKey?: number): number | undefined => {
  if (storyKey === undefined) {
    return getRandomStoryKey();
  }
  const keys = Object.keys(stories.data)
    .filter(key => key !== storyKey.toString());
  const key = keys[Math.floor(Math.random() * keys.length)];
  return parseInt(key, 10);
};
