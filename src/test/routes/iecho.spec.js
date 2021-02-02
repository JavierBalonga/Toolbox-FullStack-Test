import supertest from 'supertest'
import { expect } from 'chai'
import app from '../../api'

// eslint-disable-next-line no-undef
describe('GET /iecho?text=String!', () => {
  let server
  // eslint-disable-next-line no-undef
  before(() => (server = supertest(app)))

  // eslint-disable-next-line no-undef
  it('should give a 200 response on success', () =>
    server
      .get('/iecho?text=test')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(({ body }) => {
        expect(body).to.be.deep.equal({
          text: 'tset',
          palindrome: false
        })
      }))

  // eslint-disable-next-line no-undef
  it('should give a 400 response in case of invalid parameters', () =>
    server
      .get('/iecho')
      .expect(400)
      .expect('Content-Type', /json/)
      .then(({ body }) => {
        expect(body).to.be.deep.equal({
          error: 'no text'
        })
      }))
})
