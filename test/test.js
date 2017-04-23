//TODO 

describe("getArea Triangle", function() {
  it("must compute the triangle area correctly", function() {
    let a = new Triangle({ width: 100, height: 100 });
    var result = a.getArea();
    result.should.match(/^5000$/);
  })
});