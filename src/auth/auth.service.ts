import { db } from '../utils/db.server';
import { hashPassword } from '../utils/utils';

const login = async (email: string, password: string) => {
  const user = await db.users.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  // TODO: add salt to user. Then: 2nd arg is user.salt
  const passwordMatch = await hashPassword(password) === user.password;

  if (!passwordMatch) {
    throw new Error('Password does not match');
  }

  return user;
}