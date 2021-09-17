import { DEFAULT_CACHE_DURATION_MS, DEFAULT_STORAGE_KEY } from '../constants';
import { IStorage } from '../storage/types';

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

  private getKey(indexedKey: string) {
    return `${this._storageKey}-${indexedKey}`;
  }

  private getTimeKey(indexedKey: string) {
    return `${this._storageKey}-${indexedKey}-CACHED_DURATION`;
  }

  public async get<T>(indexedKey: string = ''): Promise<T | null> {
    const time = await this._storage.getItem(this.getTimeKey(indexedKey));

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
      this._storage.setItem(this.getTimeKey(indexedKey), Date.now().toString()),
    ]);
  }
}

export { StorageHandler };
