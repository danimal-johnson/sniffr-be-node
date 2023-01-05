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

  await Promise.all(
    getActivities().map((activity: string) => {
      return db.activities.create({
        data: {
          activity,
        },
      });
    })
  );

  await Promise.all(
    getTemperaments().map((temperament: string) => {
      return db.temperaments.create({
        data: {
          temperament,
        },
      });
    })
  );

  await Promise.all(
    getSizes().map((size: string) => {
      return db.sizes.create({
        data: {
          size,
        },
      });
    })
  );
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

function getActivities(): Array<string> {
  return [
    "Walks",
    "Fetch",
    "Tricks",
    "Agility",
    "Swimming",
    "Car Rides",
    "Frisbee",
    "Dog Parks",
    "Cuddles"
  ];
}

function getTemperaments(): Array<string> {
  return [
    "Saucy",
    "Playful",
    "Cautious",
    "Clingy",
    "Permanently Ecstatic",
    "Old and wise",
    "Affectionate",
    "Energetic",
    "Intelligent",
    "Loyal",
    "Loving",
    "Protective",
    "Trainable"
  ];
}

function getSizes(): Array<string> {
  return [
    "Teacup (0-4 lbs)",
    "Toy (5-12 lbs)",
    "Small (13-24 lbs)",
    "Medium (25-59 lbs)",
    "Large (60-99 lbs)",
    "Giant (100+ lbs)"
  ];
}

seed();