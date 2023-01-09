import { db } from '../utils/db.server';

export type Match = {
  id: number;

  // dog_id_one: number,
  // dog_id_two: number,
  // creation_time: Date, // DateTime?
};

// TODO: This is just an example. Shrink it down.
export const listMatches = async (): Promise<Match[]> => {
  const matches = await db.matches.findMany();
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

