export type Map<T> = { [key: string]: T };
export type Optional<T> = T | null | undefined;
export type Nullable<T> = T | null;
export interface Token {
  accessToken: string;
  userId: string;
}
