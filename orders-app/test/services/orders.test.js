const app = require('../../src/app');

describe('\'Orders\' service', () => {
  it('registered the service', () => {
    const service = app.service('orders');
    expect(service).toBeTruthy();
  });
});
