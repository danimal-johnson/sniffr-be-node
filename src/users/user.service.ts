import { db } from '../utils/db.server';

export type User = {
  id: number;
  user_name: string;
  email: string;
  password: string;
  birthday: Date;
  gender: string;
  user_pic: string;
  user_bio: string;
  role: string;
  max_distance: number;
  zip_code: string;
};

export const listUsers = async (): Promise<User[]> => {
  const dogs = await db.users.findMany();
  return dogs;
}

export const findUserById = async (id: number): Promise<User> => {
  const dog = await db.users.findUnique({
    where: { id: Number(id) },
  });
  return dog;
}

// TODO: add createDog, updateDog, deleteDog
// Add dogs table to database and seed it with data