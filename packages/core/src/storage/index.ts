import { DEFAULT_CACHE_DURATION_MS, DEFAULT_STORAGE_KEY } from '../constants';
import type { IStorage } from '../storage/types';

const CACHED_DURATION_TAIL_KEY = 'CACHED_DURATION';

class StorageHandler {
  private _storage: IStorage;
  private _storageKey: string = DEFAULT_STORAGE_KEY;
  private _cacheDuration: number = DEFAULT_CACHE_DURATION_MS;

  constructor(input: {
    storage: IStorage;
    key?: string;
    cacheDurationMs?: number;
  }) {
    this._storage = input.storage;
    this._cacheDuration = input.cacheDurationMs ?? this._cacheDuration;
    this._storageKey = input.key ?? this._storageKey;
  }

  public getKey(indexedKey: string) {
    return `${this._storageKey}-${indexedKey}`;
  }

  public getLastTimeKey(indexedKey: string) {
    return `${this._storageKey}-${indexedKey}-${CACHED_DURATION_TAIL_KEY}`;
  }

  public async get<T>(indexedKey: string = ''): Promise<T | null> {
    const time = await this._storage.getItem(this.getLastTimeKey(indexedKey));

    const isExpired =
      time == null ? false : Date.now() - +time > this._cacheDuration;
    if (isExpired) return null;

    const storedData = await this._storage.getItem(this.getKey(indexedKey));
    if (storedData == null) return null;

    return JSON.parse(storedData);
  }

  public async set<T>(indexedKey: string, data: T) {
    return await Promise.all([
      this._storage.setItem(this.getKey(indexedKey), JSON.stringify(data)),
      this._storage.setItem(
        this.getLastTimeKey(indexedKey),
        Date.now().toString()
      ),
    ]);
  }
}

export { StorageHandler, CACHED_DURATION_TAIL_KEY };
