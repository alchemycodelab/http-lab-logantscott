const request = require('supertest');
const app = require('../lib/app');

describe('check route responses', () => {
  // <html><body><h1>red</h1></body></html>
  it('root', () => {
    return request(app)
      .get('/')
      .send()
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });
});
