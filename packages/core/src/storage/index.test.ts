import { DEFAULT_CACHE_DURATION_MS } from '../constants';
import { CACHED_DURATION_TAIL_KEY, StorageHandler } from './index';
import type { IStorage } from './types';

const translationsData = { check: 'test' };

const storage: IStorage = {
  getItem: jest.fn((key: string) => {
    if (key.includes(CACHED_DURATION_TAIL_KEY)) {
      return `${Date.now() - 5000}`; // 5 Seconds Ago
    }
    return JSON.stringify(translationsData);
  }),
  setItem: jest.fn(() => {
    return;
  }),
};

describe('check if StorageHandler is working properly', () => {
  test('fetch translations from storage when translations are cached for less then cacheDurationMs', async () => {
    const storageHandler = new StorageHandler({
      storage,
      cacheDurationMs: DEFAULT_CACHE_DURATION_MS,
    });

    const key = 'language';
    const translations = await storageHandler.get(key);

    expect(storage.getItem).toHaveBeenCalledWith(
      storageHandler.getLastTimeKey(key)
    );
    expect(storage.getItem).toHaveBeenCalledWith(storageHandler.getKey(key));
    expect(translations).toStrictEqual(translationsData);
  });

  test("don't fetch translations when cacheDurationMs === 0", async () => {
    const storageHandler = new StorageHandler({
      storage,
      cacheDurationMs: 0,
    });

    const key = 'language';
    const translations = await storageHandler.get(key);

    expect(storage.getItem).toHaveBeenCalledWith(
      storageHandler.getLastTimeKey(key)
    );
    expect(translations).toBe(null);
  });

  test(`
    when new translations are stored, 
    the storage handler must store two values: 
    - current time (ms); 
    - translations`, async () => {
    const storageHandler = new StorageHandler({
      storage,
    });

    await storageHandler.set('key', translationsData);

    expect(storage.setItem).toBeCalledTimes(2);
  });
});
