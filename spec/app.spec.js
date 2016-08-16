var  app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:7000/";
var about_url = base_url + "about";
var contact_url = base_url + "about";

describe("Express Server API", function () {
  describe('should return users json on get /users', function() {
    it("returns status code 200", function (done) {
      supertest(app)
        .get('/users')
        .set('Accept', 'text/html')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it("returns a correct json format", function (done) {
      supertest(app)
        .get('/users')
        .expect([
                      {
                        name: 'Ren Cheng',
                        hobby: 'Ping Pong!',
                        img: ''
                      },
                      {
                        name: 'Dylan',
                        hobby: 'Pokemon GO!',
                        img: ''
                      },
                      {
                        name: 'Chris Ong',
                        hobby: 'Basketball!',
                        img: ''
                      },
                      {
                        name: 'Sebastian',
                        hobby: 'Archery!',
                        img: ''
                      },
                      {
                        name: 'Edison',
                        hobby: 'KDrama!',
                        img: ''
                      }

                    ], done);
    });

    it('returns status 404 when name is not found', function(done) {
     console.log("in 404 test");
     supertest(app)
       .get('/users/junius')
       .set('Accept', 'application/json')
       .expect('Content-Type', /json/)
       .expect(404);
       done();
   });

  });
});
