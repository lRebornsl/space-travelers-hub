import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../components/Button/Button';
import { describe, expect, test } from 'vitest';

describe('Button component', () => {
  test('renders a button with the provided text', () => {
    const buttonText = 'Reserve Text';
    const { getByText } = render(<Button name={buttonText} />)
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });
})
