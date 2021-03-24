import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/index'

test('renders new component', () => {
    const messageToTest = `Welcome home !`
    render(<Home />);
    expect(screen.queryByText(messageToTest)).toBeInTheDocument()
});