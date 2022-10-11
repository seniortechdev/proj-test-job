const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

//Assertion style
chai.should();

//using chai-http
chai.use(chaiHttp);

const mockChannel = {
    channel: "SMS"
}

describe("Cannel", () => {
    describe("POST Cannel", () => {
        it("It should create a new Cannel", (done) => {
            chai
                .request(app)
                .post("/api/v1/channel")
                .send(mockChannel)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("status").eql(true);
                    res.body.should.have.property("message");
                    res.body.should.have.property("saved");
                    done();
                });
        });
        it("It should get all Channel", (done) => {
            chai
                .request(app)
                .get("/api/v1/channel")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("status");
                    res.body.should.have.property("channels");
                    done();
                });
        });
    });
});
