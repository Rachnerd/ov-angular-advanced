/**
 * Represents a type that can be normalized.
 */
interface Identifier {
  id: string;
}

/**
 * Helper type that enforces a consistent data shape.
 */
export interface Normalized<T extends Identifier> {
  byId: { [id: string]: T };
  allIds: string[];
}

/**
 * Helper function that normalizes a collection.
 * @param collection Array of normalizable items T.
 * @returns Normalized collection of array T.
 */
export const normalize = <T extends Identifier>(
  collection: T[]
): Normalized<T> =>
  collection.reduce(
    ({ allIds, byId }, t) => ({
      allIds: [...allIds, t.id],
      byId: {
        ...byId,
        [t.id]: t,
      },
    }),
    {
      byId: {},
      allIds: [],
    } as Normalized<T>
  );

/**
 * Helper function that converts a normalized collection back to array.
 * @param param0 Normalized shape.
 * @returns Array equivalant of collection T.
 */
export const toArray = <T extends Identifier>({
  byId,
  allIds,
}: Normalized<T>): T[] => allIds.map((id) => byId[id]);

/**
 * Helper function that generates an empty normalized collection.
 * @returns Empty normalized shape
 */
export const emptySet = <T extends Identifier>(): Normalized<T> => ({
  byId: {},
  allIds: [],
});

export const mergeSets = <T extends Identifier>(
  a: Normalized<T>,
  b: Normalized<T>
): Normalized<T> => ({
  byId: {
    ...a.byId,
    ...b.byId,
  },
  allIds: {
    ...a.allIds,
    ...b.allIds.filter((id) => a.byId[id] === undefined),
  },
});
