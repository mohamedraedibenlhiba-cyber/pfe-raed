// Shim for chart.js subpath not exposed in the package exports map.
// ng2-charts v6 imports DeepPartial from this path; chart.js v4 doesn't
// declare it as an exports entry, so we re-declare it here.
declare module 'chart.js/dist/types/utils' {
  export type DeepPartial<T> = T extends Function
    ? T
    : T extends Array<infer U>
      ? Array<DeepPartial<U>>
      : T extends object
        ? { [P in keyof T]?: DeepPartial<T[P]> }
        : T | undefined;

  export type DistributiveArray<T> = [T] extends [unknown] ? Array<T> : never;

  export type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

  export type AllKeys<T> = T extends any ? keyof T : never;

  export type PickType<T, K extends AllKeys<T>> = T extends { [k in K]?: any }
    ? T[K]
    : undefined;

  export type Merge<T extends object> = {
    [k in AllKeys<T>]: PickType<T, k>;
  };
}
