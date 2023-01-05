import { db } from '../utils/db.server';

export type Temperament = {
  id: number;
  temperament: string;
};

export type Size = {
  id: number;
  size: string;
};

export type Activity = {
  id: number;
  activity: string;
};

export type Breed = {
  id: number;
  breed: string;
};

export const listTemperaments = async (): Promise<Temperament[]> => {
  const temperaments = await db.temperaments.findMany({
    select: {
      id: true,
      temperament: true,
    }
  });
  return temperaments;
}

export const listSizes = async (): Promise<Size[]> => {
  const sizes = await db.sizes.findMany();
  return sizes;
}

export const listActivities = async (): Promise<Activity[]> => {
  const activities = await db.activities.findMany();
  return activities;
}

export const listBreeds = async (): Promise<Breed[]> => {
  const breeds = await db.breeds.findMany();
  return breeds;
}

