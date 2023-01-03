import { db } from '../src/utils/db.server.js';

type User = {
  name: string;
  email: string;
}

type Post = {
  title: string;
  content: string | null;
  published: boolean;
}

async function seed() {
  await Promise.all(
    getUsers.map((user: User) => db.user.create({
      return db.user.create({
        data: {
          name: user.name,
          email: user.email,
        }
      })
    }))
  )

  const user = await db.user.findFirst({
    where: {
      firstName: 'Alice',
    },
  });

  await Promise.all(
    getPosts().map((post: Post) => db.post.create({
      return db.post.create({
        data: {
          title: post.title,
          content: post.content,
          published: post.published,
          authorId: user.id,
        },
    }))
  );
}

function getUsers(): User[] {
  return [
    {
      name: 'Alice',
      email: 'alice@hotmail.com',
    },
    {
      name: 'Bob',
      email: 'bob@hotmail.com',
    },
    {
      name: 'Charlie',
      email: 'charlie@hotmail.com',
    }
  ];
}

function getPosts(): Post[] {
  return [
    {
      title: 'Hello World',
      content: 'This is my first post',
      published: true,
    },
    {
      title: 'Foo Bar',
      content: 'This is how I use my foo.',
      published: false,
    },
  ];
}