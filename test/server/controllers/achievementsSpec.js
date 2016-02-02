var frisby = require('frisby');
var mongoose = require('mongoose');

var URL = 'http://localhost:8080/achievements/';

frisby.create('api call to add an achievement, read the list of achievements, then view the specific achievement')
  .post(URL, {
    title:     'Bug Hunter',
    criteria:  'Find an error in the Makers Academy materials'
  })
  .expectStatus(200)

  .after(function() {
    frisby.create('view list of achievements')
      .get(URL)
      .expectStatus(200)
      .expectHeaderContains('content-type', 'application/json; charset=utf-8')
      .expectJSON('?', {
        title: 'Bug Hunter',
        criteria: 'Find an error in the Makers Academy materials'
      })

      .afterJSON(function(achievements) {
        var achievement = achievements[0];
        frisby.create('view individual achievement')
          .get(URL + achievement._id)
          .expectStatus(200)
          .expectHeaderContains('content-type', 'application/json; charset=utf-8')
          .expectJSON({
            title: 'Bug Hunter',
            criteria: 'Find an error in the Makers Academy materials'
          })

          .after(function(done) {
            mongoose.connect('mongodb://localhost/makers-achievements-test', function() {
              mongoose.connection.db.dropDatabase(function() {
                mongoose.connection.close(function() {
                  done();
                });
              });
            });
          })
        .toss();
      })
    .toss();
  })
.toss();
