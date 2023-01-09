import { db } from '../utils/db.server';

export type Match = {
  id: number;
  temperament: string;
};

// TODO: This is just an example. Shrink it down.
export const listMatches = async (): Promise<Match[]> => {
  const matches = await db.matches.findMany({
    select: {
      id: true,
      temperament: true,
    }
  });
  return matches;
}

export const findMatchById = async (id: number): Promise<Match | null> => {
  return db.matches.findUnique({
    where: { id },
  });
}

export const deleteMatch = async (id: number): Promise<void> => {
  return db.matches.findUnique({
    where: { id },
  });
}

