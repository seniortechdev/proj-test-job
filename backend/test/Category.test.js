const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

//Assertion style
chai.should();

//using chai-http
chai.use(chaiHttp);

const mockCtegory = {
    category: "Movies"
}

describe("Category", () => {
    describe("POST Category", () => {
        it("It should create a new Category", (done) => {
            chai
                .request(app)
                .post("/api/v1/category")
                .send(mockCtegory)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("status").eql(true);
                    res.body.should.have.property("message");
                    res.body.should.have.property("saved");
                    done();
                });
        });
        it("It should get all Category", (done) => {
            chai
                .request(app)
                .get("/api/v1/category")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("status");
                    res.body.should.have.property("categories");
                    done();
                });
        });
    });
});
