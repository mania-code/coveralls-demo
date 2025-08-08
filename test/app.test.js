const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('GET /', () => {
  it('should return 200 and Hello Coveralls!', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Hello Coveralls!');
  });
});
