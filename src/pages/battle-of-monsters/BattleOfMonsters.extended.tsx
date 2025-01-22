import React from 'react';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard.extended';
import { MonstersList } from '../../components/monsters-list/MonstersList.extended';
import { Title } from '../../components/title/Title';
import { fetchMonstersData } from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.extended.styled';
import {
  selectRandomMonster,
  monsterWins,
} from '../../reducers/monsters/monsters.selectors.extended';
import { fetchBattleWins } from '../../reducers/monsters/monsters.actions.extended';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay.extended';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const computerMonster = useSelector(selectRandomMonster);
  const winner = useSelector(monsterWins);
  const [showWinner, setShowWinner] = useState<boolean>(false);

  useEffect(() => {
    if (winner) {
      setShowWinner(true);

      const timeout = setTimeout(() => {
        setShowWinner(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [winner, dispatch]);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  const handleStartBattleClick = () => {
    if (selectedMonster && computerMonster) {
      dispatch(
        fetchBattleWins({ playerMonster: selectedMonster, computerMonster }),
      );
    }
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />

      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          title={computerMonster?.name || 'Computer'}
          monster={computerMonster}></MonsterBattleCard>
      </BattleSection>
      {showWinner &&
        winner &&
        (winner.tie ? (
          <WinnerDisplay text="It is a tie!"></WinnerDisplay>
        ) : (
          <WinnerDisplay text={`${winner.winner.name} wins!`}></WinnerDisplay>
        ))}
    </PageContainer>
  );
};

export { BattleOfMonsters };
