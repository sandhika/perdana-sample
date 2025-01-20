export type NestedPaths<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}` | `${K}.${NestedPaths<T[K]>}`
          : `${K}`
        : never;
    }[keyof T]
  : never;
    