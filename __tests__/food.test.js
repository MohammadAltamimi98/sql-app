'use strict';
const supergoose = require('@code-fellows/supergoose');
const { app } = require('../src/server');
const mockRequest = supergoose(app);



describe('API SERVER', () => {
  it('can create a new food', async () => {
    let foodItem = { name: 'test', cuisine: 'test' };
    const res = await mockRequest.post('/api/v1/food').send(foodItem);
    expect(res.body.name).toBe(foodItem.name);
    expect(res.body.cuisine).toBe(foodItem.cuisine);
  });


 
});


