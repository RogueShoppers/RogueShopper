const {expect} = require('chai')
const request = require('supertest')
const db = require('../server/db')
const app = require('../server/index')
const User = db.model('user')

// describe('User routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('/api/users/', () => {
//     const testEmail = 'test@testmaster.com'

//     beforeEach(() => {
//       return User.create({
//         email: testEmail
//       })
//     })

//     it('GET /api/users', async () => {
//       const res = await request(app)
//         .get('/api/users')
//         .expect(200)

//       expect(res.body).to.be.an('array')
//       expect(res.body[0].email).to.be.equal(testEmail)
//     })
//   })
// })
describe('Sequelize Model', () => {
  before(() => db.sync({force: true}))
  afterEach(() => db.sync({force: true}))

  it('has fields firstName, lastName, email', async () => {
    const user = await User.create({
      firstName: 'Sterling',
      lastName: 'Archer',
      email: 'sarcher@cia.gov'
    })
    expect(user.firstName).to.equal('Sterling')
    expect(user.lastName).to.equal('Archer')
    expect(user.email).to.equal('sallyride@nasa.gov')
  })

  it('requires firstName, lastName, email', async () => {
    const user = User.build()
    try {
      await user.validate()
      throw Error(
        'validation should have failed without firstName, lastName, email'
      )
    } catch (error) {
      expect(error.message).to.contain('firstName cannot be null')
      expect(error.message).to.contain('lastName cannot be null')
      expect(error.message).to.contain('email cannot be null')
    }
  })
})
