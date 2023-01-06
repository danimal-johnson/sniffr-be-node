import { db } from '../utils/db.server';

export type Dog = {
  id: number;
  dog_name: string;
  birthday: Date | null;
  owner_id: number;
  breed_id: number | null;
  size_id: number | null;
  activity1_id: number | null;
  activity2_id: number | null;
  activity3_id: number | null;
  temperament_id: number | null;
  is_vaccinated: boolean | null;
  is_fixed: boolean | null;
  dog_bio: string | null;
};

export const listDogs = async (): Promise<Dog[]> => {
  const dogs = await db.dogs.findMany();
  return dogs;
}

export const findDogById = async (id: number): Promise<Dog | null> => {
  return db.dogs.findUnique({
    where: { id },
  });
}

export const createDog = async (dog: Omit<Dog, 'id'>): Promise<Dog> => {
  const { dog_name, birthday, owner_id, breed_id, size_id,
          activity1_id, activity2_id, activity3_id, temperament_id, 
          is_vaccinated, is_fixed, dog_bio } = dog;
  return db.dogs.create({
    data: {
      dog_name,
      birthday,
      owner_id,
      breed_id,
      size_id,
      activity1_id,
      activity2_id,
      activity3_id,
      temperament_id,
      is_vaccinated,
      is_fixed,
      dog_bio
    },
    select: {
      id: true,
      dog_name: true,
      birthday: true,
      owner_id: true,
      breed_id: true,
      size_id: true,
      activity1_id: true,
      activity2_id: true,
      activity3_id: true,
      temperament_id: true,
      is_vaccinated: true,
      is_fixed: true,
      dog_bio: true
    }
  });
}

export const updateDog = async (
  dog: Omit<Dog, 'id'>,
  id: number
): Promise<Dog> => {
  const { dog_name, birthday, owner_id, breed_id, size_id,
          activity1_id, activity2_id, activity3_id, temperament_id, 
          is_vaccinated, is_fixed, dog_bio } = dog;
  return db.dogs.update({
    where: { id },
    data: {
      dog_name,
      birthday,
      owner_id,
      breed_id,
      size_id,
      activity1_id,
      activity2_id,
      activity3_id,
      temperament_id,
      is_vaccinated,
      is_fixed,
      dog_bio
    },
    select: {
      id: true,
      dog_name: true,
      birthday: true,
      owner_id: true,
      breed_id: true,
      size_id: true,
      activity1_id: true,
      activity2_id: true,
      activity3_id: true,
      temperament_id: true,
      is_vaccinated: true,
      is_fixed: true,
      dog_bio: true
    }
  });
}

export const deleteDog = async (id: number): Promise<void> => {
  await db.dogs.delete({
    where: { id },
  });
}
