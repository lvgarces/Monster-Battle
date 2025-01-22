import React from 'react';

import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  BattleMonsterStats,
  ProgressBar,
} from './MonsterBattleCard.extended.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  if (!monster) {
    return (
      <BattleMonsterCard centralized>
        <BattleMonsterTitle>{title!}</BattleMonsterTitle>
      </BattleMonsterCard>
    );
  }
  return (
    <BattleMonsterCard centralized>
      <img
        src={monster.imageUrl}
        alt={monster.name}
        style={{ width: '100%', height: 'auto', borderRadius: '7px' }}
      />
      <BattleMonsterTitle>{title!}</BattleMonsterTitle>

      <div style={{ width: '100%', borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}>
        <BattleMonsterStats>HP</BattleMonsterStats>
        <ProgressBar variant="determinate" value={monster.hp} />
        <BattleMonsterStats>Attack</BattleMonsterStats>
        <ProgressBar variant="determinate" value={monster.attack} />
        <BattleMonsterStats>Defense</BattleMonsterStats>
        <ProgressBar variant="determinate" value={monster.defense} />
        <BattleMonsterStats>Speed</BattleMonsterStats>
        <ProgressBar variant="determinate" value={monster.speed} />
      </div>
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
