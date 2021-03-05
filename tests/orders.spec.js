const {expect} = require('chai')
const request = require('supertest')
const {default: user} = require('../client/store/user')
const db = require('../server/db')
const app = require('../server/index')
const Order = db.model('order')
const User = db.model('user')
const Product = db.model('product')
const OrderProduct = db.model('order-product')

describe('Order routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/orders/', () => {
    beforeEach(() => {
      return User.create({
        id: 1,
        firstName: 'test',
        lastName: 'test',
        address: 'test',
        email: 'test@test.com',
        password: 'password'
      })
    })

    it('GET /api/orders/:userId?status', async () => {
      let order = await Order.create(
        {completed: false, userId: 1},
        {include: Product}
      )

      const res = await request(app)
        .get('/api/orders/1?status=open')
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.completed).to.be.equal(false)
      expect(res.body.products).to.be.an('array')
      expect(res.body.products.length).to.be.equal(0)
    })
    // it('GET /api/orders/:userId?status', async () => {
    //   let order = await Order.create(
    //     {completed: false, userId: 1},
    //     {include: Product}
    //   )
    //   let product = await Product.create({
    //     id: 1,
    //     name: 'product',
    //     shortDescription: 'test',
    //     longDescription: 'test',
    //     price: 10,
    //     quantity: 100,
    //     userId: 1,
    //   })

    //   const res = await request(app)
    //     .get('/api/orders/1?status=open')
    //     .expect(200)

    //   expect(res.body).to.be.an('object')
    //   expect(res.body.completed).to.be.equal(false)
    //   expect(res.body.products).to.be.an('array')
    //   expect(res.body.products.length).to.not.equal(0)
    // })
  })
})
