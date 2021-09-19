export interface IStorage {
  setItem(key: string, value: string): void | Promise<void>;
  getItem(key: string): null | string | Promise<string>;
}

export interface StorageConfig {
  key: string;
  storage: IStorage;
}
