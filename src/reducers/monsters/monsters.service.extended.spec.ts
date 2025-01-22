import { MonsterServiceExtended } from './monsters.service.extended';
import { Monster } from '../../models/interfaces/monster.interface';
import monstersData from '../../../data/monsters.json'; 

describe('Monsters Service Extended', () => {
  it('should get the winner of the battle of monsters', async () => {
    
    const playerMonster: Monster = monstersData.monsters[4]
    const computerMonster: Monster = monstersData.monsters[0]

    const result = await MonsterServiceExtended.battle(playerMonster, computerMonster);

    expect(result.winner).toEqual(playerMonster);
    expect(result.tie).toBe(false)
  });
});
