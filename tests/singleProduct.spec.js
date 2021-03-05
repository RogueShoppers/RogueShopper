import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SingleProduct} from '../client/components/singleProduct'

// const adapter = new Adapter()
// enzyme.configure({adapter})

//TEST WORK IN PROGRESS (Natalie)

describe('singleProduct component', () => {
  const singleProduct = {
    id: 1,
    name: 'test',
    price: 10
  }

  it('renders the product name', () => {
    const wrapper = shallow(<singleProduct product={singleProduct} />)
    expect(wrapper.to.include.text('test'))
  })
})
