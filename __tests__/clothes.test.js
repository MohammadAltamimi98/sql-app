'use strict';
const supergoose = require('@code-fellows/supergoose');
const { app } = require('../src/server');
const mockRequest = supergoose(app);


describe('API SERVER', () => {
  it('can create a new clothes', async () => {
    let clothesItem = { name: 'test', brand: 'test' };
    const res = await mockRequest.post('/api/v1/clothes').send(clothesItem);
    expect(res.body.name).toBe(clothesItem.name);
    expect(res.body.brand).toBe(clothesItem.brand);
  });
});

