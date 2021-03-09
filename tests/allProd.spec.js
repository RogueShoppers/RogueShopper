import React from 'react'
import {expect} from 'chai'
import enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import allproducts from '../client/components/allproducts'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('allproducts component', () => {
  const funChewy = {
    id: 1,
    name: 'Fun chewy',
    shortDescription: 'A flaming hot cheetoh to chew on',
    price: 1.0
  }

  describe('All Products Component', function() {
    it('renders different name, description, and price if passed different props', () => {
      const wrapper = mount(<allproducts product={funChewy} />)
      expect(wrapper).to.include.text('Fun chewy')
      expect(wrapper).to.include.text('A flaming hot cheetoh to chew on')
      expect(wrapper).to.include.text('1.00')
    })
  })
})
