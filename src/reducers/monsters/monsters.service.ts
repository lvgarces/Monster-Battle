import { API_URL_PROD } from '../../constants/env';
import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL_PROD}/monsters`).then(response =>
    response.json(),
  );

export const MonsterService = {
  getAll,
};
