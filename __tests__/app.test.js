const request = require('supertest');
const app = require('../lib/app');

describe('check route responses', () => {
  // <html><body><h1>red</h1></body></html>
  it('root', () => {
    return request(app)
      .get('/')
      .send()
      .expect('Content-Type', 'text/plain')
      .expect(200)
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });

  it('echo', () => {
    return request(app)
      .post('/echo')
      .send('This is my request body')
      .expect('Content-Type', 'text/plain')
      .expect(200)
      .then(res => {
        expect(res.text).toEqual('This is my request body');
      });
  });

  it('red', () => {
    return request(app)
      .get('/red')
      .send()
      .expect('Content-Type', 'text/html')
      .expect(200)
      .then(res => {
        expect(res.text).toEqual('<html><body><h1 style="color: red">red</h1></body></html>');
      });
  });

  it('green', () => {
    return request(app)
      .get('/green')
      .send()
      .expect('Content-Type', 'text/html')
      .expect(200)
      .then(res => {
        expect(res.text).toEqual('<html><body><h1 style="color: green">green</h1></body></html>');
      });
  });

  it('blue', () => {
    return request(app)
      .get('/blue')
      .send()
      .expect('Content-Type', 'text/html')
      .expect(200)
      .then(res => {
        expect(res.text).toEqual('<html><body><h1 style="color: blue">blue</h1></body></html>');
      });
  });
});
