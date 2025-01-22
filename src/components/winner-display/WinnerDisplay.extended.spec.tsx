import React from 'react';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { WinnerDisplay } from './WinnerDisplay.extended';

describe('WinnerDisplayExtended', () => {
  it('renders the winner text correctly', () => {
    const winnerTest = 'Computer Wins!';
    render(<WinnerDisplay text={winnerTest} />);

    const winnerElement = screen.getByText(new RegExp(winnerTest, 'i'));

    expect(winnerElement).toBeInTheDocument();
  });
});
