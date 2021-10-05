export type Partispant = Readonly<{
  name: string;
}>;

export const usePartispants = (gameId: string): Partispant[] => {
  return [{ name: "Johan" }, { name: "André" }];
};
