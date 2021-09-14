/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Breed, conn } = require('../../src/db.js');

const agent = session(app);
const breed = {
  id: "1f31e3ce-d132-4d44-85bc-adcf76701a60",
  name:  "Dufy",
  height: "20 - 35",
  weight: "8 - 14",
  life_span: "6 - 16",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TdrSizeCW0VTlxsjMt3Exx-Y8L2TwyGPTA&usqp=CAU"
};


describe('Breed routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Breed.sync({ force: true })
    .then(() => Breed.create(breed)));
  describe('GET /breeds', () => {
    it('should get 200', () =>
      agent.get('/breeds').expect(200)
    );
  });
});
