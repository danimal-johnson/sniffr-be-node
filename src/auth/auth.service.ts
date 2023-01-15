import { db } from '../utils/db.server';
// import { hashPassword } from '../utils/utils';

// TODO: replace function with actual hashing function
function hashPassword(password: string) {
  return password;
}

export const login = async (email: string, password: string) => {
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

export const signup = async (user: any) => {
  const { email, password } = user;
  
  const existingUser = await db.users.findUnique({
    where: {
      email,
    },
  });
  
  if (existingUser) {
    throw new Error('User already exists');
  }
}