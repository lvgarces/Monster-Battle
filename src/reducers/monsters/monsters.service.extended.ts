import { API_URL } from '../../constants/env';
import { Battle, Players } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';

const battle = async (
  playerMonster: Monster,
  computerMonster: Monster,
): Promise<Battle> => {
  let playerPoints = 0;
  let computerPoints = 0;

  if (playerMonster.hp > computerMonster.hp) playerPoints++;
  else if (playerMonster.hp < computerMonster.hp) computerPoints++;

  if (playerMonster.attack > computerMonster.attack) playerPoints++;
  else if (playerMonster.attack < computerMonster.attack) computerPoints++;

  if (playerMonster.defense > computerMonster.defense) playerPoints++;
  else if (playerMonster.defense < computerMonster.defense) computerPoints++;

  if (playerMonster.speed > computerMonster.speed) playerPoints++;
  else if (playerMonster.speed < computerMonster.speed) computerPoints++;

  const isTie = playerPoints === computerPoints;
  const winner =
    playerPoints > computerPoints ? playerMonster : computerMonster;

  console.log('Winner', winner ? winner.name : 'is a tie');

  return {
    winner,
    tie: isTie,
  };
};

export const MonsterServiceExtended = {
  battle,
};
