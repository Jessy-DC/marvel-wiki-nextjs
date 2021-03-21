import * as React from 'react'
import {mount, configure} from 'enzyme'
import Home from '../pages/index'
import Characters from '../pages/characters/index'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('Pages', () => {
    describe('Home', () => {
        it('should render without throwing an error', function () {
            const wrap = mount(<Home />)
            expect(wrap.find('div').text()).toBe('Welcome home !')
        })
    })
})