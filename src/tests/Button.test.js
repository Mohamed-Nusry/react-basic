import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Button from '../components/Button';

test('Text changes after button click', () => {
  render(
    <Button type="contained" text="Submit" />,
  );

  const beforeClick = screen.getByText(/default/i);
  expect(beforeClick).toBeInTheDocument();

  fireEvent.click(screen.getByText(/Submit/i));

  const afterClick = screen.getByText(/clicked/i);
  expect(afterClick).toBeInTheDocument();
});
