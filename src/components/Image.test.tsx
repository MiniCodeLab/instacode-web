import { render, screen } from '@testing-library/react';
import Image from './Image';

describe('Image', () => {
  it('renders the component', () => {
    render(<Image src="hello" alt="world" />);

    const imageElement = screen.queryByAltText('world');
    expect(imageElement).toBeVisible();
  });
});
