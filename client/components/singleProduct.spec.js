import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SingleProduct} from './singleProduct'

const adapter = new Adapter()
enzyme.configure({adapter})

//TEST WORK IN PROGRESS (Natalie)

describe('singleProduct', () => {
  let singleProduct

  beforeEach(() => {
    singleProduct = shallow(<SingleProduct toy="toy" />)
  })

  it('renders the product name in an h1', () => {
    expect(singleProduct.find('h1').text()).to.be.equal('toy')
  })
})
