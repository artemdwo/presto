const request = require('supertest')('https://jsonplaceholder.typicode.com')
const chai = require('chai')
const expect = require('chai').expect

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

  context('Resource retrieval function', () => {
    it('Returns JSON as all posts', (done) => {
      request
        .get('/posts')
        .expect(200)
        .end(function (err, result) {
          if (err) done(err)

          expect(result).to.be.jsonObj
          done()
        })
    })

    it('Returns default post as a JSON', (done) => {
      const post = {
        'userId': 1,
        'id': 1,
        'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      }

      request
        .get('/posts/1')
        .expect(200)
        .end(function (err, result) {
          if (err) done(err)
          console.log(result.body)
          expect(JSON.stringify(result.body)).to.equal(JSON.stringify(post))
          done()
        })
    })

    it('Returns default user as a JSON', (done) => {
      const user = {
        'id': 1,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz'        
      }

      request
        .get('/users/1')
        .expect(200)
        .end(function (err, result) {
          if (err) done(err)

          expect(result.body).to.include(user)
          done()
        })
    })
  })
})
