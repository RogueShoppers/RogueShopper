const {expect} = require('chai')
const request = require('supertest')
const db = require('../server/db')
const app = require('../server/index')
const Order = db.model('order')
const User = db.model('user')
const Product = db.model('product')
const OrderProduct = db.model('order-product')

describe('Order Routes', () => {
  before(() => db.sync({force: true}))

  describe('/api/orders/', () => {
    it('GET /api/orders/?status=open', async () => {
      const order = await Order.create({
        completed: false
      })
      const user = await User.create({
        firstName: 'Natalie',
        lastName: 'Test',
        email: 'natalie@test.com',
        address: 'test',
        password: 'password'
      })
      await order.setUser(user)
      const toy = await Product.create({
        name: 'toy',
        shortDescription: 'test',
        longDescription: 'test',
        price: 20,
        quantity: 100
      })
      await order.addProduct(toy, {through: {orderQuantity: 10}})

      const res = await request(app).get('/api/orders?status=open')

      expect(res.status).to.equal(200)
      expect(res.body).to.be.an('object')
      expect(res.body.completed).to.be.equal(false)
      expect(res.body.products).to.be.an('array')
      expect(res.body.products.length).to.not.equal(0)
    })
  })
})
