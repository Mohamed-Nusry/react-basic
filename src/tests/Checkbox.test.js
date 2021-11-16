import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Checkbox from '../components/Checkbox';

test('Checkbox changes the text after click', () => {
  const {queryByLabelText, getByLabelText} = render(
    <Checkbox labelOn="On" labelOff="Off" />,
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});
