/* eslint-disable no-undef */
import supertest from 'supertest'
import { expect } from 'chai'
import app from '../../api'

describe('GET /iecho?text=String!', () => {
  let server
  before(() => (server = supertest(app)))

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

  it('should give a 400 response in case text was empty', () =>
    server
      .get('/iecho?text=')
      .expect(400)
      .expect('Content-Type', /json/)
      .then(({ body }) => {
        expect(body).to.be.deep.equal({
          error: 'no text'
        })
      }))

  it('should indicate by the "palindrome" flag if the sent text is a palindrome', () =>
    server
      .get('/iecho?text=sometemos')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(({ body }) => {
        expect(body).to.have.property('palindrome')
        expect(body.palindrome).to.be.equal(true)
      }))
})
