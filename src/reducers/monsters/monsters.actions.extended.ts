import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterServiceExtended } from './monsters.service.extended';

export const fetchBattleWins = createAsyncThunk(
  'monsters/fetchBattleWins',
  async ({
    playerMonster,
    computerMonster,
  }: {
    playerMonster: Monster;
    computerMonster: Monster;
  }) => {
    const result = await MonsterServiceExtended.battle(
      playerMonster,
      computerMonster,
    );
    return result;
  },
);

export const setRandomMonster = createAction<Monster | null>(
  'monsters/setRandomMonster',
);
