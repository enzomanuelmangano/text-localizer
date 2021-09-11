/* eslint-disable no-unused-vars */
type TrimLeft<T> = T extends ` ${infer String}` ? TrimLeft<String> : T;
type TrimRight<T> = T extends `${infer String} ` ? TrimRight<String> : T;
type Trim<T> = TrimLeft<TrimRight<T>>;

type ParseBrackets<
  S extends string,
  Params extends string[] = []
> = S extends `${infer _}{{${infer String}}}${infer Tail}`
  ? ParseBrackets<Tail, [Trim<String>, ...Params]>
  : Params;

type Flat<
  S extends string[] = [],
  Index extends 0[] = [],
  Result = undefined
> = Index['length'] extends S['length']
  ? Result
  : Flat<S, [0, ...Index], Exclude<Result, undefined> | S[Index['length']]>;

type ParseKeys<T extends string> = Flat<ParseBrackets<T>>;

type Objectify<
  T extends string,
  KeyType = string | number
> = ParseKeys<T> extends undefined
  ? undefined
  : Record<Exclude<ParseKeys<T>, undefined>, KeyType>;

type ValueHandler<T extends string> = Objectify<T> extends undefined
  ? T
  : (params: Required<Objectify<T>>) => string;

export type TranslationsParser<T extends Record<string, string>> = {
  [K in keyof T]: ValueHandler<T[K]>;
};
