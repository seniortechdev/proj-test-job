const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

//Assertion style
chai.should();

//using chai-http
chai.use(chaiHttp);

const mockSendNotification = {
    "category": "6340406c85a3065618c60272",
    "message": "TestMe3"
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjpbeyJfaWQiOiI2MzQ0M2UzYzdlYTA2YjVlNDFiMDQyNDMiLCJuYW1lIjoibWUiLCJlbWFpbCI6Im5hYmluIiwicGhvbmUiOiI5ODEyMzQ1NjciLCJwYXNzd29yZCI6Im5hYmluIiwiU3Vic2NyaWJlZCI6W3siX2lkIjoiNjM0MDQwNzM4NWEzMDY1NjE4YzYwMjc0IiwiY2F0ZWdvcnkiOiJNb3ZpZXMiLCJfX3YiOjB9LHsiX2lkIjoiNjM0MDQwNjQ4NWEzMDY1NjE4YzYwMjcwIiwiY2F0ZWdvcnkiOiJTcG9ydHMiLCJfX3YiOjB9XSwiQ2hhbm5lbHMiOlt7Il9pZCI6IjYzNDAyYWI3NTk2ODU5ZDc1ZjM3Yjc4OCIsImNoYW5uZWwiOiJFLU1haWwiLCJfX3YiOjB9LHsiX2lkIjoiNjM0MDJhYzM1OTY4NTlkNzVmMzdiNzhhIiwiY2hhbm5lbCI6IlB1c2ggTm90aWZpY2F0aW9uIiwiX192IjowfV0sImNyZWF0ZWRBdCI6IjE2NjU0MTY3NTI5ODkiLCJfX3YiOjB9XSwiaWF0IjoxNjY1NDE2NzgyLCJleHAiOjE2OTY1MjA3ODJ9.l0t6w652-u50F3Ym2eYp3JYrhKySCpyJQRO1n0sJyr8';

describe("Notification", () => {
    describe("POST Notification", () => {
        it("It should create a new Notification", (done) => {
            chai
                .request(app)
                .post("/api/v1/notification")
                .set({ Authorization: `Bearer ${token}` })
                .send(mockSendNotification)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("status").eql(true);
                    res.body.should.have.property("message");
                    done();
                });
        });
        it("It should get all Notification", (done) => {
            chai
                .request(app)
                .get("/api/v1/notification")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("status");
                    res.body.should.have.property("notifications");
                    done();
                });
        });
    });
});
