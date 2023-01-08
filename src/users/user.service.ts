import { db } from '../utils/db.server';

type User = {
  id: number;
  user_name: string | null;
  email: string;
  password: string;
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
  return db.users.findUnique({
    where: { id },
  })
}

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const { user_name, email, password, birthday, gender, user_pic,
  user_bio, role, max_dist, zip_code } = user;
  return db.users.create({
    data: {
      user_name,
      email,
      password,
      birthday,
      gender,
      user_pic,
      user_bio,
      role,
      max_dist,
      zip_code,
    },
    select: {
      id: true,
      user_name: true,
      email: true,
      password: true,
      birthday: true,
      gender: true,
      user_pic: true,
      user_bio: true,
      role: true,
      max_dist: true,
      zip_code: true,
    }
  });
}

// TODO: figure out how to omit password from the return type
export const updateUser = async (
  user: Omit<User, 'id'>,
  id: number
): Promise<User> => {
  const { user_name, email, password, birthday, gender, user_pic,
  user_bio, role, max_dist, zip_code } = user;
  return db.users.update({
    where: { id },
    data: {
      user_name,
      email,
      password,
      birthday,
      gender,
      user_pic,
      user_bio,
      role,
      max_dist,
      zip_code,
    },
    select: {
      id: true,
      user_name: true,
      email: true,
      password: true,
      birthday: true,
      gender: true,
      user_pic: true,
      user_bio: true,
      role: true,
      max_dist: true,
      zip_code: true,
    }
  });
}

export const deleteUser = async (id: number): Promise<void> => {
  await db.users.delete({
    where: { id },
  });
}
