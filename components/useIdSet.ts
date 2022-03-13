export const useIdSet = <T extends string | number>(
  list: { id: T }[]
): ReadonlySet<T> => {
  return new Set(list.map((item) => item.id));
};
