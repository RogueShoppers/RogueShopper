import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SingleProduct from '../client/components/singleProduct'
import React from 'react'
import {expect} from 'chai'

const adapter = new Adapter()
enzyme.configure({adapter})

//TEST WORK IN PROGRESS (Natalie)

describe('singleProduct component', () => {
  const testToy = {
    product: {
      id: 1,
      name: 'test toy',
      longDescription: 'test test test',
      price: 20,
      quantity: 0
    }
  }

  let singleProduct
  beforeEach(() => {
    singleProduct = shallow(<SingleProduct product={testToy} />)
  })

  it('renders the product name in an h1', () => {
    expect(singleProduct)
      .find('h1')
      .text()
      .to.be.equal('test toy')
  })

  it('renders correct product quantity status', () => {
    const wrapper = shallow(<SingleProduct product={testToy} />)
    expect(wrapper).to.include.text(
      'Sorry, this item is currently out of stock'
    )
  })
})
