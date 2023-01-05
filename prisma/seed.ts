import { db } from '../src/utils/db.server';

type Author = {
  authorName: string;
  email: string;
}

type Post = {
  title: string;
  content: string | null;
  published: boolean;
}

async function seed() {
  console.log("Seeding the database...");
  await Promise.all(
    getAuthors().map((author: Author) => {
      const { authorName, email } = author;
      return db.author.create({
        data: {
          authorName,
          email,
        },
      });
    })
  );

  const author = await db.author.findFirst({
    where: {
      authorName: 'Alice',
    },
  });

  await Promise.all(
    getPosts().map((post: Post) => {
      const { title, content, published } = post;
      return db.post.create({
        data: {
          title,
          content,
          published,
          authorId: author?.id || 1,
        },
      });
    }
  ));
}

function getAuthors(): Array<Author> {
  return [
    {
      authorName: 'Alice',
      email: 'alice@hotmail.com',
    },
    {
      authorName: 'Bob',
      email: 'bob@hotmail.com',
    },
    {
      authorName: 'Charlie',
      email: 'charlie@hotmail.com',
    }
  ];
}

function getPosts(): Array<Post> {
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

seed();