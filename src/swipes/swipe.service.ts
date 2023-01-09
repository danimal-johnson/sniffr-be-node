import { db } from '../utils/db.server';

export type Swipe = {
  id: number;

  // dog_id: number,
  // swiped_dog_id: number,
  // is_interested: boolean,
  // creation_time: Date, //DateTime?
};

export const listSwipes = async (): Promise<Swipe[]> => {
  const swipes = await db.swipes.findMany();
  return swipes;
}

export const findSwipeById = async (id: number): Promise<Swipe | null> => {
  return db.swipes.findUnique({
    where: { id },
  });
}

export const createSwipe = async (swipe: Omit<Swipe, 'id'>): Promise<Swipe> => {
  const {  } = swipe;
  return db.swipes.create({
    data: {

    },
    select: {
      id: true,
    }
  });
}

export const updateSwipe = async (
  swipe: Omit<Swipe, 'id'>,
  id: number
): Promise<Swipe> => {
  const {  } = swipe;
  return db.swipes.update({
    where: { id },
    data: {
    },
    select: {
      id: true,
    }
  });
}

export const deleteSwipe = async (id: number): Promise<void> => {
  await db.swipes.delete({
    where: { id },
  });
}

// TODO: Add filtering
