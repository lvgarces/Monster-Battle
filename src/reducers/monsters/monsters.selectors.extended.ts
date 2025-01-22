import { RootState } from '../../app/store';
import { Battle } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';

export const monsterWins = (state: RootState): Battle | null =>
  state.monstersExtended.winner;

export const selectRandomMonster = (state: RootState): Monster | null =>
  state.monstersExtended.selectRandomMonster;
