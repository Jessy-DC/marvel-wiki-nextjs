import { render, screen, queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/index'
import {Header} from '../components/header'
import Characters from "../pages/characters";

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

test('render Character component', () => {
    const idElement = 'characters-grid'
    const getById = queryByAttribute.bind(null, 'id');
    const dom = render(<Characters />)
    expect(getById(dom.container, idElement)).toBeInTheDocument()
})