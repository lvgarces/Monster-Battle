import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`https://battle-of-monster-db.vercel.app/monsters`).then(
    response => response.json(),
  );

export const MonsterService = {
  getAll,
};
