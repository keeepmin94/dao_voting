const daovote = artifacts.require("B2");

contract(" ", async () => {
  let vote;
  before(async () => {
    vote = await daovote.new();
  });

  describe("user fn test", async () => {
    it("setUser test ", async () => {
      await vote.setUser("user2");
    });

    it("getUser test", async () => {
      const res = await vote.getUser();
      assert.equal(res, "user2");
    });
  });

  describe("poll fn test", async () => {
    it("setPoll test", async () => {
      await vote.setPoll("Hello", "world");
    });
    it("getPoll test", async () => {
      const res = await vote.getPoll("Hello");
      assert.equal(res.title, "Hello");
      assert.equal(res.contents, "world");
    });
  });

  describe("voting fn test", async () => {
    it("vote test", async () => {
      await vote.vote("Hello", true);
    });
    it("vote result", async () => {
      const res = await vote.getPoll("Hello");
      assert.equal(res.agree, 1);
    });
  });
});
