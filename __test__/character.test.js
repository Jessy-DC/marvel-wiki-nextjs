import { render, queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Characters from "../pages/characters";

test('render Character component', () => {
    const idElement = 'characters-grid'
    const getById = queryByAttribute.bind(null, 'id');
    let promise = new Promise((resolve) => {
        setTimeout(function() {
            let dom = render(<Characters />)
            resolve(dom)
        }, 3000)
    })
    promise.then((dom) => {
        expect(getById(dom.container, idElement)).toBeInTheDocument()
    })

})