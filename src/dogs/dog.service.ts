import { db } from '../utils/db.server';

export type Dog = {
  id: number;
  dog_name: string;
  age: number;
  owner_id: number;
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

export const listDogs = async (): Promise<Dog[]> => {
  const dogs = await db.dogs.findMany();
  return dogs;
}

export const findDogById = async (id: number): Promise<Dog> => {
  const dog = await db.dogs.findUnique({
    where: { id: Number(id) },
  });
  return dog;
}

// TODO: add createDog, updateDog, deleteDog
// Add dogs table to database and seed it with data