import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/index'
import {Header} from '../components/header'

test('renders new component', () => {
    const messageToTest = `Welcome home !`
    render(<Home />);
    expect(screen.queryByText(messageToTest)).toBeInTheDocument()
});

test('render Header component', () => {
    const messageToTest = `Characters`
    render(<Header />);
    expect(screen.queryByText(messageToTest)).toBeInTheDocument()
})

