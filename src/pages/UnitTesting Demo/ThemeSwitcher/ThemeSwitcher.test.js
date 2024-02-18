import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeSwitcher from './ThemeSwitcher';

describe('ThemeSwitcher', () => {
  it('has toggle theme button', () => {
    render(<ThemeSwitcher />);
    const themeSwitcherBtn = screen.getByRole('button');
    userEvent.click(themeSwitcherBtn);

    expect(screen.getByText(/Current Theme/i)).toHaveTextContent(/dark/i);
  });
  // TODO: Test whether the parent div has

  it('has light theme and onClick of button changes to dark theme', () => {
    render(<ThemeSwitcher />);
    const themeSwitcherBtn = screen.getByRole('button');
    expect(screen.getByTestId('themeSwitcher')).toHaveStyle('color: #000');
    expect(screen.getByTestId('themeSwitcher')).toHaveStyle('backgroundColor: #fff');
    userEvent.click(themeSwitcherBtn);
    expect(screen.getByTestId('themeSwitcher')).toHaveStyle('color: #fff');
    expect(screen.getByTestId('themeSwitcher')).toHaveStyle('backgroundColor: #000');
  });
});
