const {expect} = require('chai')
const db = require('../server/db')
const Order = db.model('order')
const User = db.model('user')
const Product = db.model('product')
const OrderProduct = db.model('order-product')

describe('Order Model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
  describe('correct complete status', () => {
    let order
    beforeEach(async () => {
      order = await Order.create({
        completed: false
      })
    })
    it('it has complete field', () => {
      expect(order.completed).to.equal(false)
    })
  })
  describe('association to user', () => {
    let order
    beforeEach(async () => {
      order = await Order.create({
        completed: false
      })
    })
    it('userId is null if association is not set', () => {
      expect(order.userId).to.equal(null)
    })
    it('can set association to user', async () => {
      const user = await User.create({
        firstName: 'Natalie',
        lastName: 'Test',
        email: 'natalie@test.com',
        address: 'test',
        password: 'password'
      })
      await order.setUser(user)
      expect(order.userId).to.equal(user.id)
    })
  })
})

describe('Order-Product Association', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })
  describe('orders and products can be associated', () => {
    let order
    let toy
    let user
    beforeEach(async () => {
      order = await Order.create({
        completed: false
      })
      user = await User.create({
        firstName: 'Natalie',
        lastName: 'Test',
        email: 'natalie@test.com',
        address: 'test',
        password: 'password'
      })
      await order.setUser(user)
      toy = await Product.create({
        name: 'toy',
        shortDescription: 'test',
        longDescription: 'test',
        price: 20,
        quantity: 100
      })
    })
    it('can add product to order', async () => {
      await order.addProduct(toy)
      const orderProduct = await OrderProduct.findOne()
      expect(orderProduct.productId).to.equal(toy.id)
      expect(orderProduct.orderId).to.equal(order.id)
    })
    it('can set order quantity', async () => {
      await order.addProduct(toy, {through: {orderQuantity: 10}})
      const orderProduct = await OrderProduct.findOne()
      expect(orderProduct.orderQuantity).to.equal(10)
    })
  })
})
