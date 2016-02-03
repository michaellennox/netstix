var frisby = require('frisby');
var mongoose = require('mongoose');

var URL = 'http://localhost:8080/';

frisby.create('api call to create user')
  .post(URL + 'users', {
    username: 'testuser1',
    password: 'password1'
  })
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json; charset=utf-8')

  .after(function() {
    frisby.create('can sign user out')
      .delete(URL + 'sessions', {
      })
      .expectStatus(200)
      .expectJSON({
        status: 'Signed out successfully!'
      })

      .after(function() {
        frisby.create('an invalid user cannot sign in')
          .post(URL + 'sessions', {
            username: 'invaliduser',
            password: 'notpassword'
          })
          .expectStatus(401)

          .after(function() {
            frisby.create('a valid user can sign in')
              .post(URL + 'sessions', {
                username: 'testuser1',
                password: 'password1'
              })
              .expectStatus(200)
              .expectJSON({
                status: 'Login successful!'
              })
              .toss();
            })
        .toss();
      })
    .toss();
  })
.toss();
