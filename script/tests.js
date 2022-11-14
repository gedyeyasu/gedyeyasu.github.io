describe("Functional Methods", () => {
  it("The result sum should be ", () => {
    assert.equal(sum([2, 3, 9]), 14);
  });

  it("Expected output of multiply([1,2,3,4]) is 24  ", () => {
    assert.equal(multiply([1, 2, 3, 4]), 24);
  });

  it("Expected output of reverse('jag testar') is ratset gaj ", () => {
    assert.equal(reverse("jag testar"), "ratset gaj");
  });

  it("Expected output of filterLongWords(['john', 'doe', 'alice','tom'], 3) is ['john', 'alice'] ", () => {
    assert.equal(filterLongWords(["john", "doe", "alice", "tom"], 3).length, 2);
  });
});

describe("some test", () => {
  it("test 1", () => {
    assert.equal(testFunc(), exepctedreslut);
  });
});
