import { db } from '../src/utils/db.server';
import * as fs from 'fs';
import { ageToDate, dateToAge } from '../src/utils/utils';
// import { Dog } from '../src/dogs/dog.service';
// import { User } from '../src/users/user.service';

type Dog = {
  dog_name: string;
  owner_id: number;
  birthday: Date;
  sex: string;
  breed_id: number;
  size_id: number;
  activity1_id: number;
  activity2_id: number;
  activity3_id: number;
  temperament_id: number;
  is_vaccinated: boolean;
  is_fixed: boolean;
  dog_bio: string;
};

type User = {
  user_name: string;
  email: string;
  password: string;
  birthday: Date;
  gender: string;
  user_pic: string;
  user_bio: string;
  role: string;
  max_dist: number;
  zip_code: string;
};

type Author = { // TODO: remove
  authorName: string;
  email: string;
}

type Post = { // TODO: remove
  title: string;
  content: string | null;
  published: boolean;
}

// ------ The seeding function -------
async function seed() {
  console.log("Seeding the database...");

  console.log("- Adding sizes...");
  const sizes = getSizes();
  for (const size of sizes) {
    await db.sizes.create({
      data: {
        size,
      },
    });
  }

  console.log("- Adding activities...");
  const activities = getActivities();
  for (const activity of activities) {
    await db.activities.create({
      data: {
        activity,
      },
    });
  }

  console.log("- Adding temperaments...");
  
  const temperaments = getTemperaments();
  for (const temperament of temperaments) {
    await db.temperaments.create({
      data: {
        temperament,
      },
    });
  }

  console.log("- Adding breeds...");
  const breeds = getBreeds();
  for (const breed of breeds) {
    await db.breeds.create({
      data: {
        breed,
      },
    });
  }

  console.log("- Adding authors..."); // TODO: remove
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

  const author = await db.author.findFirst({ // TODO: remove
    where: {
      authorName: 'Alice',
    },
  });

  console.log("- Adding posts..."); // TODO: remove
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


  console.log("- Adding users...");
  await Promise.all(
    getUsers().map((user: User) => {
      const { user_name, email, password, birthday,
            gender, user_pic, user_bio, role,
            max_dist, zip_code } = user;
      return db.users.create({
        data: {
          user_name,
          password,
          email,
          birthday,
          gender,
          user_pic,
          user_bio,
          role,
          max_dist,
          zip_code,
        },
      });
    })
  );

  const user = await db.users.findFirst({
    where: {
      user_name: 'Alice',
    },
  });

  console.log("- Adding dogs...");
  await Promise.all(
    getDogs().map((dog: Dog) => {
      const { dog_name, owner_id, birthday, sex, breed_id, size_id,
              activity1_id, activity2_id, activity3_id,
              temperament_id, is_vaccinated, is_fixed, dog_bio } = dog;
      return db.dogs.create({
        data: {
          dog_name,
          owner_id, // user?.id || 1,
          birthday,
          sex,
          breed_id,
          size_id,
          activity1_id,
          activity2_id,
          activity3_id,
          temperament_id,
          is_vaccinated,
          is_fixed,
          dog_bio,
        },
      });
    })
  );
}

// -------- Helper functions ---------


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

function getDogs(): Array<Dog> {
  const fidobday = new Date(2020, 1, 1);
  return [
    {
      dog_name: 'Fido',
      birthday: fidobday,
      owner_id: 1,
      sex: 'male',
      breed_id: 1,
      size_id: 1,
      activity1_id: 1,
      activity2_id: 2,
      activity3_id: 3,
      temperament_id: 1,
      is_vaccinated: true,
      is_fixed: true,
      dog_bio: 'Fido is a classic doggo. He loves to play fetch and go for walks.'
    }
  ];
}

function getUsers(): Array<User> {
  const aliceDate = new Date(1990, 1, 1);
  return [
    {
      user_name: 'Alice',
      email: 'alice@hotmail.com',
      password: 'password',
      birthday: aliceDate,
      gender: 'Female',
      user_pic: 'https://images.unsplash.com/photo-1589986657445-8e1b0e1b5f1c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwY29sb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      user_bio: 'I love dogs!',
      role: 'user',
      max_dist: 10,
      zip_code: '12345',
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

function getBreeds(): Array<string> {
  const rawFile = fs.readFileSync('prisma/breeds.csv', 'utf8');
  const lines = rawFile.split('\n');
  const breeds: Array<string> = [];
  for (let line of lines) {
    breeds.push(line.split(',')[0]);
  }
  return breeds.slice(1); // remove header
}

seed();