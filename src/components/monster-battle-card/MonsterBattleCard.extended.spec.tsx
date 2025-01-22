import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import monstersData from '../../../data/monsters.json';
import { MonsterBattleCard } from './MonsterBattleCard.extended';

const mockMonster = monstersData.monsters[0]

describe('MonsterBattleCardExtended', () => {
  it('renders the monster card correctly with a monster', () => {

    render(<MonsterBattleCard title={mockMonster.name} monster={mockMonster}/>)

    expect(screen.getByText(mockMonster.name)).toBeInTheDocument();
    
    const monsterImage = screen.getAllByAltText(mockMonster.name)

    expect(screen.getByText('HP')).toBeInTheDocument();
    expect(screen.getByText('Attack')).toBeInTheDocument();
    expect(screen.getByText('Defense')).toBeInTheDocument();
    expect(screen.getByText('Speed')).toBeInTheDocument();
    
  });
});
