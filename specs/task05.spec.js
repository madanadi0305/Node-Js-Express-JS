let request = require("supertest");
let app = require("../src/express/app");
const assert = require("chai").assert;

describe("Functional Test #start_test", function() {
  it("should check post request #end_test", function(done) {
    request(app)
      .post("/signup")
      .set("Accept", "application/json")
      .send({ name: "johnny sins", email: "js@sick.com", password: "123" })
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.status, 200);
        done();
      });
  });
});
