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

export const findDogById = async (id: number): Promise<Dog> => {
  const dog: Dog = await db.dogs.findUnique({
    where: { id: Number(id) },
  });
  return dog;
}

// TODO: add createDog, updateDog, deleteDog
// Add dogs table to database and seed it with data