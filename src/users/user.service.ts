import { db } from '../utils/db.server';

type User = {
  id: number;
  user_name: string | null;
  email: string | null;
  password: string | null;
  birthday: Date | null;
  gender: string | null;
  user_pic: string | null;
  user_bio: string | null;
  role: string | null;
  max_dist: number | null;
  zip_code: string | null;
};

export const listUsers = async (): Promise<User[]> => {
  const users: Array<User> = await db.users.findMany();
  return users;
}

export const findUserById = async (id: number): Promise<User | null> => {
  const user: User = await db.users.findUnique({
    where: { id: Number(id) },
  });
  return user;
}

// TODO: add createDog, updateDog, deleteDog
// Add dogs table to database and seed it with data