const request = require('supertest')('https://jsonplaceholder.typicode.com')
const chai = require('chai')

chai.use(require('chai-json'))
chai.use(require('chai-like'))

describe('JSONPlaceholder', () => {
  context('Resource creation function', () => {
    it('Returns 201 when successfully creates a post', (done) => {
      const post = {
        title: 'foo',
        body: 'bar',
        userId: 1
      }

      request
        .post('/posts')
        .send(post)
        .expect(201, done)
    })

    it('Returns 201 when successfully creates a user', (done) => {
      const user = {
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'phone': '1-770-736-8031 x56442'
      }

      request
        .post('/users')
        .send(user)
        .expect(201, done)
    })

    it('Returns the post data after successful creation', (done) => {
      const post = {
        title: 'foo',
        body: 'bar',
        userId: 1
      }

      request
        .post('/posts')
        .send(post)
        .expect(201)
        .end(function (err, result) {
          if (err) done(err)

          request
            .get('/posts/' + result.body.id)
            .expect(200)
            .end(function (err, result) {
              if (err) done(err)

              result.body.should.like(post)
              done()
            })
        })
    })

    it('Returns user details after successful creation', (done) => {
      const user = {
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'phone': '1-770-736-8031 x56442'
      }

      request
        .post('/users')
        .send(user)
        .expect(201)
        .end(function (err, result) {
          if (err) done(err)

          request
            .get('/users/' + result.body.id)
            .expect(200)
            .end(function (err, result) {
              if (err) done(err)

              result.body.should.like(user)
              done()
            })
        })
    })
  })
})
