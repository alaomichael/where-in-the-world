import React from 'react';
import styled from 'styled-components';
import { useTheme } from './ThemeContext';

const ToggleButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  border-radius: 0;
  color: inherit;
  font-weight: 600;
`;
export default function ThemeToggler() {
  const [theme, toggleTheme] = useTheme();
  const isDarkTheme = theme === 'dark';
  return (
    <div>
      <ToggleButton onClick={toggleTheme}>
        <span role="img" aria-label={`${isDarkTheme ? 'Sun' : 'Moon'} emoji`}>
          {isDarkTheme ? '🌞' : '🌙'}
        </span>{' '}
        {isDarkTheme ? 'Light' : 'Dark'} mode
      </ToggleButton>
    </div>
  );
}
