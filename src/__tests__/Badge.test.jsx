import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Badge from '../components/Badge/Badge';
import { describe, expect, test } from 'vitest';

describe('Badge component', () => {
  test('renders reserved badge', () => {
    const name = 'Reserved';
    const { getByText } = render(<Badge name={name} />)
    const badgeElement = getByText(name);
    expect(badgeElement).toBeInTheDocument();
  })
})