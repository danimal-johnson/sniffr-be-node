import { db } from '../utils/db.server';
import bcrypt from 'bcrypt';

export type User = {
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
}

export const login = async (email: string, password: string): 
  Promise<User> => {
  const user = await db.users.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error('User not found'); // Crashes
  }

  // TODO: add salt to user. Then: 2nd arg is user.salt
  if (!bcrypt.compareSync(password, user.password)) {
    throw new Error ('Password does not match'); // Crashes
  }

  console.log(`Matched PW: ${password}`);
  console.log(user);
  return user;
}

export const signup = async (user: any): Promise<void> => {
  const { email, password } = user;
  
  const existingUsers = await db.users.findMany({
    where: { email: email }
  });

  console.log(existingUsers);

  if (existingUsers.length > 0) {
    throw new Error('User already exists'); // Works okay.
  }
  
  await db.users.create({
    data: {
      ...user,
      password: bcrypt.hashSync(password, 10),
    }
  });
}