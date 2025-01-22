import React from 'react';

import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { Monster } from '../../models/interfaces/monster.interface';
import { setSelectedMonster } from '../../reducers/monsters/monsters.actions';
import { setRandomMonster } from '../../reducers/monsters/monsters.actions.extended';
import {
  Image,
  ListTitle,
  MonsterCard,
  MonsterName,
  MonstersSection,
} from './MonstersList.styled';

type MonstersListProps = {
  monsters: Monster[];
};

const MonstersList: React.FC<MonstersListProps> = ({ monsters }) => {
  const dispatch = useAppDispatch();

  const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(
    null,
  );
  const [selectedRivalMonsterId, setSelectedRivalMonsterId] = useState<
    string | null
  >(null);

  const handleMonsterClick = (monster: Monster) => {
    const playerMonsterId =
      selectedMonsterId === monster.id ? null : monster.id;
    setSelectedMonsterId(playerMonsterId);

    if (playerMonsterId) {
      const availableMonsters = monsters.filter(
        pcMonster => pcMonster.id !== playerMonsterId,
      );
      const randomMonster =
        availableMonsters[Math.floor(Math.random() * availableMonsters.length)];

      setSelectedMonsterId(randomMonster.id);
      dispatch(setSelectedMonster(!playerMonsterId ? null : monster));
      dispatch(setRandomMonster(randomMonster));
    } else {
      setSelectedMonsterId(null);
      dispatch(setSelectedMonster(null));
      dispatch(setRandomMonster(null));
    }
  };

  return (
    <div>
      <ListTitle>
        {monsters.length > 0 ? 'Select your monster' : 'No monsters available'}
      </ListTitle>

      <MonstersSection data-testid="monsters-list-section">
        {monsters.map(monster => (
          <MonsterCard
            key={monster.id}
            onClick={() => handleMonsterClick(monster)}
            selected={monster.id === selectedMonsterId}
            data-testid={monster.id}>
            <Image src={monster.imageUrl} />
            <MonsterName>{monster.name}</MonsterName>
          </MonsterCard>
        ))}
      </MonstersSection>
    </div>
  );
};

export { MonstersList };
